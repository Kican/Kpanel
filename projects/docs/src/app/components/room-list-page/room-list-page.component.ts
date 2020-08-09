import {Component, OnInit} from '@angular/core';
import {DataTableOptions, DtDataSource} from '@ngx-k-panel/data-table';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {EntityManagerHttpDataSource} from '@ngx-k-panel/entity-manager';

@Component({
	selector: 'app-room-list-page',
	templateUrl: './room-list-page.component.html',
	styleUrls: ['./room-list-page.component.scss']
})
export class RoomListPageComponent implements OnInit {
	dataSource: DtDataSource<{}>;
	displayedColumns: string[] = ['title', 'transactionLifeSpanInMinutes', 'startTransactionTime', 'endTransactionTime', 'options'];
	dtConfig = new DataTableOptions();

	filterForm: FormGroup;

	constructor(
		private http: HttpClient,
	) {
	}

	ngOnInit(): void {
		this.dataSource = new EntityManagerHttpDataSource('room', this.http, this.filterForm);
		this.dataSource.loadData();
	}
}
