import {NgModule} from '@angular/core';
import {CoreModule} from '@ngx-k-panel/core';
import {AuthGuard, AuthModule} from '@ngx-k-panel/auth';
import {Routes} from '@angular/router';
import {DashboardLayoutComponent} from './components/dashboard-layout/dashboard-layout.component';
import {PanelContentComponent} from './components/panel-content/panel-content.component';
import {NavBarComponent} from './components/_partials/nav-bar/nav-bar.component';
import {SideBarComponent} from './components/_partials/side-bar/side-bar.component';
import {PanelScrollTopComponent} from './components/_partials/panel-scroll-top/panel-scroll-top.component';
import {KSidebarModule} from 'ngx-k-components/sidebar';
import {KNavbarModule} from 'ngx-k-components/navbar';

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
		KSidebarModule,
		KNavbarModule
	],
	exports: []
})
export class DashboardModule {
}