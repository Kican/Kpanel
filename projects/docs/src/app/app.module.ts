import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ToastrModule} from 'ngx-toastr';
import {CoreModule} from 'ngx-k-panel/core';

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
		CoreModule,
		AppRoutingModule,
		TooltipModule.forRoot(),
		ToastrModule.forRoot()
	],
	providers: [
		// {provide: DataTableConfig, useClass: DataTableConfig},
		// {provide: ComponentCollection, useClass: BootstrapComponentCollection},
		// {provide: ComponentDescriptorCollection, useClass: ComponentDescriptorCollection},
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
