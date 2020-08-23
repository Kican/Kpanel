import {Inject, ModuleWithProviders, NgModule} from '@angular/core';
import {ListPageComponent} from './components/list-page/list-page.component';
import {RouterModule, Routes} from '@angular/router';
import {EditPageComponent} from './components/edit-page/edit-page.component';
import {DataTableModule} from '@ngx-k-panel/data-table';
import {KPanelCoreModule} from '@ngx-k-panel/core';
import {KPanelFormBuilderModule} from '@ngx-k-panel/form-builder';
import {EntityManagerConfig} from './models';
import {EntityManagerService} from './services/entity-manager.service';
import {KFormBuilderModule} from '@ngx-k/form-builder';
import {KFormBuilderBootstrapModule} from '@ngx-k/form-builder-bootstrap';

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
		KFormBuilderBootstrapModule
	]
})
export class KPanelEntityManagerModule {
	constructor(
		entityManagerService: EntityManagerService,
		@Inject(EntityManagerConfig) config: EntityManagerConfig
	) {
		if (config.useDiscovery) {
			entityManagerService.fetchAllEntityManagers();
		}
	}

	static forRoot(config: EntityManagerConfig): ModuleWithProviders<KPanelEntityManagerModule> {
		return {
			ngModule: KPanelEntityManagerModule,
			providers: [
				{provide: EntityManagerConfig, useValue: config}
			]
		};
	}
}
