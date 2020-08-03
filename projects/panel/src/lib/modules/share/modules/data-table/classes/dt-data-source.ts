import {DataSource} from '@angular/cdk/table';
import {CollectionViewer} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {IService} from '../../../../../common/interfaces/IService';
import {catchError, finalize} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {isNullOrUndefined} from 'util';
import {ListFilter} from "../../../../../common/models/list-filter.model";

export abstract class DtDataSource<T> extends DataSource<T> {

	public data$ = new BehaviorSubject<T[]>([]);

	public currentCount: number;
	public totalCount: number;

	protected loadingSubject = new BehaviorSubject<boolean>(false);
	public loading$ = this.loadingSubject.asObservable();

	sub: Subscription;
	filters: ListFilter = new ListFilter();

	protected constructor(private filterForm?: FormGroup) {
		super();
	}

	connect(): Observable<T[] | ReadonlyArray<T>> {
		if (this.filterForm) {
			this.subscribeToFilterForm();
		}
		return this.data$.asObservable();
	}

	disconnect(collectionViewer: CollectionViewer): void {
		this.data$.complete();
		this.loadingSubject.complete();
		if (this.sub) {
			this.sub.unsubscribe();
		}
	}

	subscribeToFilterForm() {
		this.addFormValuesToFilterObject(this.filterForm.value);
		this.sub = this.filterForm.valueChanges.subscribe(value => {
			this.addFormValuesToFilterObject(value);
			this.loadData();
		});
	}

	addFormValuesToFilterObject(value: string) {
		for (let key of Object.keys(value)) {
			if (!isNullOrUndefined(value[key])) {
				this.filters[key] = value[key];
			} else {
				delete this.filters[key];
			}
		}
	}

	abstract loadData();
}

export class HttpDtDataSource<T> extends DtDataSource<T> {
	constructor(private service: IService<T>, filterForm?: FormGroup) {
		super(filterForm);
	}

	loadData() {
		this.loadingSubject.next(true);
		this.service.list(this.filters).pipe(
			catchError(() => of([])),
			finalize(() => this.loadingSubject.next(false)))
			.subscribe(value => {
				if (value['items']) {
					this.currentCount = value['items'].length;
					this.totalCount = value['totalCount'];
					this.data$.next(value['items']);
				}
			});
	}
}
