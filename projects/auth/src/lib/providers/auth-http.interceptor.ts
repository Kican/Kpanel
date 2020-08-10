import {Injectable} from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

	constructor(private authService: AuthenticationService) {
	}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (this.authService.isAuthenticated()) {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${this.authService.token}`
				}
			});
		}
		return next.handle(request);
	}
}
