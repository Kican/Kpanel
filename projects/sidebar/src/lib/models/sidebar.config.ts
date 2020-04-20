import {SidebarStatus} from './sidebar-status.enum';
import {InjectionToken} from '@angular/core';
import {SidebarMode} from './sidebar-mode.enum';

export interface SidebarConfig {
	closeOnBackdropClick?: boolean;
	initialState?: SidebarStatus;
	mode?: SidebarMode;
	hasBackdrop?: boolean;
	isFixed?: boolean;
}

export class SidebarConfiguration implements SidebarConfig {
	closeOnBackdropClick = true;
	initialState = SidebarStatus.Closed;
	mode = SidebarMode.Over;
	hasBackdrop = true;
	isFixed = true;

	constructor(defaultValues?: SidebarConfig) {
		this.overWrite(defaultValues);
	}

	overWrite(object: any): void {
		Object.assign(this, object);
	}
}

export const SIDEBAR_CONFIG = new InjectionToken<SidebarConfiguration>('sidebar configuration');
