import {EditTextComponent} from "./edit-text/edit-text.component";
import {ComponentDescriptorBase} from "../../../form-builder/classes/component-descriptor-base/component-descriptor-base";
import {IComponent} from "../../../form-builder/classes/icomponent";

export class EditTextDescriptor extends ComponentDescriptorBase<EditTextComponent> {
	generate(component: IComponent): EditTextComponent {
		return undefined;
	}

	isOwner(component: IComponent): boolean {
		return component.type == 'TextFieldComponent';
	}
}
