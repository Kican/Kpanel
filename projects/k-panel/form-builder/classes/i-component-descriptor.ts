import {IComponent} from "./icomponent";
import {IElementComponent} from "./ielement-component";

export interface IComponentDescriptor<TComponent extends IElementComponent> {
	isOwner(component: IComponent): boolean;

	generate(component: IComponent): TComponent;
}
