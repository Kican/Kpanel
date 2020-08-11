import {Component} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import { ScrollService } from '@ngx-k/core';

@Component({
	selector: 'app-panel-scroll-top',
	templateUrl: './panel-scroll-top.component.html',
	styleUrls: ['./panel-scroll-top.component.scss']
})
export class PanelScrollTopComponent {

	constructor(public scrollService: ScrollService, private viewportScroller: ViewportScroller) {
	}

	get scrolledDown() {
		return this.scrollService.scrolledDown();
	}

	goToTop() {
		this.viewportScroller.scrollToPosition([0, 0]);
	}
}
