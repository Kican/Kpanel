import {Inject, ModuleWithProviders, NgModule} from '@angular/core';
import {ListPageComponent} from './components/list-page/list-page.component';
import {RouterModule, Routes} from '@angular/router';
import {EditPageComponent} from './components/edit-page/edit-page.component';
import {KPanelCoreModule} from '@ngx-k-panel/core';
import {KPanelFormBuilderModule} from '@ngx-k-panel/form-builder';
import {DefaultEntityManagerConfig, ENTITY_MANAGER_CONFIG, EntityManagerConfig} from './models';
import {EntityManagerService} from './services/entity-manager.service';
import {KFormBuilderModule} from '@ngx-k/form-builder';
import {KFormBuilderBootstrapModule} from '@ngx-k/form-builder-bootstrap';
import {DataTableModule} from '@ngx-k/components/data-table';
import {KCoreCommonModule} from '@ngx-k/core/common';

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
	],
	imports: [
		DataTableModule,
		KPanelCoreModule,
		RouterModule,
		KPanelFormBuilderModule,
		KFormBuilderModule,
		KFormBuilderBootstrapModule,
		KCoreCommonModule
	]
})
export class KPanelEntityManagerModule {
	constructor(entityManagerService: EntityManagerService) {
		entityManagerService.fetchAllEntityManagers();
	}

	static forRoot(config: Partial<EntityManagerConfig>): ModuleWithProviders<KPanelEntityManagerModule> {
		return {
			ngModule: KPanelEntityManagerModule,
			providers: [
				{provide: ENTITY_MANAGER_CONFIG, useValue: {...DefaultEntityManagerConfig, ...config}}
			]
		};
	}
}
