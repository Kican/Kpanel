import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
	selector: 'app-data-table-pagination',
	templateUrl: './data-table-pagination.component.html',
	styleUrls: ['./data-table-pagination.component.scss']
})
export class DataTablePaginationComponent implements OnInit {
	@Input()
	totalItems: number;

	@Input()
	itemPerPage: number;

	@Input()
	currentItems: number;

	@Output()
	valueChanges = new EventEmitter<number>();

	currentPage: number;

	constructor() {
	}

	get paginationDescription() {
		const start = ((this.currentPage - 1) * this.itemPerPage + 1);
		return this.currentItems ?
			`نمایش $start تا $end از $total رکورد`
				.replace('$start', start.toString())
				.replace('$end', (start + this.currentItems - 1).toString())
				.replace('$total', (this.totalItems) + '')
			: '';
	}

	pageChanged($event) {
		this.valueChanges.next($event);
	}

	ngOnInit(): void {
	}
}
