import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {NgxPermissionsService} from 'ngx-permissions';
import {TranslateService} from '@ngx-translate/core';
import {AppValidators} from '@ngx-k/core/common';
import {KAccountService, KAuthenticationService} from '@ngx-k/auth';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
	loginForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private authService: KAuthenticationService,
		private accountService: KAccountService,
		private toastr: ToastrService,
		private router: Router,
		private permissionsService: NgxPermissionsService,
		private translateService: TranslateService
	) {
	}

	ngOnInit(): void {
		this.createForm();
	}

	submit(): void {
		this.authService.login(this.loginForm.value).subscribe(value => {
			this.accountService.user$.next(value['user']);
			this.router.navigate(['/']).then(() => {
				this.permissionsService.loadPermissions(this.authService.roles);
				this.toastr.success(this.translateService.instant('success_login'));
			});
		});
	}

	createForm(): void {
		this.loginForm = this.fb.group({
			email: [null, [Validators.required, Validators.minLength(5), AppValidators.noWhiteSpace, AppValidators.asciiOnly]],
			password: [null, [Validators.required, Validators.minLength(8), AppValidators.noWhiteSpace, AppValidators.asciiOnly]],
		});
	}
}
