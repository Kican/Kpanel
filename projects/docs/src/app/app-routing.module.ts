import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {getPanelRoutes} from "../../../k-panel/dashboard/dashboard.module";
import {EntityManagerRoutes} from "@ngx-k-panel/entity-manager";

const routes: Routes = [
	...EntityManagerRoutes
];

@NgModule({
	imports: [
		RouterModule.forRoot(getPanelRoutes(routes))
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
