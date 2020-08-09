import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgxPermissionsModule} from 'ngx-permissions';

export const ngxPermissions = NgxPermissionsModule.forRoot();

@NgModule({
	imports: [
		ngxPermissions
	],
	exports: [
		NgxPermissionsModule
	]
})
export class CoreModule {
	public static forRoot(): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: []
		};
	}
}
