import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarContainerComponent} from './components/nav-bar-container/nav-bar-container.component';
import {SideBarControllerComponent} from './components/_partials/side-bar-controller/side-bar-controller.component';
import {OptionBarContainerComponent} from './components/_partials/option-bar-container/option-bar-container.component';
import {OptionBarProfileComponent} from './components/_partials/option-bar-profile/option-bar-profile.component';
import {OptionBarActionsContainerComponent} from './components/_partials/option-bar-actions-container/option-bar-actions-container.component';
import {NavBarActionsItemComponent} from './components/_partials/nav-bar-actions-item/nav-bar-actions-item.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

export const toolTilModule = TooltipModule.forRoot();

// @dynamic
@NgModule({
	declarations: [
		NavBarContainerComponent,
		SideBarControllerComponent,
		OptionBarContainerComponent,
		OptionBarProfileComponent,
		OptionBarActionsContainerComponent,
		NavBarActionsItemComponent,
	],
	imports: [
		CommonModule,
		toolTilModule
	],
	exports: [
		NavBarContainerComponent,
		SideBarControllerComponent,
		OptionBarContainerComponent,
		OptionBarProfileComponent,
		OptionBarActionsContainerComponent,
		NavBarActionsItemComponent
	]
})
export class NavBarModule {
}
