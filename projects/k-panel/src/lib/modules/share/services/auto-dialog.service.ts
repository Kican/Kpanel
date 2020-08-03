import {Injectable} from '@angular/core';
import {filter, take} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {BsModalService} from "ngx-bootstrap/modal";
import {DialogResult} from "../enums/dialog-result.enum";
import {AcceptDialogComponent} from "../../../components/_dialogs/accept-dialog/accept-dialog.component";
import {IService} from "../../../common/interfaces/IService";

@Injectable({
	providedIn: 'root'
})
export class AutoDialogService {
	private delete$ = new Subject();
	onDelete = this.delete$.asObservable().pipe(take(1));

	constructor(private modalService: BsModalService) {
	}

	accept() {
		this.modalService.show(AcceptDialogComponent, {class: 'modal-sm'});
		return this.modalService.onHide
			.pipe(
				take(1),
				filter(value => value == DialogResult.Confirm));
	}

	delete(service: IService<any>, id: number) {
		this.modalService.show(AcceptDialogComponent, {
			class: 'modal-sm',
			initialState: {text: 'آیا برای حذف مطمئن هستید؟', acceptBtnText: 'حذف', declineBtnText: 'انصراف'}
		});
		this.modalService.onHide
			.pipe(
				take(1),
				filter(value => value == DialogResult.Confirm))
			.subscribe((reason) => {
				service.delete(id).subscribe(value => {
					this.delete$.next();
				});
			});
		return this.onDelete;
	}
}
