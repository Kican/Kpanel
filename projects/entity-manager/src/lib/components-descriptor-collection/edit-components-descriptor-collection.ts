import {ComponentDescriptorCollection} from '@ngx-k/form-builder';
import {IdFieldDescriptor} from '../models/id-field-descriptor';

export class EditComponentsDescriptorCollection extends ComponentDescriptorCollection {
	constructor() {
		super();
		this.descriptors.push(new IdFieldDescriptor());
	}
}
