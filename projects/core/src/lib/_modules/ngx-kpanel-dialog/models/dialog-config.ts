export type DialogSize = 'small' | 'mid' | 'large';

export class DialogConfig<TData = any> {
	id?: string;
	data?: TData = null;
	size?: DialogSize = 'large';
}
