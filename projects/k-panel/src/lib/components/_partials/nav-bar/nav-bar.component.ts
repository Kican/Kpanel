import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {User} from "../../../modules/user/models/user";
import {AuthenticationService} from "../../../../auth/services/authentication.service";
import {AccountService} from "../../../../auth/services/account.service";
import {AutoDialogService} from "../../../modules/share/services/auto-dialog.service";

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
	user: User;
	sub: Subscription;

	constructor(
		public authService: AuthenticationService,
		public router: Router,
		private autoDialog: AutoDialogService,
		private accountService: AccountService,
	) {
	}

	ngOnInit(): void {
		this.sub = this.accountService.user$.subscribe(value => {
			// this.user = value;
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
