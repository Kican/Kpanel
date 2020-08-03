import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PagedResult} from '../models/paged-result.model';
import {IService} from '../interfaces/IService';

export abstract class BaseService<TEntityDto, TEntityPartialDto, TEntityInsertDto, TEntityEditDto, TEntityUpsertDto, TEntityFilter> implements IService<TEntityPartialDto> {

	protected constructor(protected url: string, protected http: HttpClient) {
	}

	create(resource: TEntityInsertDto) {
		return this.http.post(this.url, resource);
	}

	get(id: number | string): Observable<TEntityDto> {
		return this.http.get<TEntityDto>(`${this.url}/${id}`);
	}

	update(resource: TEntityEditDto) {
		return this.http.patch(this.url, resource);
	}

	upsert(resource: TEntityUpsertDto) {
		return this.http.put(this.url, resource);
	}

	delete(id: number) {
		return this.http.delete(`${this.url}/${id}`);
	}

	list(filter: TEntityFilter | {} | null = null): Observable<PagedResult<TEntityPartialDto>> {
		return this.http.get<PagedResult<TEntityPartialDto>>(this.url  + this.jsonToQueryString(filter ?? {}));
	}

	protected jsonToQueryString(json) {
		return '?' +
			Object.keys(json)
				.filter(x => x != null && json[x] != null)
				.map(key => `${key}=${json[key].toString()}`)
				.join('&');
	}
}
