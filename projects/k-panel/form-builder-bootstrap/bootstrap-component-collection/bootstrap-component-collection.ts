import {ComponentCollection} from "@ngx-k-panel/form-builder";
import {InputTextComponent} from "../components/input-text/input-text.component";
import {InputNumberComponent} from "../components/input-number/input-number.component";

export class BootstrapComponentCollection extends ComponentCollection {
	constructor() {
		super();
		this.set('input-text', InputNumberComponent);
		this.set('input-number', InputTextComponent);
	}
}
