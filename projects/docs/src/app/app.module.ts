import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "@ngx-k-panel/auth";
import {EntityManagerModule} from "@ngx-k-panel/entity-manager";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AuthModule,
		EntityManagerModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
