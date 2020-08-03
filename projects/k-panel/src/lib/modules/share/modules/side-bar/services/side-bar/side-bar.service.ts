import {Injectable} from '@angular/core';
import {SideBarStatus} from '../../enums/side-bar-status.enum';
import {BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SideBarService {
	private _sidebarStatus = SideBarStatus.closed;
	sidebarStatusChange$ = new BehaviorSubject<SideBarStatus>(SideBarStatus.closed);

	constructor() {
	}

	get sidebarStatus(): SideBarStatus {
		return this._sidebarStatus;
	}

	private change() {
		this.sidebarStatusChange$.next(this.sidebarStatus);
	}

	open() {
		this._sidebarStatus = SideBarStatus.Opened;
		this.change();
	}

	close() {
		this._sidebarStatus = SideBarStatus.closed;
		this.change();
	}

	toggle() {
		if (this.sidebarStatus === SideBarStatus.closed) {
			this._sidebarStatus = SideBarStatus.Opened;
		} else {
			this._sidebarStatus = SideBarStatus.closed;
		}
		this.change();
	}
}
