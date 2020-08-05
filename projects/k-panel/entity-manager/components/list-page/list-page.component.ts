import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {BsModalService} from 'ngx-bootstrap/modal';
import {EntityManagerHttpDataSource} from "../../services/entity-manager-http-data-source";
import {DtDataSource, DataTableOptions} from "@ngx-k-panel/data-table";
import {ToastService} from "@ngx-k-panel/core";

@Component({
	selector: 'app-list-page',
	templateUrl: './list-page.component.html',
	styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
	dataSource: DtDataSource<{}>;
	displayedColumns: string[] = [];

	dtConfig = new DataTableOptions();

	filterForm: FormGroup;

	fields: IComponent[];

	entityName: string = null;

	constructor(
		private http: HttpClient,
		private router: ActivatedRoute,
		private modalService: BsModalService,
		private toastService: ToastService
	) {
	}

	ngOnInit(): void {
		this.router.params.subscribe(value => {
			this.init(value.type);
		});
	}

	init(entityName: string) {
		this.entityName = entityName;
		this.dataSource = null;
		this.displayedColumns = [];
		this.fields = [];
		this.http.get<ILayoutComponent>(`api/${entityName}/$fields/list`).subscribe(value => {
			this.fields = value.children;
			this.displayedColumns.push(...value.children.map(x => x.name));
			this.displayedColumns.push('options');

			this.dataSource = new EntityManagerHttpDataSource(entityName, this.http, this.filterForm);
			this.dataSource.loadData();
		});

	}

	delete(id: number) {
		// this.modalService.show(AcceptDialogComponent, {
		// 	class: 'modal-sm',
		// 	initialState: {text: 'آیا برای حذف مطمئن هستید؟', acceptBtnText: 'حذف', declineBtnText: 'انصراف'}
		// });
		// this.modalService.onHide.pipe(
		// 	take(1),
		// 	filter(value => value == DialogResult.Confirm)
		// ).subscribe((reason) => {
		// 	this.http.delete(`api/${this.entityName}/${id}`).subscribe(value => {
		// 		this.dataSource.loadData();
		// 		this.toastService.success();
		// 	});
		// });
	}


	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}
}

export interface IComponent {
	type: string;
	name: string;
}

export interface ILayoutComponent extends IComponent {
	children: IComponent[];
}
