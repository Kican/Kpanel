import {NgModule} from '@angular/core';
import {CoreModule} from "@ngx-k-panel/core";
import {AuthGuard, AuthModule} from "@ngx-k-panel/auth";
import {Routes} from "@angular/router";
import {DashboardLayoutComponent} from "./components/dashboard-layout/dashboard-layout.component";
import {PanelContentComponent} from "./components/panel-content/panel-content.component";
import {SideBarModule} from "./modules/side-bar/side-bar.module";
import {NavBarModule} from "./modules/nav-bar/nav-bar.module";
import {NavBarComponent} from "./components/_partials/nav-bar/nav-bar.component";
import {SideBarComponent} from "./components/_partials/side-bar/side-bar.component";
import {PanelScrollTopComponent} from "./components/_partials/panel-scroll-top/panel-scroll-top.component";
import {NeoCrumbModule} from "ngx-neocrumb";

export function getPanelRoutes(routes: Routes): Routes {
	return [
		{
			path: '', component: DashboardLayoutComponent, canActivate: [AuthGuard], children: [
				...routes
			]
		}
	];
}

@NgModule({
	declarations: [
		DashboardLayoutComponent,
		PanelContentComponent,
		NavBarComponent,
		SideBarComponent,
		PanelScrollTopComponent
	],
	imports: [
		CoreModule,
		AuthModule,
		SideBarModule,
		NavBarModule,
		NeoCrumbModule.forRoot()
	],
	exports: []
})
export class DashboardModule {
}
