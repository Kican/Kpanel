import {Component, OnInit} from '@angular/core';
import {AccountService} from "@ngx-k-panel/auth";

@Component({
	selector: 'app-dashboard-layout',
	templateUrl: './dashboard-layout.component.html'
})
export class DashboardLayoutComponent implements OnInit {

	constructor(private accountService: AccountService) {
	}

	ngOnInit(): void {
		if (this.accountService.user$.getValue() == null) {
			this.accountService.info().subscribe(value => {
				this.accountService.user$.next(value);
			});
		}
	}

}
