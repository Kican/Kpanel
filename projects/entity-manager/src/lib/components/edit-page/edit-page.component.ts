import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {IComponent, ILayoutComponent} from '@ngx-k/form-builder';
import {ToastService} from '@ngx-k/components/toast';
import {EntityManagerService} from '../../services/entity-manager.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EntityManagerInfoDto} from '../../models';

@Component({
	selector: 'app-edit-page',
	templateUrl: './edit-page.component.html',
	styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
	fields: IComponent;

	formGroup: FormGroup;
	entityName: string = null;
	info: EntityManagerInfoDto;

	constructor(
		private http: HttpClient,
		private formBuilder: FormBuilder,
		private router: ActivatedRoute,
		private toastService: ToastService,
		private entityManagerService: EntityManagerService
	) {
		this.formGroup = this.formBuilder.group({});
	}

	ngOnInit(): void {
		this.router.params.subscribe(routeData => {
			this.entityName = routeData.type;
			this.info = this.entityManagerService.getByName(this.entityName);

			this.http.get<ILayoutComponent>(this.info.url + `/$fields/edit`).subscribe(value => {
				this.fields = value;
				this.init(routeData.id);
			});
		});
	}

	init(id: string): void {
		if (id !== undefined) {
			this.http.get(this.info.url + `/${id}`).subscribe(value => {
				this.formGroup.patchValue(value);
			});
		}
	}

	onSubmit(data): void {
		if (data['id']) {
			this.http.put(this.info.url + `/${data['id']}`, data).subscribe(value => {
				this.toastService.success();
			});
		} else {
			delete data['id'];
			this.http.post(this.info.url, data).subscribe(value => {
				this.toastService.success();
			});
		}
	}
}
