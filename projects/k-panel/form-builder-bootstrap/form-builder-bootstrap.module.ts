import {NgModule} from '@angular/core';
import {CoreModule} from "@ngx-k-panel/core";
import {FormBuilderModule} from "@ngx-k-panel/form-builder";
import {EditTextComponent} from "./components/edit-text/edit-text.component";
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputNumberComponent } from './components/input-number/input-number.component';


@NgModule({
	declarations: [
		EditTextComponent,
		InputTextComponent,
		InputNumberComponent,
	],
	imports: [
		CoreModule,
		FormBuilderModule
	]
})
export class FormBuilderBootstrapModule {
}
