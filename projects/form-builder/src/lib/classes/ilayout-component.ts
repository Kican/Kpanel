import {IComponent} from "./icomponent";

export interface ILayoutComponent extends IComponent {
	children: IComponent[];
}
