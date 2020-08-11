import {NgModule} from '@angular/core';
import {NewPassComponent} from './components/_partials/new-pass/new-pass.component';
import {ForgotPasswordComponent} from './components/_partials/forgot-password/forgot-password.component';
import {LoginPageComponent} from './components/_partials/login-page/login-page.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthPageComponent} from './components/auth-page/auth-page.component';
import {CoreModule} from '@ngx-k-panel/core';
import {NgxKAuthModule} from '@ngx-k/auth';

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
		CoreModule,
		routerModule,
		NgxKAuthModule
	],
	exports: [
		RouterModule,
		NgxKAuthModule
	]
})
export class AuthModule {
}
