import {ErrorMessage} from 'ng-bootstrap-form-validation';

export const FORMS_CUSTOM_ERRORS: ErrorMessage[] = [
	{
		error: 'required',
		format: requiredFormat
	}, {
		error: 'email',
		format: emailFormat
	},
	{
		error: 'maxlength',
		format: maxLengthFormat
	},
	{
		error: 'minlength',
		format: minLengthFormat
	},
	{
		error: 'min',
		format: minFormat
	},
	{
		error: 'max',
		format: maxFormat
	},
	{
		error: 'pattern',
		format: patternFormat
	},
	{
		error: 'noWhiteSpace',
		format: noWhiteSpaceFormat
	},
	{
		error: 'nationalCode',
		format: nationalCodeFormat
	},
	{
		error: 'isAscii',
		format: isAsciiFormat
	}
];

export function requiredFormat(label: string, error: any): string {
	return `${label} اجباری است`;
}

export function emailFormat(label: string, error: any): string {
	return `${label} معتبر نیست`;
}

export function maxLengthFormat(label: string, error: any): string {
	return `${label} حداکثر ${error.requiredLength} کاراکتر`;
}

export function minLengthFormat(label: string, error: any): string {
	return `${label} حداقل ${error.requiredLength} کاراکتر`;
}

export function patternFormat(label: string, error: any): string {
	return `${label} پترن را رعایت نمیکند`;
}
export function noWhiteSpaceFormat(label: string, error: any): string {
	return `${label} نمی تواند تنها شامل فاصله باشد`;
}

export function minFormat(label: string, error: any): string {
	return `${label} حداقل ${error.min}`;
}

export function maxFormat(label: string, error: any): string {
	return `${label} حداکثر ${error.max}`;
}

export function nationalCodeFormat(label: string, error: any): string {
	return `${label} معتبر نیست`;
}

export function isAsciiFormat(label: string, error: any): string {
	return ` از انگلیسی بودن صفحه کلید مطمئن شوید`;
}

