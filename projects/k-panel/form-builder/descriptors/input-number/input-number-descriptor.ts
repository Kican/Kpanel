import {IComponentDescriptor} from "../../classes/i-component-descriptor";
import {IComponent} from "../../classes/icomponent";

export class InputNumberDescriptor  implements IComponentDescriptor {
	isOwner(component: IComponent): string | null {
		return component.type == 'NumberFieldComponent' ? 'input-number' : null;
	}
}
