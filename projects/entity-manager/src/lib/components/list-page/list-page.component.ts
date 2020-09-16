import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {EntityManagerHttpDataSource} from '../../services/entity-manager-http-data-source';
import {DtDataSource, DataTableOptions} from '@ngx-k-panel/data-table';
import {IComponent, ILayoutComponent} from '@ngx-k/form-builder';
import {DialogService} from '@ngx-k/components/dialog';
import {ToastService} from '@ngx-k/components/toast';
import {EntityManagerService} from '../../services/entity-manager.service';
import {EntityManagerInfoDto} from '../../models';
import {refCount, shareReplay} from 'rxjs/operators';

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

	info: EntityManagerInfoDto;

	entityName: string = null;

	constructor(
		private http: HttpClient,
		private router: ActivatedRoute,
		private dialogService: DialogService,
		private toastService: ToastService,
		private entityManagerService: EntityManagerService
	) {
	}

	ngOnInit(): void {
		this.info = null;
		this.router.params.subscribe(value => {
			this.entityName = value.type;
			this.entityManagerService.getByName(this.entityName).subscribe(x => {
				this.info = x;
				this.dataSource = new EntityManagerHttpDataSource(this.info.url, this.http, this.filterForm);
				this.init();
			});
		});
	}

	init(): void {
		this.displayedColumns = [];
		this.fields = [];
		this.http
			.get<ILayoutComponent>(this.info.url + `/$fields/list`)
			.pipe(shareReplay({refCount: true, bufferSize: 1}))
			.subscribe(value => {
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

			this.http.delete(this.info.url + `/${id}`).subscribe(_ => {
				this.dataSource.loadData();
				this.toastService.warning({message: 'موجودیت مورد نظر با موفقیت حذف شد', title: null, position: 'left-down', action: null});
			});
		});
	}


	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}
}
