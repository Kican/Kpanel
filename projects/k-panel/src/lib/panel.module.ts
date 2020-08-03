import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EntityManagerRoutes} from "../entity-manager/src/entity-manager.module";
import {DashboardLayoutComponent} from './components/dashboard-layout/dashboard-layout.component';
import {AuthPageComponent} from "../auth/src/components/auth-page/auth-page.component";
import {ShareModule} from "./modules/share/share.module";
import {NavBarComponent} from "./components/_partials/nav-bar/nav-bar.component";
import {SideBarComponent} from "./components/_partials/side-bar/side-bar.component";
import {AcceptDialogComponent} from "./components/_dialogs/accept-dialog/accept-dialog.component";
import {PanelScrollTopComponent} from "./components/_partials/panel-scroll-top/panel-scroll-top.component";
import {PanelContentComponent} from "./components/panel-content/panel-content.component";
import {AuthGuard} from "./modules/core/gaurds/auth-gaurd/auth.guard";

export function getPanelRoutes(routes: Routes): Routes {
	return [
		{
			path: '', component: DashboardLayoutComponent, canActivate: [AuthGuard], children: [
				...EntityManagerRoutes,
				...routes
			]
		}
	];
}

@NgModule({
	declarations: [
		AuthPageComponent,
		DashboardLayoutComponent,
		NavBarComponent,
		SideBarComponent,
		AcceptDialogComponent,
		PanelScrollTopComponent,
		PanelContentComponent
	],
	imports: [
		ShareModule,
	]
})
export class PanelModule {
}
