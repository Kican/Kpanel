import {SidebarContentDirective} from './sidebar-content.directive';
import {SidebarConfiguration} from '../../models/sidebar.config';
import {SidebarService} from '../../services/sidebar.service';

describe('SidebarContentDirective', () => {
	let directive: SidebarContentDirective;
	const sidebarService = new SidebarService(new SidebarConfiguration());

	beforeEach(() => {
		directive = new SidebarContentDirective(sidebarService);
		directive.ngOnInit();
	});

	it('should unset all classes when sidebarService observe status with closed value', () => {
		sidebarService.close();

		expect(directive.pushed).toBeFalse();
		expect(directive.side).toBeFalse();
		expect(directive.over).toBeFalse();
	});

	it('should set one of opened classes when sidebar is opened', () => {
		sidebarService.open();

		expect([directive.side, directive.over, directive.pushed].filter(x => x === true).length).toBe(1);
	});
});
