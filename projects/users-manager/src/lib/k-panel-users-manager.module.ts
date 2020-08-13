import {NgModule} from '@angular/core';
import {KPanelCoreModule} from '@ngx-k-panel/core';
import {UsersListPageComponent} from './components/users-list-page/users-list-page.component';
import {RouterModule, Routes} from '@angular/router';
import {KPanelEntityManagerModule} from '@ngx-k-panel/entity-manager';
import {DataTableModule} from '@ngx-k-panel/data-table';
import {KPanelFormBuilderModule} from '@ngx-k-panel/form-builder';
import {DialogUpdatePasswordComponent} from './components/_dialogs/dialog-update-password/dialog-update-password.component';
import {DialogSetUserRolesComponent} from './components/_dialogs/dialog-set-user-roles/dialog-set-user-roles.component';
import {EditUserPageComponent} from './components/edit-user-page/edit-user-page.component';

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
		RouterModule
	],
	exports: []
})
export class KPanelUsersManagerModule {
}
