import {DtDataSource} from "../../share/modules/data-table/classes/dt-data-source";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {catchError, finalize} from "rxjs/operators";
import {of} from "rxjs";

export class EntityManagerHttpDataSource extends DtDataSource<{}> {
	constructor(private entityName: string, private httpClient: HttpClient, filterForm?: FormGroup) {
		super(filterForm);
	}

	loadData() {
		this.loadingSubject.next(true);
		this.httpClient.get(`api/${this.entityName}` + this.jsonToQueryString(this.filters ?? {})).pipe(
			catchError(() => of([])),
			finalize(() => this.loadingSubject.next(false))
		).subscribe(value => {
			if (value['items']) {
				this.currentCount = value['items'].length;
				this.totalCount = value['totalCount'];
				this.data$.next(value['items']);
			}
		});
	}

	protected jsonToQueryString(json) {
		return '?' +
			Object.keys(json)
				.filter(x => x != null && json[x] != null)
				.map(key => `${key}=${json[key].toString()}`)
				.join('&');
	}

}
