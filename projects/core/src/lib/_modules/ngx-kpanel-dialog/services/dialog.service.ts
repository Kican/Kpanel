import {Injectable} from '@angular/core';
import {DialogConfig} from '../models/dialog-config';
import {DialogRef} from '../models/dialog-ref';
import {ConfirmDialogBase} from '../components/confirm-dialog-base';

@Injectable({
	providedIn: 'root'
})
export abstract class DialogService {
	abstract confirm(config: DialogConfig): DialogRef<ConfirmDialogBase, boolean>;

	abstract open<TComponent, TResult>(component: any, config: DialogConfig): DialogRef<TComponent, TResult>;
}
