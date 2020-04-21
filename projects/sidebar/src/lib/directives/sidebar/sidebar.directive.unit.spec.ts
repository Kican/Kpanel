import {SidebarDirective} from './sidebar.directive';
import {SidebarConfiguration} from '../../models/sidebar.config';
import {SidebarService} from '../../services/sidebar.service';

describe('SidebarDirectiveUnit', () => {
	let directive: SidebarDirective;
	const configuration = new SidebarConfiguration({isFixed: true});
	const service = new SidebarService(configuration);

	beforeEach(() => {
		directive = new SidebarDirective(configuration, service);
	});

	it('should set opened property to true when sidebar is opened', () => {
		service.open();

		expect(directive.opened).toBeTrue();
	});

	it('should set opened property to false when sidebar is closed', () => {
		service.close();

		expect(directive.opened).toBeFalse();
	});

	it('should set position property properly', () => {
		expect(directive.position).toBe('fixed');
	});
});
