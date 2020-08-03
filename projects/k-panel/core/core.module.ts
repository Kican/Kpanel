import {ErrorHandler, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {CUSTOM_ERROR_MESSAGES} from "ng-bootstrap-form-validation";
import {HttpInterceptorService} from "../src/lib/modules/core/providers/http-interceptor/http-interceptor.service";
import {FORMS_CUSTOM_ERRORS} from "../src/lib/modules/core/providers/forms-custom-errors/forms-custom-errors";


@NgModule({
	providers: [
		// todo: use func or const for configurations
		// {provide: ErrorHandler, useClass: environment.production ? ErrorHandlerService : ErrorHandler},
		{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
		{provide: CUSTOM_ERROR_MESSAGES, useValue: FORMS_CUSTOM_ERRORS, multi: true}
	]
})
export class CoreModule {
}
