import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ChangePassword} from "../models/account/change-password.model";
import {User} from "../../user/models/user";
import {NewPassWithToken} from "../models/account/new-pass-with-token.model";

@Injectable({
	providedIn: 'root'
})
export class AccountService {
	user$ = new BehaviorSubject<User>(null);

	constructor(private http: HttpClient) {
	}

	info(): Observable<User> {
		return this.http.get<User>('api/Account/Info');
	}

	changePassword(data: ChangePassword) {
		return this.http.post('api/Account/ChangePassword', data);
	}

	uploadAvatar(file: File): Observable<HttpEvent<any>> {
		const form = new FormData();
		form.append('file', file, file.name);
		const request = new HttpRequest('POST', 'api/Account/uploadAvatar', form, {reportProgress: true});
		return this.http.request(request);
	}

	forgotPassword(username: string) {
		return this.http.get('api/Account/ForgotPassword/' + username);
	}

	newPassword(data: NewPassWithToken) {
		return this.http.post('api/Account/NewPassword', data);
	}
}
