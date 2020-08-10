import {ComponentFactoryResolver, Injectable, Injector, ViewContainerRef} from '@angular/core';
import {IComponent} from "../classes/icomponent";
import {ComponentCollection} from "../classes/component-collection/component-collection";
import {ComponentDescriptorCollection} from "../classes/component-descriptor-collection/component-descriptor-collection";
import {IElementComponent} from "../classes/i-element-component";
import {FormGroup} from "@angular/forms";

@Injectable({
	providedIn: 'root'
})
export class FormBuilderService {

	constructor(
		private componentCollection: ComponentCollection,
		private componentDescriptorCollection: ComponentDescriptorCollection,
	) {
	}

	public render(
		component: IComponent,
		formGroup: FormGroup,
		viewContainerRef: ViewContainerRef,
		componentFactoryResolver: ComponentFactoryResolver,
		injector: Injector
	) {
		const componentName = this.componentDescriptorCollection.resolve(component);
		const componentClass = this.componentCollection.find(componentName);

		const componentFactory = componentFactoryResolver.resolveComponentFactory<IElementComponent>(componentClass);
		const componentRef = componentFactory.create(injector);

		componentRef.instance.parentFormGroup = formGroup;
		componentRef.instance.componentData = component;

		viewContainerRef.insert(componentRef.hostView);
	}
}
