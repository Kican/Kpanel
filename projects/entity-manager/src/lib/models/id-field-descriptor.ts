import {IComponent, IComponentDescriptor} from '@ngx-k/form-builder';

export class IdFieldDescriptor implements IComponentDescriptor {
	isOwner(component: IComponent): string | null {
		return component.name?.toLowerCase() == 'id' ? 'input-hidden' : null;
	}
}
