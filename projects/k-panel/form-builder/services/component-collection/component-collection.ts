import {IComponentHandler} from "../../classes/icomponent-handler";
import {IComponent} from "../../classes/icomponent";

export class ComponentCollection {
	private componentHandlers: IComponentHandler[];

	insert(handler: IComponentHandler) {
		this.componentHandlers.push(handler);
	}

	resolve(component: IComponent) {
		const handler = this.componentHandlers.find(x => x.isOwner(component));

		if (!handler)
			throw 'handler not found for component';

		return handler.generate(component);
	}
}
