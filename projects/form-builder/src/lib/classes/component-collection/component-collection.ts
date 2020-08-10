export abstract class ComponentCollection {
	public components: { [name: string]:  any; } = {};


	find(name: string): any {
		return this.components[name];
	}
}
