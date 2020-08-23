import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {catchError, finalize} from 'rxjs/operators';
import {of} from 'rxjs';
import {DtDataSource} from '@ngx-k-panel/data-table';

export class EntityManagerHttpDataSource extends DtDataSource<{}> {
	constructor(private url: string, private httpClient: HttpClient, filterForm?: FormGroup) {
		super(filterForm);
	}

	setUrl(url: string): void {
		this.url = url;
	}

	loadData(): void {
		this.loadingSubject.next(true);
		this.httpClient.get(this.url + this.jsonToQueryString(this.filters ?? {})).pipe(
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

	protected jsonToQueryString(json): string {
		return '?' +
			Object.keys(json)
				.filter(x => x != null && json[x] != null)
				.map(key => `${key}=${json[key].toString()}`)
				.join('&');
	}

}
