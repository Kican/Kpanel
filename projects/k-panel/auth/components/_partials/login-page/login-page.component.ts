import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {NgxPermissionsService} from 'ngx-permissions';
import {TranslateService} from '@ngx-translate/core';
// import {AppValidators} from "@ngx-k-panel/core";
import {AuthenticationService} from "../../../services/authentication.service";
import {AccountService} from "../../../services/account.service";

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
	loginForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private authService: AuthenticationService,
		private accountService: AccountService,
		private toastr: ToastrService,
		private router: Router,
		private permissionsService: NgxPermissionsService,
		private translateService: TranslateService
	) {
	}

	ngOnInit(): void {
		this.createForm();
	}

	submit() {
		this.authService.login(this.loginForm.value).subscribe(value => {
			this.accountService.user$.next(value['user']);
			this.router.navigate(['/']).then(() => {
				this.permissionsService.loadPermissions(this.authService.roles);
				this.toastr.success(this.translateService.instant('success_login'));
			});
		});
	}

	createForm() {
		this.loginForm = this.fb.group({
			email: [null, [Validators.required, Validators.email, Validators.minLength(5)]],
			password: [null, [Validators.required, Validators.minLength(8)]],
		});
	}
}
