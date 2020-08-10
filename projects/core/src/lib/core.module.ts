import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollService} from './services/scroll.service';
import {WindowSizeService} from './services/window-size.service';
import {TranslateModule} from '@ngx-translate/core';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
import {FixUrlInterceptor} from './provider/fix-url.interceptor';
import {KPanelConfig} from './common/kpanel-config';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxPermissionsModule} from 'ngx-permissions';
import {NgxKPanelDialogModule} from './_modules/ngx-kpanel-dialog/ngx-kpanel-dialog.module';

export const ngxPermissionsModule = NgxPermissionsModule.forRoot();
export const translateModule = TranslateModule.forRoot();
export const ngBootstrapFormValidationModule = NgBootstrapFormValidationModule.forRoot();

@NgModule({
	providers: [
		ScrollService,
		WindowSizeService,
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
		NgxKPanelDialogModule,
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
		NgxKPanelDialogModule,
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
