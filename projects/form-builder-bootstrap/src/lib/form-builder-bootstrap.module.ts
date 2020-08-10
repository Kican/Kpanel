import {NgModule} from '@angular/core';
import {CoreModule} from "@ngx-k-panel/core";
import {FormBuilderModule} from "@ngx-k-panel/form-builder";
import {InputTextComponent} from './components/input-text/input-text.component';
import {InputNumberComponent} from './components/input-number/input-number.component';
import { LinearLayoutComponent } from './components/layout/linear-layout/linear-layout.component';


@NgModule({
	declarations: [
		InputTextComponent,
		InputNumberComponent,
		LinearLayoutComponent,
	],
	imports: [
		CoreModule,
		FormBuilderModule
	]
})
export class FormBuilderBootstrapModule {
}
