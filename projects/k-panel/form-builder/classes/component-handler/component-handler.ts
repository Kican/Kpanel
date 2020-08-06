import {IComponentHandler} from "../icomponent-handler";
import {IComponent} from "../icomponent";

export abstract class ComponentHandler implements IComponentHandler {
	abstract isOwner(component: IComponent): boolean ;

	abstract generate(component: IComponent);
}
