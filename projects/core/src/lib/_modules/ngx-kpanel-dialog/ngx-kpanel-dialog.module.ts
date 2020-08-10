import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {DialogService} from './services/dialog.service';
import {BsDialogServiceService} from './services/bs-dialog-service.service';
import {ModalModule} from 'ngx-bootstrap/modal';

export const modalModule = ModalModule.forRoot();

@NgModule({
	declarations: [
		ConfirmDialogComponent
	],
	providers: [
		{provide: DialogService, useClass: BsDialogServiceService}
	],
	imports: [
		CommonModule,
		modalModule
	]
})
export class NgxKPanelDialogModule {
}
