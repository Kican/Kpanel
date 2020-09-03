import {NgModule} from '@angular/core';

import {DataTableButtonContainerComponent} from './components/_partials/data-table-button-container/data-table-button-container.component';
import {DataTableComponent} from './components/data-table/data-table.component';
import {DataTableCountComponent} from './components/_partials/data-table-count/data-table-count.component';
import {DataTablePaginationComponent} from './components/_partials/data-table-pagination/data-table-pagination.component';
import {DtSortableDirective} from './directives/dt-sortable.directive';
import {DataTableSearchComponent} from './components/_partials/data-table-search/data-table-search.component';
import {CdkTableModule} from '@angular/cdk/table';
import {DataTableContainerComponent} from './components/data-table-container/data-table-container.component';
import {KPanelCoreModule} from '@ngx-k-panel/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

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
		KPanelCoreModule,
		CdkTableModule,
		NgbPaginationModule
	],
	exports: [
		DataTableContainerComponent,
		DataTableButtonContainerComponent,
		DataTableComponent,
		DtSortableDirective,
		CdkTableModule,
		NgbPaginationModule
	],
})
export class DataTableModule {
}
