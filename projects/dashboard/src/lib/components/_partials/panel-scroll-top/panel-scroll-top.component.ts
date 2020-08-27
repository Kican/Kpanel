import {Component} from '@angular/core';

@Component({
	selector: 'app-panel-scroll-top',
	templateUrl: './panel-scroll-top.component.html',
	styleUrls: ['./panel-scroll-top.component.scss']
})
export class PanelScrollTopComponent {

	constructor(
		// public scrollService: WindowScrollService,
		// private viewportScroller: ViewportScroller
	) {
	}

	// get scrolledDown() {
	// 	return this.scrollService.scrolledDown();
	// }

	// goToTop(): void {
	// 	this.viewportScroller.scrollToPosition([0, 0]);
	// }
}
