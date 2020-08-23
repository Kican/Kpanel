import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EntityManagerRoutes} from '@ngx-k-panel/entity-manager';
import {getPanelRoutes} from '@ngx-k-panel/dashboard';
import {usersManagerRoutes} from '@ngx-k-panel/users-manager';

const routes: Routes = [
	...EntityManagerRoutes,
	...usersManagerRoutes
];

@NgModule({
	imports: [
		RouterModule.forRoot(getPanelRoutes(routes))
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
