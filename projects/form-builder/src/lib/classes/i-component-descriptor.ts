import {IComponent} from "./icomponent";

export interface IComponentDescriptor {
	isOwner(component: IComponent): string | null;
}
