import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../../../../../environments/environment";
import {AuthenticationService} from "../../../../../auth/src/services/authentication.service";

@Injectable({
	providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

	constructor(private authService: AuthenticationService) {
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		req = req.clone({
			url: (this.isabsoluteUrl(req.url) ? req.url : environment.URL + req.url),
			setHeaders: {
				Authorization: `Bearer ${this.authService.token}`
			}
		});
		return next.handle(req);
	}

	isabsoluteUrl(url: string): boolean {
		return url.startsWith('http://') || url.startsWith('https://');
	}
}
