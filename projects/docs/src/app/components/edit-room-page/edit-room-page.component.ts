import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ILayoutComponent} from '@ngx-k-panel/form-builder';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'app-edit-room-page',
	templateUrl: './edit-room-page.component.html',
	styleUrls: ['./edit-room-page.component.scss']
})
export class EditRoomPageComponent implements OnInit {
	form: FormGroup;
	entityName: string = 'room';

	constructor(
		private http: HttpClient,
		private router: ActivatedRoute,
		private _fb: FormBuilder
	) {
		this.form = _fb.group({
			id: [null],
			title: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
			description: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
			endTransactionTime: [null, [Validators.required, Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')]],
			startTransactionTime: [null, [Validators.required, Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')]],
			transactionLifeSpanInMinutes: [null, [Validators.required]],
			unitSeedValue: [null, [Validators.required]],
			unitType: [null, [Validators.required]],
			roomGroupId: [null, [Validators.required]],
			enable: [true],
		});
	}

	ngOnInit(): void {
		this.router.params.subscribe(routeData => {
			if (routeData.id !== undefined) {
				this.http.get(`api/${this.entityName}/${routeData.id}`).subscribe(value => {
					this.form.patchValue(value);
				});
			}
		});
	}

	onSubmit(data): void {
		if (data['id']) {
			this.http.put(`api/${this.entityName}/${data['id']}`, data).subscribe(value => {
				// this.toastService.success();
			});
		} else {
			delete data['id'];
			this.http.post(`api/${this.entityName}`, data).subscribe(value => {
				// this.toastService.success();
			});
		}
	}

}
