import {NgModule} from '@angular/core';
import {NewPassComponent} from './components/_partials/new-pass/new-pass.component';
import {ForgotPasswordComponent} from './components/_partials/forgot-password/forgot-password.component';
import {LoginPageComponent} from './components/_partials/login-page/login-page.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthPageComponent} from './components/auth-page/auth-page.component';
import {CoreModule} from '@ngx-k-panel/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthHttpInterceptor} from './providers/auth-http.interceptor';

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
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true},
	],
	declarations: [
		LoginPageComponent,
		ForgotPasswordComponent,
		NewPassComponent,
		AuthPageComponent
	],
	imports: [
		CoreModule,
		routerModule
	],
	exports: [
		RouterModule
	]
})
export class AuthModule {
}
