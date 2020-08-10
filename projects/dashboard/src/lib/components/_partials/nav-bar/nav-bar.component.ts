import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AccountService, UserDto, AuthenticationService} from '@ngx-k-panel/auth';
import {DialogService} from '@ngx-k-panel/core';
import {SidebarContainerComponent} from 'ngx-k-components/sidebar';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
	user: UserDto;
	sub: Subscription;

	@Input()
	sidebar: SidebarContainerComponent;

	constructor(
		public authService: AuthenticationService,
		public router: Router,
		private autoDialog: DialogService,
		private accountService: AccountService,
	) {
	}

	ngOnInit(): void {
		this.sub = this.accountService.user$.subscribe(value => {
			this.user = value;
		});
	}

	openProfile() {
		this.router.navigate(['/profile']);
	}

	logOut() {
		this.autoDialog.confirm({size: 'small'}).onResult().subscribe(value => {
			if (value == true) {
				this.authService.logOut();
				this.router.navigate(['/auth/login']);
			}
		});
	}

	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}
}
