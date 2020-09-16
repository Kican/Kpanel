import {ComponentsDescriptor} from '@ngx-k/form-builder';
import {IdFieldDescriptor} from '../models/id-field-descriptor';

export class EditComponentsDescriptor extends ComponentsDescriptor {
	constructor() {
		super();
		this.descriptors = [new IdFieldDescriptor(), ...this.descriptors];
	}
}
