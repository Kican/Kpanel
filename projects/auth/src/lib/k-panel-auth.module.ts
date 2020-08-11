import {NgModule} from '@angular/core';
import {KPanelCoreModule} from '@ngx-k-panel/core';
import {KAuthModule} from '@ngx-k/auth';
import {NewPassComponent} from './components/_partials/new-pass/new-pass.component';
import {ForgotPasswordComponent} from './components/_partials/forgot-password/forgot-password.component';
import {LoginPageComponent} from './components/_partials/login-page/login-page.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthPageComponent} from './components/auth-page/auth-page.component';


const authRoutes: Routes = [
	{
		path: 'auth', component: AuthPageComponent, children: [
			{path: 'login', component: LoginPageComponent},
			{path: 'forgot-password', component: ForgotPasswordComponent},
			{path: 'new-pass/:username/:token', component: NewPassComponent},
		]
	}
];

export const routerModule = RouterModule.forRoot(authRoutes);

@NgModule({
	declarations: [
		LoginPageComponent,
		ForgotPasswordComponent,
		NewPassComponent,
		AuthPageComponent
	],
	imports: [
		KPanelCoreModule,
		routerModule,
		KAuthModule
	],
	exports: [
		RouterModule,
		KAuthModule
	]
})
export class KPanelAuthModule {
}
