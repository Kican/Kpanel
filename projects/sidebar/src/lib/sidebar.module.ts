import {NgModule} from '@angular/core';
import {SidebarContainerDirective} from './directives/sidebar-container/sidebar-container.directive';
import {SidebarDirective} from './directives/sidebar/sidebar.directive';
import {SidebarContentDirective} from './directives/sidebar-content/sidebar-content.directive';


@NgModule({
	declarations: [
		SidebarContainerDirective,
		SidebarDirective,
		SidebarContentDirective
	],
	imports: [],
	exports: []
})
export class SidebarModule {
}
