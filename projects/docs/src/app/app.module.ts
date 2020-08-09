import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from '@ngx-k-panel/auth';
import {EntityManagerModule} from '@ngx-k-panel/entity-manager';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ToastrModule} from 'ngx-toastr';
import {DashboardModule} from '@ngx-k-panel/dashboard';
import {CoreModule} from '@ngx-k-panel/core';
import {DataTableConfig} from '@ngx-k-panel/data-table';
import {FormBuilderTestComponent} from './components/form-builder-test/form-builder-test.component';
import {ComponentCollection, ComponentDescriptorCollection, FormBuilderModule} from '@ngx-k-panel/form-builder';
import {BootstrapComponentCollection} from '@ngx-k-panel/form-builder-bootstrap';
import {KSidebarModule, SidebarMode, SidebarStatus} from 'ngx-k-components/sidebar';

@NgModule({
	declarations: [
		AppComponent,
		// FormBuilderTestComponent
	],
	imports: [
		BrowserModule,
		// AuthModule,
		// EntityManagerModule,
		// KSidebarModule.forRoot({
		// 	initialState: SidebarStatus.Opened,
		// 	hasBackdrop: false,
		// 	isFixed: true,
		// 	mode: SidebarMode.Push
		// }),
		// DashboardModule,
		// FormBuilderModule,
		CoreModule.forRoot({base_url: 'http://erp.vistath.com/'}),
		AppRoutingModule,
		TooltipModule.forRoot(),
		ToastrModule.forRoot()
	],
	providers: [
		{provide: DataTableConfig, useClass: DataTableConfig},
		{provide: ComponentCollection, useClass: BootstrapComponentCollection},
		{provide: ComponentDescriptorCollection, useClass: ComponentDescriptorCollection},
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
