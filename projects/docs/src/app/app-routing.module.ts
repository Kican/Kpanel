import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import {EntityManagerRoutes} from '@ngx-k-panel/entity-manager';
import {FormBuilderTestComponent} from "./components/form-builder-test/form-builder-test.component";
// import {getPanelRoutes} from '@ngx-k-panel/dashboard';

const routes: Routes = [
	// ...EntityManagerRoutes,
	{path: 'form-builder-test', component: FormBuilderTestComponent}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
