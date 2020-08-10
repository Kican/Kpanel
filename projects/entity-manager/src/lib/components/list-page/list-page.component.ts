import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {BsModalService} from 'ngx-bootstrap/modal';
import {EntityManagerHttpDataSource} from '../../services/entity-manager-http-data-source';
import {DtDataSource, DataTableOptions} from '@ngx-k-panel/data-table';
import {DialogService, ToastService} from '@ngx-k-panel/core';
import {IComponent, ILayoutComponent} from '@ngx-k-panel/form-builder';

@Component({
	selector: 'app-list-page',
	templateUrl: './list-page.component.html',
	styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
	dataSource: DtDataSource<any>;
	displayedColumns: string[] = [];

	dtConfig = new DataTableOptions();

	filterForm: FormGroup;

	fields: IComponent[];

	entityName: string = null;

	constructor(
		private http: HttpClient,
		private router: ActivatedRoute,
		private dialogService: DialogService,
		private modalService: BsModalService,
		private toastService: ToastService
	) {
	}

	ngOnInit(): void {
		this.router.params.subscribe(value => {
			this.dataSource = new EntityManagerHttpDataSource(value.type, this.http, this.filterForm);
			this.init(value.type);
		});
	}

	init(entityName: string): void {
		this.entityName = entityName;
		this.displayedColumns = [];
		this.fields = [];
		this.http.get<ILayoutComponent>(`api/${entityName}/$fields/list`).subscribe(value => {
			this.fields = value.children;
			this.displayedColumns.push(...value.children.map(x => x.name));
			this.displayedColumns.push('options');

			this.dataSource.loadData();
		});

	}

	delete(id: number): void {
		const ref = this.dialogService.confirm({
			size: 'small',
			data: {text: 'آیا برای حذف مطمئن هستید؟', acceptBtnText: 'حذف', declineBtnText: 'انصراف'}
		});
		ref.onResult().subscribe(value => {

			if (value === false) {
				return;
			}

			this.http.delete(`api/${this.entityName}/${id}`).subscribe(_ => {
				this.dataSource.loadData();
				this.toastService.success();
			});
		});
	}


	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}
}
