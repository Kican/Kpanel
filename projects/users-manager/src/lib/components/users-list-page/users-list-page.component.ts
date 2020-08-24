import {Component, OnInit} from '@angular/core';
import {DataTableOptions, DtDataSource} from '@ngx-k-panel/data-table';
import {FormGroup} from '@angular/forms';
import {IComponent, ILayoutComponent} from '@ngx-k/form-builder';
import {HttpClient} from '@angular/common/http';
import {DialogService} from '@ngx-k/components/dialog';
import {ToastService} from '@ngx-k/components/toast';
import {EntityManagerHttpDataSource} from '@ngx-k-panel/entity-manager';
import {DialogSetUserRolesComponent} from '../_dialogs/dialog-set-user-roles/dialog-set-user-roles.component';
import {DialogUpdatePasswordComponent} from '../_dialogs/dialog-update-password/dialog-update-password.component';

@Component({
	selector: 'lib-users-list-page',
	templateUrl: './users-list-page.component.html'
})
export class UsersListPageComponent implements OnInit {

	dataSource: DtDataSource<any>;
	displayedColumns: string[] = [];

	dtConfig = new DataTableOptions();

	filterForm: FormGroup;

	fields: IComponent[];

	entityName: string = 'UsersManager';

	constructor(
		private http: HttpClient,
		private dialogService: DialogService,
		private toastService: ToastService
	) {
	}

	ngOnInit(): void {
		this.dataSource = new EntityManagerHttpDataSource(this.entityName, this.http, this.filterForm);
		this.init(this.entityName);
	}

	init(entityName: string): void {
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
				this.toastService.success({message: 'کاربر با موفقیت حذف شد', position: 'left-down', action: null, title: null});
			});
		});
	}

	openRolesDialog(userId: number): void {
		const dialogRef = this.dialogService.open<DialogSetUserRolesComponent, boolean>(DialogSetUserRolesComponent, {size: 'mid'});
		dialogRef.componentInstance.userId = userId;

	}

	openChangePasswordDialog(userId: number): void {
		const dialogRef = this.dialogService.open<DialogUpdatePasswordComponent, boolean>(DialogUpdatePasswordComponent, {size: 'small'});
		dialogRef.componentInstance.userId = userId;
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}

}
