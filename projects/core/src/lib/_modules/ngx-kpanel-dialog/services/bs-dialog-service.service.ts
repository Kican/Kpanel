import {Injectable, TemplateRef} from '@angular/core';
import {take} from 'rxjs/operators';
import {ComponentType} from '@angular/cdk/overlay';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ConfirmDialogComponent} from '../components/confirm-dialog/confirm-dialog.component';
import {ConfirmDialogBase, DialogConfig, DialogRef, DialogService} from '@ngx-k/components/dialog';

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
