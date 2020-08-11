import {NgModule} from '@angular/core';
import {KPanelAuthModule} from '@ngx-k-panel/auth';
import {AuthGuard} from '@ngx-k/auth';
import {KPanelCoreModule} from '@ngx-k-panel/core';
import {KSidebarModule} from '@ngx-k/components/sidebar';
import {KNavbarModule} from '@ngx-k/components/navbar';
import {Routes} from '@angular/router';
import {DashboardLayoutComponent} from './components/dashboard-layout/dashboard-layout.component';
import {PanelContentComponent} from './components/panel-content/panel-content.component';
import {NavBarComponent} from './components/_partials/nav-bar/nav-bar.component';
import {SideBarComponent} from './components/_partials/side-bar/side-bar.component';
import {PanelScrollTopComponent} from './components/_partials/panel-scroll-top/panel-scroll-top.component';


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
		KPanelCoreModule,
		KPanelAuthModule,
		KSidebarModule,
		KNavbarModule
	],
	exports: []
})
export class KPanelDashboardModule {
}
