import {IComponentDescriptor} from "../../classes/i-component-descriptor";
import {IComponent} from "../../classes/icomponent";

export class ComponentCollection {
	private componentHandlers: IComponentDescriptor[];

	insert(handler: IComponentDescriptor) {
		this.componentHandlers.push(handler);
	}

	resolve(component: IComponent) {
		const handler = this.componentHandlers.find(x => x.isOwner(component));

		if (!handler)
			throw 'handler not found for component';

		return handler.generate(component);
	}
}
