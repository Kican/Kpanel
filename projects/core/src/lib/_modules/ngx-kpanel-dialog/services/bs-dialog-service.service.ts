import {Injectable, TemplateRef} from '@angular/core';
import {take} from 'rxjs/operators';
import {ComponentType} from '@angular/cdk/overlay';
import {DialogService} from './dialog.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {DialogConfig} from '../models/dialog-config';
import {DialogRef} from '../models/dialog-ref';
import {ConfirmDialogBase} from '../components/confirm-dialog-base';
import {ConfirmDialogComponent} from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({
	providedIn: 'root'
})
export class BsDialogServiceService extends DialogService {

	constructor(private bsModalService: BsModalService) {
		super();
	}

	confirm(config: DialogConfig): DialogRef<ConfirmDialogBase, boolean> {
		return this.open<ConfirmDialogComponent, boolean>(ConfirmDialogComponent, config);
	}

	open<TComponent, TResult>(component: ComponentType<TComponent> | TemplateRef<TComponent>, config: DialogConfig): DialogRef<TComponent, TResult> {
		const size = config.size === 'small' ? 'modal-sm' : config.size === 'mid' ? 'modal-md' : 'modal-lg';

		const bsDialogRef = this.bsModalService.show(component, {initialState: config.data, class: size});
		const ref = new DialogRef<TComponent, TResult>();

		this.bsModalService.onHidden.pipe(
			take(1)
		).subscribe(value => {
			console.log(bsDialogRef.content.result);
			ref.close(bsDialogRef.content.result);
		});

		return ref;
	}
}
