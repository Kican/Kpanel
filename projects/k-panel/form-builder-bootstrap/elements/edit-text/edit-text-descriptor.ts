import {IComponent} from "../../../form-builder/classes/icomponent";
import {IComponentDescriptor} from "../../../form-builder/classes/i-component-descriptor";

export class EditTextDescriptor implements IComponentDescriptor {
	isOwner(component: IComponent): string | null {
		return component.type == 'TextFieldComponent' ? 'TextFieldComponent' : null;
	}
}
