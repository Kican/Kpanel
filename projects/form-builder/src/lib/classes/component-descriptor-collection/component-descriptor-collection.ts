import {IComponentDescriptor} from "../i-component-descriptor";
import {IComponent} from "../icomponent";
import {InputNumberDescriptor} from "../../descriptors/input-number/input-number-descriptor";
import {InputTextDescriptor} from "../../descriptors/input-text/input-text-descriptor";
import {LinearLayoutDescriptor} from "../../descriptors/layouts/linear/linear-layout-descriptor";

export class ComponentDescriptorCollection {
	private descriptors: IComponentDescriptor[] = [];

	constructor() {
		this.descriptors.push(new InputNumberDescriptor());
		this.descriptors.push(new InputTextDescriptor());
		this.descriptors.push(new LinearLayoutDescriptor());
	}

	resolve(component: IComponent): string {
		let componentName = null;
		for (let descriptor of this.descriptors) {
			componentName = descriptor.isOwner(component)

			if (componentName != null)
				return componentName;
		}
		if (componentName == null)
			throw 'handler not found for component';
	}
}
