import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableContainerComponent} from './components/data-table-container/data-table-container.component';
import {DataTableButtonContainerComponent} from './components/_partials/data-table-button-container/data-table-button-container.component';
import {DataTableComponent} from './components/data-table/data-table.component';
import {DataTableCountComponent} from './components/_partials/data-table-count/data-table-count.component';
import {DataTablePaginationComponent} from './components/_partials/data-table-pagination/data-table-pagination.component';
import {DtSortableDirective} from './directives/dt-sortable.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTableSearchComponent} from './components/_partials/data-table-search/data-table-search.component';
import {CdkTableModule} from '@angular/cdk/table';
import {TranslateModule} from '@ngx-translate/core';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {DataTableConfig} from "./classes/data-table-config";

@NgModule({
	declarations: [
		DataTableContainerComponent,
		DataTableButtonContainerComponent,
		DataTableComponent,
		DataTableCountComponent,
		DataTablePaginationComponent,
		DtSortableDirective,
		DataTableSearchComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		CdkTableModule,
		PaginationModule.forRoot(),
		TranslateModule
	],
	exports: [
		DataTableContainerComponent,
		DataTableButtonContainerComponent,
		DataTableComponent,
		DtSortableDirective,
		CdkTableModule,
		PaginationModule
	],
})
export class DataTableModule {
	static forRoot(config: DataTableConfig): ModuleWithProviders<DataTableModule> {
		return {
			ngModule: DataTableModule,
			providers: [
				{provide: 'config', useValue: config}
			],
		};
	}
}
