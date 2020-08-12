import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NeoCrumbService} from 'ngx-neocrumb';
import {NgxPermissionsService} from 'ngx-permissions';
import {NgSelectConfig} from '@ng-select/ng-select';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FA} from './langs/fa/_fa';
import {KAuthenticationService} from '@ngx-k/auth';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'docs';

	constructor(
		private translateService: TranslateService,
		private neoCrumbService: NeoCrumbService,
		private permissionService: NgxPermissionsService,
		private ngSelectConfig: NgSelectConfig,
		private authService: KAuthenticationService,
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
		this.neoCrumbService.onChange.subscribe(value => {
			value.map(bc => {
				bc.text = this.translateService.instant(bc.text);
			});
		});
	}
}
