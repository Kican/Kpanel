import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {KAccountService, KAuthenticationService, UserDto} from '@ngx-k/auth';
import {SidebarContainerComponent} from '@ngx-k/components/sidebar';
import {DialogService} from '@ngx-k/components/dialog';

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
		public authService: KAuthenticationService,
		public router: Router,
		private autoDialog: DialogService,
		private accountService: KAccountService,
	) {
	}

	ngOnInit(): void {
		this.sub = this.accountService.user$.subscribe(value => {
			this.user = value;
		});
	}

	openProfile(): void {
		this.router.navigate(['/profile']);
	}

	logOut(): void {
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
