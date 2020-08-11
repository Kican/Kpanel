import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import {KAccountService} from '@ngx-k/auth';

@Component({
	selector: 'app-new-pass',
	templateUrl: './new-pass.component.html',
	styleUrls: ['./new-pass.component.scss']
})
export class NewPassComponent implements OnInit {
	newPassForm: FormGroup;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private toastr: ToastrService,
		private accountService: KAccountService,
		private translateService: TranslateService
	) {
	}

	ngOnInit(): void {
		this.createForm();
		this.newPassForm.get('username').setValue(this.route.snapshot.paramMap.get('username'));
		this.newPassForm.get('resetToken').setValue(this.route.snapshot.paramMap.get('token'));
	}

	createForm(): void {
		this.newPassForm = this.formBuilder.group({
			resetToken: [null, Validators.required],
			username: [null, [Validators.required]],
			newPassword: [null, [Validators.required, Validators.minLength(8)]],
			confirmPassword: [null, [Validators.required, Validators.minLength(8),]],
		}, {validators: []});
	}

	submit(): void {
		this.accountService.newPassword(this.newPassForm.value).subscribe(value => {
			this.router.navigate(['/auth/login']);
			this.toastr.success(this.translateService.instant('success_new_pass'));
		});
	}
}
