import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WindowSizeService {
	smallScreenWidth = 1100;
	private _windowSize = window.innerWidth;
	windowSizeChange$ = new BehaviorSubject<number>(window.innerWidth);

	constructor() {
		window.onresize = () => {
			this._windowSize = window.innerWidth;
			this.windowSizeChange$.next(this._windowSize);
		};
	}

	get windowSize(): number {
		return this._windowSize;
	}

	isSmallScreen() {
		return this.windowSize < this.smallScreenWidth;
	}
}
