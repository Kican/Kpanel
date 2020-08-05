import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AccountService, UserDto, AuthenticationService} from "@ngx-k-panel/auth";
import {DialogService} from "@ngx-k-panel/core";

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
	user: UserDto;
	sub: Subscription;

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
		this.autoDialog.accept().subscribe(value => {
			this.authService.logOut();
			this.router.navigate(['/auth/login']);
		});
	}

	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}
}
