import {
	AfterViewInit,
	Component,
	ComponentFactoryResolver, Injector,
	Input,
	OnInit,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import {FormBuilderService, IElementComponent, ILayoutComponent} from "@ngx-k-panel/form-builder";
import {FormGroup} from "@angular/forms";

@Component({
	selector: 'k-linear-layout',
	templateUrl: './linear-layout.component.html',
	styleUrls: ['./linear-layout.component.scss']
})
export class LinearLayoutComponent implements OnInit, IElementComponent, AfterViewInit {
	@Input()
	componentData: ILayoutComponent;

	@ViewChild('content', {read: ViewContainerRef})
	dynamicInsert: ViewContainerRef;

	@Input()
	parentFormGroup: FormGroup;

	constructor(
		private formBuilder: FormBuilderService,
		private componentFactoryResolver: ComponentFactoryResolver,
		private injector: Injector
	) {
	}

	ngOnInit(): void {
		for (let child of this.componentData.children) {
			this.formBuilder.render(child, this.parentFormGroup, this.dynamicInsert, this.componentFactoryResolver, this.injector);
		}
	}

	ngAfterViewInit(): void {

	}
}
