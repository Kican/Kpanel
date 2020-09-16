import {NgModule} from '@angular/core';
import {KPanelCoreModule} from '@ngx-k-panel/core';
import {UsersListPageComponent} from './components/users-list-page/users-list-page.component';
import {RouterModule, Routes} from '@angular/router';
import {KPanelEntityManagerModule} from '@ngx-k-panel/entity-manager';
import {KPanelFormBuilderModule} from '@ngx-k-panel/form-builder';
import {DialogUpdatePasswordComponent} from './components/_dialogs/dialog-update-password/dialog-update-password.component';
import {DialogSetUserRolesComponent} from './components/_dialogs/dialog-set-user-roles/dialog-set-user-roles.component';
import {EditUserPageComponent} from './components/edit-user-page/edit-user-page.component';
import {SidebarDynamicMenuService} from '@ngx-k/components/sidebar';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {DataTableModule} from '@ngx-k/components/data-table';

export const usersManagerRoutes: Routes = [
	{
		path: 'users-manager', children: [
			{path: '', component: UsersListPageComponent},
			{path: 'list', component: UsersListPageComponent},
			{path: 'edit/:id', component: EditUserPageComponent},
			{path: 'new', component: EditUserPageComponent},
		]
	}
];

@NgModule({
	declarations: [
		UsersListPageComponent,
		DialogUpdatePasswordComponent,
		DialogSetUserRolesComponent,
		EditUserPageComponent
	],
	imports: [
		KPanelCoreModule,
		KPanelEntityManagerModule,
		DataTableModule,
		KPanelFormBuilderModule,
		RouterModule,
		NgbModalModule
	],
	exports: []
})
export class KPanelUsersManagerModule {
	constructor(private sidebarDynamicMenuService: SidebarDynamicMenuService) {
		setTimeout(() => {
			this.sidebarDynamicMenuService.addGroup('main-sidebar', {
				title: 'مدیریت کاربران',
				groupId: 'users-manager',
				items: [{
					itemId: 'users',
					label: 'کاربران',
					iconClass: '',
					routerLink: '',
					type: 'dropdown',
					items: [
						{iconClass: 'mdi mdi-account-multiple-outline', itemId: 'users-list', label: 'لیست کاربران', routerLink: '/users-manager/list', type: 'single'},
						{iconClass: 'mdi mdi-account-plus-outline', itemId: 'users-add', label: 'ثبت کاربر', routerLink: '/users-manager/new', type: 'single'}
					]
				}]
			});
		}, 1);
	}
}
