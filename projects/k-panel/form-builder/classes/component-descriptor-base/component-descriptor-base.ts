import {IComponent} from "../icomponent";
import {IComponentDescriptor} from "../i-component-descriptor";
import {IElementComponent} from "../ielement-component";

export abstract class ComponentDescriptorBase<TComponent extends IElementComponent> implements IComponentDescriptor<TComponent> {
	abstract isOwner(component: IComponent): boolean;

	abstract generate(component: IComponent): TComponent;
}
