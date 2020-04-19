import {ModuleWithProviders, NgModule} from '@angular/core';
import {SidebarContentDirective} from './directives/sidebar-content/sidebar-content.directive';
import {SidebarContainerComponent} from './components/sidebar-container/sidebar-container.component';
import {SidebarDirective} from './directives/sidebar/sidebar.directive';
import {SIDEBAR_CONFIG, SidebarConfig} from './models/sidebar.config';
import {BackDropComponent} from './components/back-drop/back-drop.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		SidebarContainerComponent,
		SidebarContentDirective,
		SidebarDirective,
		SidebarDirective,
		BackDropComponent,
	],
	imports: [
		BrowserAnimationsModule,
	],
	exports: [
		SidebarContainerComponent,
		SidebarContentDirective,
		SidebarDirective
	]
})
export class SidebarModule {
	public static forRoot(config: SidebarConfig): ModuleWithProviders<SidebarModule> {
		return {
			ngModule: SidebarModule,
			providers: [{provide: SIDEBAR_CONFIG, useValue: config}]
		};
	}
}
