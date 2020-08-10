import {Observable, Subject} from 'rxjs';

export class DialogRef<TComponent, TResult = any> {
	private readonly _onResult = new Subject<TResult>();
	private readonly _onClose = new Subject<TResult>();

	componentInstance: TComponent;
	private _result: TResult;

	onResult(): Observable<TResult> {
		return this._onResult.asObservable();
	}

	onClose(): Observable<TResult> {
		return this._onClose.asObservable();
	}

	close(dialogResult: TResult): void {
		this._result = dialogResult;
		this._onResult.next(this._result);
		this._onClose.next(this._result);
	}
}
