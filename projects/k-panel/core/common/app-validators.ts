import {AbstractControl, FormGroup, ValidatorFn} from '@angular/forms';

export class AppValidators {
	// static noWhiteSpace(control: AbstractControl): { [key: string]: any } | null {
	// 	const isWhiteSpace = control.value !== null && control.value.length && control.value.match(/^ *$/) !== null;
	// 	return isWhiteSpace ? {noWhiteSpace: {value: control.value}} : null;
	// }
	//
	// static asciiOnly(control: AbstractControl): { [key: string]: any } | null {
	// 	const isAscii = control.value !== null && control.value.length && control.value.match('[^\x00-\x80]+') !== null;
	// 	return isAscii ? {isAscii: {value: control.value}} : null;
	// }
	//
	// static equal(...controls: string[]): ValidatorFn {
	// 	return (control: FormGroup): { [key: string]: any } | null => {
	// 		for (let i = 0; i < controls.length - 1; i++) {
	// 			if (control.get(controls[i]).value !== control.get(controls[i + 1]).value) {
	// 				return {equal: {value: [controls[i], controls[i + 1]]}};
	// 			}
	// 		}
	// 		return null;
	// 	};
	// }
	//
	// static nationalCode(control: AbstractControl): { [key: string]: any } | null {
	// 	let input = control.value;
	// 	if (!/^\d{10}$/.test(input)
	// 		|| input == '0000000000'
	// 		|| input == '1111111111'
	// 		|| input == '2222222222'
	// 		|| input == '3333333333'
	// 		|| input == '4444444444'
	// 		|| input == '5555555555'
	// 		|| input == '6666666666'
	// 		|| input == '7777777777'
	// 		|| input == '8888888888'
	// 		|| input == '9999999999') {
	// 		return {nationalCode: {value: control.value}};
	// 	}
	// 	let check = +input[9];
	// 	let sum = 0;
	// 	let i;
	// 	for (i = 0; i < 9; ++i) {
	// 		sum += +input[i] * (10 - i);
	// 	}
	// 	sum %= 11;
	// 	if ((sum < 2 && check == sum) || (sum >= 2 && check + sum == 11)) {
	// 		return null;
	// 	} else {
	// 		return {nationalCode: {value: control.value}};
	// 	}
	// }

}
