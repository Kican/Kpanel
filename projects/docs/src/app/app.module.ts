import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ToastrModule} from 'ngx-toastr';
import {DataTableConfig, DataTableModule} from '@ngx-k-panel/data-table';
import {FormBuilderTestComponent} from './components/form-builder-test/form-builder-test.component';
import {RoomListPageComponent} from './components/room-list-page/room-list-page.component';
import {EditRoomPageComponent} from './components/edit-room-page/edit-room-page.component';
import {NgPersianDatepickerModule} from 'ng-persian-datepicker';
import {KPanelAuthModule} from '@ngx-k-panel/auth';
import {KPanelEntityManagerModule} from '@ngx-k-panel/entity-manager';
import {KSidebarModule, SidebarMode, SidebarStatus} from '@ngx-k/components/sidebar';
import {KPanelDashboardModule} from '@ngx-k-panel/dashboard';
import {KPanelFormBuilderModule} from '@ngx-k-panel/form-builder';
import {KPanelCoreModule} from '@ngx-k-panel/core';
import {ModalModule} from 'ngx-bootstrap/modal';
import {KPanelUsersManagerModule} from '@ngx-k-panel/users-manager';
import {KComponentsBootstrapModule} from '@ngx-k/components-bootstrap';

@NgModule({
	declarations: [
		AppComponent,
		FormBuilderTestComponent,
		RoomListPageComponent,
		EditRoomPageComponent
	],
	imports: [
		BrowserModule,
		KPanelAuthModule,
		KPanelEntityManagerModule,
		KSidebarModule.forRoot({
			initialState: SidebarStatus.Opened,
			hasBackdrop: false,
			isFixed: true,
			mode: SidebarMode.Push
		}),
		KPanelDashboardModule,
		KPanelFormBuilderModule,
		KPanelUsersManagerModule,
		KComponentsBootstrapModule,
		DataTableModule,
		KPanelCoreModule.forRoot({base_url: 'http://127.0.0.1:5000/'}),
		AppRoutingModule,
		TooltipModule.forRoot(),
		ToastrModule.forRoot(),
		NgPersianDatepickerModule,
	],
	providers: [
		{provide: DataTableConfig, useClass: DataTableConfig},
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
