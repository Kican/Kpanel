import {
	Component,
	OnInit
} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
	selector: 'app-form-builder-test',
	templateUrl: './form-builder-test.component.html',
	styleUrls: ['./form-builder-test.component.scss']
})
export class FormBuilderTestComponent implements OnInit {
	component = {
		"isHorizontal": false,
		"children": [{
			"editable": false,
			"title": "Id",
			"validators": [],
			"type": "NumberFieldComponent",
			"name": "Id"
		}, {
			"editable": false,
			"title": "Title",
			"validators": [{"name": "required", "message": null}],
			"type": "TextFieldComponent",
			"name": "Title"
		}, {
			"editable": false,
			"title": "AirportId",
			"validators": [{"name": "required", "message": null}],
			"type": "NumberFieldComponent",
			"name": "AirportId"
		}],
		"type": "LinearLayoutComponent",
		"name": null
	};

	form: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({});
	}

	ngOnInit(): void {

	}

	onSubmit($event) {
		console.log($event);
	}
}