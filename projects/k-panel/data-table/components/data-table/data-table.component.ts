import {AfterViewInit, ChangeDetectorRef, Component, ContentChild, Input, OnInit} from '@angular/core';
import {DataTableOptions} from '../../models/data-table-config.model';
import {DtSortableDirective} from '../../directives/dt-sortable.directive';
import {BehaviorSubject} from 'rxjs';
import {DtDataSource} from '../../classes/dt-data-source';
import {Sortable} from '../../models/sortable.model';
import {NgForm} from '@angular/forms';
import {slideToggle} from "../../../src/lib/animations/pub-anim";

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss'],
	animations: [slideToggle]
})
export class DataTableComponent implements OnInit, AfterViewInit {
	@Input()
	config: DataTableOptions = new DataTableOptions();

	@Input()
	dataSource: DtDataSource<any>;

	@Input()
	sortable: DtSortableDirective;

	@ContentChild(NgForm)
	filterForm: NgForm;

	currentItems = 0;
	totalItems = 0;
	itemPerPage = 8;

	sortableChange$ = new BehaviorSubject<Sortable>({property: 'id', isDesc: true});

	filterStatus: boolean;
	searchStatus: boolean;

	constructor(private cdr: ChangeDetectorRef) {
	}

	ngOnInit() {
	}

	ngAfterViewInit(): void {
		this.sortableSetup();
		this.dataSource.data$.subscribe(value => {
			this.totalItems = this.dataSource.totalCount;
			this.currentItems = this.dataSource.currentCount;
		});
		this.cdr.detectChanges();
	}

	countChange($event) {
		this.itemPerPage = $event;
		this.dataSource.filters['count'] = $event;
		this.dataSource.loadData();
	}

	pageChange($event) {
		this.dataSource.filters['page'] = $event.page;
		this.dataSource.loadData();
	}

	sortableSetup() {
		this.sortableChange$.subscribe(value => {
			this.dataSource.filters['orderBy'] = value.property;
			this.dataSource.filters['isDesc'] = value.isDesc;
			this.dataSource.loadData();
		});
	}

	searchChange($event) {
		this.dataSource.filters['q'] = $event;
		this.dataSource.loadData();
	}
}
