import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {getPanelRoutes} from "../../../k-panel/dashboard/dashboard.module";
import {EntityManagerRoutes} from "@ngx-k-panel/entity-manager";
import {FormBuilderTestComponent} from "./components/form-builder-test/form-builder-test.component";

const routes: Routes = [
	...EntityManagerRoutes,
	{path: 'form-builder-test', component: FormBuilderTestComponent}
];

@NgModule({
	imports: [
		RouterModule.forRoot(getPanelRoutes(routes))
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
