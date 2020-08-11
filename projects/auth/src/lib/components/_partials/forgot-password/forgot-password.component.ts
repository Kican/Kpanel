import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgxKAccountService} from '@ngx-k/auth';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
	forgotPassForm: FormGroup;
	emailSent: boolean;

	constructor(
		private formBuilder: FormBuilder,
		private accountService: NgxKAccountService,
		private toastr: ToastrService
	) {
	}

	ngOnInit(): void {
		this.createForms();
	}

	createForms(): void {
		this.forgotPassForm = this.formBuilder.group({
			username: [null, [Validators.required, Validators.minLength(5)]]
		});
	}

	submit(): void {
		this.accountService.forgotPassword(this.forgotPassForm.get('username').value).subscribe(value => {
			this.emailSent = true;
			this.forgotPassForm.disable();
			this.toastr.info('لینک بازیابی رمز عبور برای شما ایمیل شد.');
		});
	}
}
