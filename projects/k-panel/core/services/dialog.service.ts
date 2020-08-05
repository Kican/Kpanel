import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class DialogService {

	constructor() {
	}

	accept(): Observable<any> {
		return null;
	}
}
