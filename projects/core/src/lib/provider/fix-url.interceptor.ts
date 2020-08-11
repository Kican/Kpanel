import {Inject, Injectable} from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KPanelConfig} from '../common/kpanel-config';

@Injectable()
export class FixUrlInterceptor implements HttpInterceptor {

	constructor(@Inject(KPanelConfig) private panelConfig: KPanelConfig) {
	}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		request = request.clone({
			url: (this.isAbsoluteUrl(request.url) ? request.url : this.panelConfig.base_url + request.url),
		});
		return next.handle(request);
	}

	isAbsoluteUrl(url: string): boolean {
		return url.startsWith('http://') || url.startsWith('https://');
	}
}
