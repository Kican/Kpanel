import {Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IComponent} from '@ngx-k/form-builder';

@Component({
	selector: 'app-form-builder',
	templateUrl: './form-builder.component.html',
	styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit, OnChanges {
	@Input()
	components: IComponent[] = [];

	form: FormGroup;
	@Output()
	onFormSubmit = new EventEmitter();

	constructor(
		private formBuilder: FormBuilder
	) {
	}

	ngOnInit(): void {
	}

	patchValue(data: {}) {
		this.form.patchValue(data);
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.components.firstChange === false) {
			const controls = {};
			this.components.forEach(value => {
				controls[this.toLowerCamelCase(value.name)] = ['', this.getValidators(value['validators'])];
			});
			this.form = this.formBuilder.group(controls);
		}
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}

	getValidators(items: any[]): any[] {
		const validators = [];
		if (!items) {
			return validators;
		}

		items.forEach(value => {
			switch (value.name) {
				case 'maxlength':
					validators.push(Validators.maxLength(value.length));
					break;
				case 'required':
					validators.push(Validators.required);
					break;
			}
		});

		return validators;
	}

	formSubmit() {
		this.onFormSubmit.emit(this.form.value);
	}
}
