import {SidebarStatus} from './sidebar-status.enum';
import {InjectionToken} from '@angular/core';

export interface SidebarConfig {
	fixedPosition: boolean;
	initialState: SidebarStatus;
}

export const SIDEBAR_CONFIG = new InjectionToken<SidebarConfig>('sidebar configuration');
