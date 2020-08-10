import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBarContainerComponent} from './components/side-bar-container/side-bar-container.component';
import {SideBarHeaderComponent} from './components/_partials/side-bar-header/side-bar-header.component';
import {SideBarItemsContainerComponent} from './components/_partials/side-bar-items-container/side-bar-items-container.component';
import {SideBarItemComponent} from './components/_partials/side-bar-item/side-bar-item.component';
import {RouterModule} from '@angular/router';
import {SideBarDropdownItemComponent} from './components/_partials/side-bar-dropdown-item/side-bar-dropdown-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BackDropComponent } from './components/_partials/back-drop/back-drop.component';
import { SideBarItemDirective } from './directives/side-bar-item/side-bar-item.directive';


@NgModule({
	declarations: [
		SideBarContainerComponent,
		SideBarHeaderComponent,
		SideBarItemsContainerComponent,
		SideBarItemComponent,
		SideBarDropdownItemComponent,
		BackDropComponent,
		SideBarItemDirective
	],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		RouterModule
	],
	exports: [
		SideBarContainerComponent,
		SideBarHeaderComponent,
		SideBarItemsContainerComponent,
		SideBarItemComponent,
		SideBarDropdownItemComponent
	]
})
export class SideBarModule {
}
