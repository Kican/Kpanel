import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {environment} from "../../../../../environments/environment";
import {ErrorHandlerService} from "./providers/error-handler/error-handler.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpInterceptorService} from "./providers/http-interceptor/http-interceptor.service";
import {CUSTOM_ERROR_MESSAGES} from "ng-bootstrap-form-validation";
import {FORMS_CUSTOM_ERRORS} from "./providers/forms-custom-errors/forms-custom-errors";


@NgModule({
	providers: [
		{provide: ErrorHandler, useClass: environment.production ? ErrorHandlerService : ErrorHandler},
		{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
		{provide: CUSTOM_ERROR_MESSAGES, useValue: FORMS_CUSTOM_ERRORS, multi: true}
	]
})
export class CoreModule {
}
