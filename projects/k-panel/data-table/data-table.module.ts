import {NgModule} from '@angular/core';

import {DataTableButtonContainerComponent} from './components/_partials/data-table-button-container/data-table-button-container.component';
import {DataTableComponent} from './components/data-table/data-table.component';
import {DataTableCountComponent} from './components/_partials/data-table-count/data-table-count.component';
import {DataTablePaginationComponent} from './components/_partials/data-table-pagination/data-table-pagination.component';
import {DtSortableDirective} from './directives/dt-sortable.directive';
import {DataTableSearchComponent} from './components/_partials/data-table-search/data-table-search.component';
import {CdkTableModule} from '@angular/cdk/table';
import {TranslateModule} from '@ngx-translate/core';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {DataTableContainerComponent} from "./components/data-table-container/data-table-container.component";
import {CoreModule} from "@ngx-k-panel/core";

@NgModule({
	declarations: [
		DataTableContainerComponent,
		DataTableButtonContainerComponent,
		DataTableComponent,
		DataTableCountComponent,
		DataTablePaginationComponent,
		DtSortableDirective,
		DataTableSearchComponent,
	],
	imports: [
		CoreModule,
		CdkTableModule,
		PaginationModule.forRoot()
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
}
