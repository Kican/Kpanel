import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {COMPONENTS_DESCRIPTOR, FormBuilderService, IComponent, ILayoutComponent} from '@ngx-k/form-builder';
import {ToastService} from '@ngx-k/components/toast';
import {EntityManagerService} from '../../services/entity-manager.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EntityManagerInfoDto} from '../../models';
import {EditComponentsDescriptor} from '../../components-descriptor-collection/edit-components-descriptor';

@Component({
	selector: 'app-edit-page',
	templateUrl: './edit-page.component.html',
	styleUrls: ['./edit-page.component.scss'],
	providers: [
		{provide: COMPONENTS_DESCRIPTOR, useClass: EditComponentsDescriptor},
		FormBuilderService
	]
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
		this.info = null;
		this.router.params.subscribe(routeData => {
			this.entityName = routeData.type;

			this.entityManagerService.getByName(this.entityName).subscribe(value => {
				this.info = value;
				this.http.get<ILayoutComponent>(this.info.url + `/$fields/edit`).subscribe(value => {
					this.fields = value;
					this.init(routeData.id);
				});
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
				this.toastService.success({message: 'موجودیت مورد نظر با موفقیت ثبت شد', title: null, position: 'left-down', action: null});
			});
		} else {
			delete data['id'];
			this.http.post(this.info.url, data).subscribe(value => {
				this.toastService.success({message: 'موجودیت مورد نظر با موفقیت ویرایش شد', title: null, position: 'left-down', action: null});
			});
		}
	}
}
