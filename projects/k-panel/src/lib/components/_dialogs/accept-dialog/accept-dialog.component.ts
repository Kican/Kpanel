import {Component} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {DialogResult} from "../../../modules/share/enums/dialog-result.enum";

@Component({
	selector: 'app-accept-dialog',
	templateUrl: './accept-dialog.component.html',
	styleUrls: ['./accept-dialog.component.scss']
})
export class AcceptDialogComponent {
	questionText = 'آیا مطمئن هستید؟';
	acceptBtnText = 'بله';
	acceptBtnClass = 'btn-danger';
	declineBtnText = 'خیر';
	declineBtnClass = 'btn-default';

	constructor(private modalRef: BsModalRef, private modalService: BsModalService) {
	}

	confirm() {
		this.modalService.setDismissReason(DialogResult.Confirm.toString());
		this.modalRef.hide();
	}

	decline() {
		this.modalService.setDismissReason(DialogResult.Decline.toString());
		this.modalRef.hide();
	}
}
