import {IComponent} from "./icomponent";
import {FormGroup} from "@angular/forms";

export interface IElementComponent {
	componentData: IComponent;
	parentFormGroup: FormGroup;
}
