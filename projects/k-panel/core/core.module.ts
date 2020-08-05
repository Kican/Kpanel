import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ScrollService} from "./services/scroll.service";
import {WindowSizeService} from "./services/window-size.service";
import {DialogService} from "./services/dialog.service";
import {TranslateModule} from "@ngx-translate/core";
import {NgxPermissionsModule} from "ngx-permissions";
import {NgBootstrapFormValidationModule} from "ng-bootstrap-form-validation";
import {FixUrlInterceptor} from "./provider/fix-url.interceptor";
import {KPanelConfig} from "./common/kpanel-config";
import {ModalModule} from "ngx-bootstrap/modal";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
	providers: [
		ScrollService,
		WindowSizeService,
		DialogService,
		{provide: HTTP_INTERCEPTORS, useClass: FixUrlInterceptor, multi: true},
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NgxPermissionsModule.forRoot(),
		TranslateModule.forRoot(),
		NgBootstrapFormValidationModule.forRoot(),

		ModalModule.forRoot(),
		NgSelectModule
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		TranslateModule,
		NgxPermissionsModule,
		NgBootstrapFormValidationModule,
		ModalModule,
		NgSelectModule
	]
})
export class CoreModule {
	static forRoot(config: KPanelConfig): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [
				{provide: KPanelConfig, useValue: config}
			]
		};
	}
}
