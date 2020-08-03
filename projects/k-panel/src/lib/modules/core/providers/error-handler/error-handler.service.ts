import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {HttpErrorResponse} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
	providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
	toastr: ToastrService;

	constructor(private injector: Injector, private translateService: TranslateService) {
		// TODO just happened on Angular 9
		setTimeout(() => this.toastr = injector.get(ToastrService), 100);
	}

	handleError(error: HttpErrorResponse): void {
		if (error.error && error.error.Message) {
			if (error.status == 0) {
				this.toastr.error(this.translateService.instant('connection_error'));
				return;
			}
			this.toastr.error(error.error.Description, error.error.Message);
		}
	}
}
