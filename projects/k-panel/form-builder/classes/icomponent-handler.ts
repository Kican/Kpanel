import {IComponent} from "./icomponent";

export interface IComponentHandler {
	isOwner(component: IComponent): boolean;

	generate(component: IComponent);
}
