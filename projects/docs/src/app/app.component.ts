import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NgxPermissionsService} from 'ngx-permissions';
import {NgSelectConfig} from '@ng-select/ng-select';
import {AuthenticationService} from '@ngx-k-panel/auth';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FA} from './langs/fa/_fa';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'docs';

	constructor(
		private translateService: TranslateService,
		private permissionService: NgxPermissionsService,
		private ngSelectConfig: NgSelectConfig,
		private authService: AuthenticationService,
		private router: Router,
		private toastr: ToastrService
	) {
	}

	ngOnInit(): void {
		this.loadPermissions();
		this.setupTranslation();
		this.configNgSelect();
		this.translateNeoCrumb();

		this.authService.onExpire.subscribe(() => {
			this.toastr.info('اعتبار توکن شما به اتمام رسید.');
			this.authService.logOut();
			this.router.navigate(['/auth/login']);
		});
	}

	setupTranslation() {
		this.translateService.setTranslation('fa', FA);
		this.translateService.setDefaultLang('fa');
	}

	configNgSelect() {
		this.ngSelectConfig.notFoundText = this.translateService.instant('not_found');
		this.ngSelectConfig.typeToSearchText = this.translateService.instant('search');
	}

	loadPermissions() {
		if (this.authService.token) {
			this.permissionService.loadPermissions(this.authService.roles);
		}
	}

	translateNeoCrumb() {
	}
}
