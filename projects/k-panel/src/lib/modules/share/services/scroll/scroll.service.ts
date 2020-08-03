import {Inject, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ScrollPosition} from "../../models/scroll-position.model";

@Injectable({
	providedIn: 'root'
})
export class ScrollService {

	scrolledDownOffset = 20;
	private _currentPosition = new ScrollPosition();
	scrollChange$ = new Subject<ScrollPosition>();

	constructor() {
		window.onscroll = () => {
			this.setCurrentScrollPosition();
			this.scrollChange$.next(this.currentPosition);
		};
	}

	get currentPosition(): ScrollPosition {
		return this._currentPosition;
	}

	setCurrentScrollPosition() {
		this._currentPosition.x = window.scrollX;
		this._currentPosition.y = window.scrollY;
	}

	scrolledDown() {
		return this.currentPosition.y > this.scrolledDownOffset;
	}
}
