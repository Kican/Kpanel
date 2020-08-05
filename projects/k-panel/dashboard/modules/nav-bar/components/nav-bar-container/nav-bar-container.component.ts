import {Component} from '@angular/core';
import {ScrollService} from "@ngx-k-panel/core";

@Component({
	selector: 'app-nav-bar-container',
	templateUrl: './nav-bar-container.component.html',
	styleUrls: ['./nav-bar-container.component.scss']
})
export class NavBarContainerComponent {

	constructor(public scrollService: ScrollService) {
	}

	get scrolledDown() {
		return this.scrollService.scrolledDown();
	}
}
