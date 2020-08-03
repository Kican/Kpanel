import {Injectable} from '@angular/core';
import {ToastOption} from "../models/toast/toastOption";

@Injectable({
	providedIn: 'root'
})
export abstract class ToastService {
	abstract success();
	abstract success(message: string);

	abstract failed();
	abstract failed(message: string);

	abstract show(option: ToastOption);
}
