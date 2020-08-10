import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {tap} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Login} from "../models/login.model";

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	private TOKEN_KEY = 'token';
	decodedToken: any;

	private onExpire$ = new Subject();
	onExpire = this.onExpire$.asObservable();

	jwtHelper = new JwtHelperService();

	private timeOut: any;

	constructor(private http: HttpClient) {
		if (this.token && !this.jwtHelper.isTokenExpired(this.token)) {
			this.setExpireTimeout();
		}
	}

	get token(): string {
		return localStorage.getItem(this.TOKEN_KEY);
	}

	set token(token: string) {
		localStorage.setItem(this.TOKEN_KEY, token);
	}

	get roles(): string[] | null {
		if (this.decodeToken()) {
			const roles = this.decodeToken()['role'];
			return (Array.isArray(roles)) ? roles : [roles];
		}
		return null;
	}

	login(data: Login): Observable<string> {
		return this.http.post<string>('api/Account/login', data).pipe(tap(value => {
			this.token = value['access_token'];
			this.setExpireTimeout();
		}));
	}

	private setExpireTimeout() {
		const expirationTime = this.decodeToken()['exp'] * 1000;
		const now = +new Date();
		this.timeOut = setTimeout(() => this.onExpire$.next(), expirationTime - now);
	}

	private clearTimeOut() {
		if (this.timeOut) {
			clearTimeout(this.timeOut);
		}
	}

	decodeToken() {
		return this.decodedToken = this.jwtHelper.decodeToken(this.token);
	}

	isAuthenticated(): boolean {
		return this.token && !this.jwtHelper.isTokenExpired(this.token);
	}

	isInRole(role: string, only = false) {
		return only ? this.roles.length == 1 && this.roles.includes(role) : this.roles.includes(role);
	}

	logOut() {
		this.clearTimeOut();
		localStorage.removeItem(this.TOKEN_KEY);
	}
}

