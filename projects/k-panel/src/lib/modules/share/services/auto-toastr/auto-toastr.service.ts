import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class AutoToastrService {

	constructor(private toastrService: ToastrService) {
	}

	invalidForm() {
		this.toastrService.warning('ورودی نامعتبر');
	}

	success() {
		this.toastrService.success('عملیات با موفقیت انجام شد.');
	}
}
