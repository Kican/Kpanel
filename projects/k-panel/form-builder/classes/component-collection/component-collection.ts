import {IElementComponent} from "../ielement-component";

export abstract class ComponentCollection {
	private components: [string, IElementComponent];

	set(name: string, component: IElementComponent) {
		this.components[name] = component;
	}
}
