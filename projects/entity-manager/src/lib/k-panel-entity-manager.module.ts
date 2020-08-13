import {NgModule} from '@angular/core';
import {ListPageComponent} from './components/list-page/list-page.component';
import {RouterModule, Routes} from '@angular/router';
import {EditPageComponent} from './components/edit-page/edit-page.component';
import {FormBuilderComponent} from './components/form-builder/form-builder.component';
import {DataTableModule} from '@ngx-k-panel/data-table';
import {KPanelCoreModule} from '@ngx-k-panel/core';
import {KPanelFormBuilderModule} from '@ngx-k-panel/form-builder';

export const EntityManagerRoutes: Routes = [
	{
		path: 'entity/:type', children: [
			{path: 'list', component: ListPageComponent},
			{path: 'edit/:id', component: EditPageComponent},
			{path: 'new', component: EditPageComponent},
		]
	}
];

@NgModule({
	declarations: [
		ListPageComponent,
		EditPageComponent,
		FormBuilderComponent
	],
	imports: [
		DataTableModule,
		KPanelCoreModule,
		RouterModule,
		KPanelFormBuilderModule
	]
})
export class KPanelEntityManagerModule {
}