import {IComponentDescriptor} from "../i-component-descriptor";
import {IComponent} from "../icomponent";

export class ComponentDescriptorCollection {
	private descriptors: IComponentDescriptor[];

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
