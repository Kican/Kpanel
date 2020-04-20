import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SidebarStatus} from '../models/sidebar-status.enum';
import {distinctUntilChanged} from 'rxjs/operators';
import {SIDEBAR_CONFIG, SidebarConfiguration} from '../models/sidebar.config';
import {SidebarMode} from '../models/sidebar-mode.enum';

@Injectable({
	providedIn: 'root'
})
export class SidebarService {
	private statusChange = new BehaviorSubject<SidebarStatus>(this.config.initialState);
	statusChange$ = this.statusChange.asObservable().pipe(distinctUntilChanged());

	private modeChange = new BehaviorSubject<SidebarMode>(this.config.mode);
	modeChange$ = this.modeChange.asObservable().pipe(distinctUntilChanged());

	private hasBackdropChange = new BehaviorSubject<boolean>(this.config.hasBackdrop);
	hasBackdropChange$ = this.hasBackdropChange.asObservable().pipe(distinctUntilChanged());

	private isFixedChange = new BehaviorSubject<boolean>(this.config.isFixed);
	isFixedChange$ = this.isFixedChange.asObservable().pipe(distinctUntilChanged());

	private closeOnBackdropClickChange = new BehaviorSubject<boolean>(this.config.closeOnBackdropClick);
	closeOnBackdropClickChange$ = this.closeOnBackdropClickChange.asObservable().pipe(distinctUntilChanged());

	get status(): SidebarStatus {
		return this.statusChange.getValue();
	}

	get mode(): SidebarMode {
		return this.modeChange.getValue();
	}

	get hasBackdrop(): boolean {
		return this.hasBackdropChange.getValue();
	}

	get isFixed(): boolean {
		return this.isFixedChange.getValue();
	}

	get position(): string {
		return this.isFixed ? 'fixed' : 'absolute';
	}

	get closeOnBackdropClick(): boolean {
		return this.closeOnBackdropClickChange.getValue();
	}

	constructor(@Inject(SIDEBAR_CONFIG) private config: SidebarConfiguration) {
	}

	open(): void {
		this.statusChange.next(SidebarStatus.Opened);
	}

	close(): void {
		this.statusChange.next(SidebarStatus.Closed);
	}

	toggle(): void {
		this.statusChange.next(this.status === SidebarStatus.Opened ? SidebarStatus.Closed : SidebarStatus.Opened);
	}

	changeMode(mode: SidebarMode): void {
		this.modeChange.next(mode);
	}

	changeBackdrop(hasBackdrop: boolean): void {
		this.hasBackdropChange.next(hasBackdrop);
	}

	changeIsFixed(isFixed: boolean): void {
		this.isFixedChange.next(isFixed);
	}

	changeCloseOnBackdropClick(closeOnBackdropClick: boolean): void {
		this.closeOnBackdropClickChange.next(closeOnBackdropClick);
	}
}
