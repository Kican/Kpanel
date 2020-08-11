import {Component, OnInit} from '@angular/core';
import {KAccountService} from '@ngx-k/auth';

@Component({
	selector: 'app-dashboard-layout',
	templateUrl: './dashboard-layout.component.html'
})
export class DashboardLayoutComponent implements OnInit {

	constructor(private accountService: KAccountService) {
	}

	ngOnInit(): void {
		if (this.accountService.user$.getValue() == null) {
			this.accountService.info().subscribe(value => {
				this.accountService.user$.next(value);
			});
		}
	}

}
