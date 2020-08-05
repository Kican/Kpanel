import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "@ngx-k-panel/auth";
import {EntityManagerModule} from "@ngx-k-panel/entity-manager";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {ToastrModule} from "ngx-toastr";
import {DashboardModule} from "@ngx-k-panel/dashboard";
import {CoreModule} from "@ngx-k-panel/core";
import {DataTableConfig} from "@ngx-k-panel/data-table";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AuthModule,
		EntityManagerModule,
		DashboardModule,
		CoreModule.forRoot({base_url: 'http://127.0.0.1:5000/'}),
		AppRoutingModule,
		TooltipModule.forRoot(),
		ToastrModule.forRoot()
	],
	providers: [
		{provide: DataTableConfig, useClass: DataTableConfig}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
