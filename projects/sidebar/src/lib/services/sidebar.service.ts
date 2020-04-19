import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SidebarStatus} from '../models/sidebar-status.enum';
import {distinctUntilChanged} from 'rxjs/operators';
import {SIDEBAR_CONFIG, SidebarConfig} from '../models/sidebar.config';
import {SidebarMode} from '../models/sidebar-mode.enum';

@Injectable({
	providedIn: 'root'
})
export class SidebarService {
	statusChange = new BehaviorSubject<SidebarStatus>(this.config.initialState);
	statusChange$ = this.statusChange.asObservable().pipe(distinctUntilChanged());

	modeChange = new BehaviorSubject<SidebarMode>(SidebarMode.Over);
	modeChange$ = this.statusChange.asObservable().pipe(distinctUntilChanged());

	hasBackdropChange = new BehaviorSubject<boolean>(false);
	hasBackdropChange$ = this.statusChange.asObservable().pipe(distinctUntilChanged());

	constructor(@Inject(SIDEBAR_CONFIG) private config: SidebarConfig) {
	}

	open(): void {
		this.statusChange.next(SidebarStatus.Opened);
	}

	close(): void {
		this.statusChange.next(SidebarStatus.Closed);
	}

	toggle(): void {
		this.statusChange.next(this.statusChange.getValue() === SidebarStatus.Opened ? SidebarStatus.Closed : SidebarStatus.Opened);
	}

	changeMode(mode: SidebarMode): void {
		this.modeChange.next(mode);
	}

	changeBackdrop(hasBackdrop: boolean) {
		this.hasBackdropChange.next(hasBackdrop);
	}
}
