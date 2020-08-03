import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewPassComponent} from "./components/_partials/new-pass/new-pass.component";
import {ForgotPasswordComponent} from "./components/_partials/forgot-password/forgot-password.component";
import {LoginPageComponent} from "./components/_partials/login-page/login-page.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthPageComponent} from "./components/auth-page/auth-page.component";

const AuthRoutes: Routes = [
	{
		path: 'auth', component: AuthPageComponent, children: [
			{path: 'login', component: LoginPageComponent},
			{path: 'forgot-password', component: ForgotPasswordComponent},
			{path: 'new-pass/:username/:token', component: NewPassComponent},
		]
	}
];

@NgModule({
	declarations: [
		LoginPageComponent,
		ForgotPasswordComponent,
		NewPassComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forRoot(AuthRoutes)
	]
})
export class AuthModule {
}
