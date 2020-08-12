import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {BsDialogServiceService} from './services/bs-dialog-service.service';
import {ModalModule} from 'ngx-bootstrap/modal';
import {DialogService, NgxKDialogModule} from '@ngx-k/components/dialog';

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
		modalModule,
		NgxKDialogModule
	],
	exports: [
		ModalModule
	]
})
export class KPanelDialogModule {
}
