import {NgModule} from '@angular/core';
import {CoreModule} from "@ngx-k-panel/core";
import {FormBuilderComponent} from './components/form-builder/form-builder.component';


@NgModule({
	declarations: [
		FormBuilderComponent
	],
	imports: [
		CoreModule
	]
})
export class FormBuilderModule {
}
