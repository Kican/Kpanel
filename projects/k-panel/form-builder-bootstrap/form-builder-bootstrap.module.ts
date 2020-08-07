import {NgModule} from '@angular/core';
import {CoreModule} from "@ngx-k-panel/core";
import {EditTextComponent} from './elements/edit-text/edit-text/edit-text.component';
import {FormBuilderModule} from "../form-builder/form-builder.module";


@NgModule({
	declarations: [
		EditTextComponent
	],
	imports: [
		CoreModule,
		FormBuilderModule
	]
})
export class FormBuilderBootstrapModule {
}
