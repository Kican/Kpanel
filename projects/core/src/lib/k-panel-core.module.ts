import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule} from '@ngx-translate/core';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
import {FixUrlInterceptor} from './provider/fix-url.interceptor';
import {KPanelConfig} from './common/kpanel-config';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxPermissionsModule} from 'ngx-permissions';
import {KPanelDialogModule} from './_modules/ngx-kpanel-dialog/k-panel-dialog.module';

export const ngxPermissionsModule = NgxPermissionsModule.forRoot();
export const translateModule = TranslateModule.forRoot();
export const ngBootstrapFormValidationModule = NgBootstrapFormValidationModule.forRoot();

@NgModule({
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: FixUrlInterceptor, multi: true},
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ngxPermissionsModule,
		translateModule,
		ngBootstrapFormValidationModule,
		KPanelDialogModule,
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
		KPanelDialogModule,
	]
})
export class KPanelCoreModule {
	static forRoot(config: KPanelConfig): ModuleWithProviders<KPanelCoreModule> {
		return {
			ngModule: KPanelCoreModule,
			providers: [
				{provide: KPanelConfig, useValue: config}
			]
		};
	}
}
