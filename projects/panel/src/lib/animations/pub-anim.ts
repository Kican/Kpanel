import {animate, query, state, style, transition, trigger} from '@angular/animations';

export const slideToggle =
	trigger('slideToggle', [
			state('closed', style({height: '0', opacity: '0', display: 'none'})),
			state('opened', style({})),
			transition('closed => opened',
				[
					animate('.0s 0s ease-in-out', style({display: '*'})),
					animate('.2s 0s ease-in-out', style({height: '*'})),
					animate('.2s .0s ease-in-out', style({opacity: '1'})),
				]),
			transition('opened => closed',
				[
					animate('.2s .0s ease-in-out', style({opacity: '0'})),
					animate('.2s 0s ease-in-out', style({height: '0'})),
				]),
		]
	);

export const routesFadeAnimation = trigger('routesFadeAnimation', [
	// The '* => *' will trigger the animation to change between any two states
	transition('* => *', [
		// The query function has three params.
		// First is the event, so this will apply on entering or when the element is added to the DOM.
		// Second is a list of styles or animations to apply.
		// Third we add a config object with optional set to true, this is to signal
		// angular that the animation may not apply as it may or may not be in the DOM.
		query(
			':enter',
			[style({ opacity: 0 })],
			{ optional: true }
		),
		query(
			':leave',
			// here we apply a style and use the animate function to apply the style over 0.3 seconds
			[style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
			{ optional: true }
		),
		query(
			':enter',
			[style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
			{ optional: true }
		)
	])
]);
