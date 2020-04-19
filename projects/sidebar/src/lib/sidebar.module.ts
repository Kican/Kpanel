import {NgModule} from '@angular/core';
import {SidebarDirective} from './directives/sidebar/sidebar.directive';
import {SidebarContentDirective} from './directives/sidebar-content/sidebar-content.directive';
import {SidebarContainerComponent} from './components/sidebar-container/sidebar-container.component';


@NgModule({
	declarations: [
		SidebarContainerComponent,
		SidebarDirective,
		SidebarContentDirective
	],
	imports: [],
	exports: [
		SidebarContainerComponent,
		SidebarDirective,
		SidebarContentDirective
	]
})
export class SidebarModule {
}
