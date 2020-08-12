import {NgModule} from '@angular/core';
import {KPanelCoreModule} from '@ngx-k-panel/core';
import {UsersListPageComponent} from './components/users-list-page/users-list-page.component';
import {RouterModule, Routes} from '@angular/router';
import {KPanelEntityManagerModule} from '@ngx-k-panel/entity-manager';
import {DataTableModule} from '@ngx-k-panel/data-table';
import {KPanelFormBuilderModule} from '@ngx-k-panel/form-builder';

export const usersManagerRoutes: Routes = [
	{
		path: 'users-manager', children: [
			{path: '', component: UsersListPageComponent},
			{path: 'list', component: UsersListPageComponent},
		]
	}
];

@NgModule({
	declarations: [
		UsersListPageComponent
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
