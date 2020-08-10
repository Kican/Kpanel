import {
	AfterViewInit,
	Component,
	ComponentFactoryResolver,
	Injector, Input,
	OnInit,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import {IComponent} from "../../classes/icomponent";
import {FormBuilderService} from "../../services/form-builder.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
	selector: 'k-form-builder',
	templateUrl: './form-builder.component.html',
	styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit, AfterViewInit {

	@ViewChild('content', {read: ViewContainerRef})
	dynamicInsert: ViewContainerRef;

	@Input()
	component: IComponent;

	@Input()
	form: FormGroup;

	constructor(
		private formBuilder: FormBuilderService,
		private componentFactoryResolver: ComponentFactoryResolver,
		private injector: Injector
	) {
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		this.formBuilder.render(this.component, this.form, this.dynamicInsert, this.componentFactoryResolver, this.injector);
	}
}
