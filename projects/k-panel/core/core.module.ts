import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollService} from './services/scroll.service';
import {WindowSizeService} from './services/window-size.service';
import {DialogService} from './services/dialog.service';
import {TranslateModule} from '@ngx-translate/core';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
import {FixUrlInterceptor} from './provider/fix-url.interceptor';
import {KPanelConfig} from './common/kpanel-config';
import {ModalModule} from 'ngx-bootstrap/modal';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxPermissionsModule} from 'ngx-permissions';

export const ngxPermissions = NgxPermissionsModule.forRoot();
export const translateModule = TranslateModule.forRoot();
export const modalModule = ModalModule.forRoot();
export const ngBootstrapFormValidation = NgBootstrapFormValidationModule.forRoot();

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
		// ngxPermissions,
		// translateModule,
		// modalModule,
		// ngBootstrapFormValidation,
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
		NgSelectModule,
		// ModalModule
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
