import {IPagable} from '../interfaces/IPagable';
import {ISearchable} from '../interfaces/ISearchable';
import {ISortable} from '../interfaces/ISortable';

export interface IListFilter extends IPagable, ISortable, ISortable {

}

export class ListFilter implements IPagable, ISearchable, ISortable {
	count = 8;
	isDesc = true;
	orderBy = 'id';
	page = 1;
	q = '';
}
