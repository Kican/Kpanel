import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {IComponent, ILayoutComponent} from '@ngx-k-panel/form-builder';
import {FormBuilderComponent} from '../form-builder/form-builder.component';
import {ToastService} from '@ngx-k-panel/core';

@Component({
	selector: 'app-edit-page',
	templateUrl: './edit-page.component.html',
	styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
	fields: IComponent[];

	@ViewChild('form_builder')
	formBuilderComponent: FormBuilderComponent;

	entityName: string = null;

	constructor(
		private http: HttpClient,
		private router: ActivatedRoute,
		private toastService: ToastService
	) {
	}

	ngOnInit(): void {
		this.router.params.subscribe(routeData => {
			this.entityName = routeData.type;
			this.http.get<ILayoutComponent>(`api/${this.entityName}/$fields/edit`).subscribe(value => {
				this.fields = value.children;
				this.init(routeData.id);
			});
		});
	}

	init(id: string) {
		if (id !== undefined) {
			this.http.get(`api/${this.entityName}/${id}`).subscribe(value => {
				this.formBuilderComponent.patchValue(value);
			});
		}

	}

	onSubmit(data) {
		if (data['id']) {
			this.http.put(`api/${this.entityName}/${data['id']}`, data).subscribe(value => {
				this.toastService.success();
			});
		} else {
			delete data['id'];
			this.http.post(`api/${this.entityName}`, data).subscribe(value => {
				this.toastService.success();
			});
		}
	}
}
