import {PagedResult} from '../models/paged-result.model';
import {Observable} from 'rxjs';

export interface IService<TEntityPartialDto> {
	list(filter: any): Observable<PagedResult<TEntityPartialDto>>;
	delete(id: number);
}
