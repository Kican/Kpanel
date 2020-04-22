import {BackDropComponent} from './back-drop.component';
import {SidebarConfiguration} from '../../models/sidebar.config';
import {SidebarService} from '../../services/sidebar.service';

describe('BackdropComponent', () => {
	const configuration = new SidebarConfiguration({isFixed: true});
	const service = new SidebarService(configuration);
	let component: BackDropComponent;

	beforeEach(() => {
		component = new BackDropComponent(service);
		component.ngOnInit();
	});

	it('should set position property properly', () => {
		expect(component.position).toBe('fixed');
	});

	it('should call close method of sidebarService when closeOnBackdropClick is true', () => {
		spyOnProperty(service, 'closeOnBackdropClick').and.returnValue(true);
		const spy = spyOn(service, 'close');

		component.close();

		expect(spy).toHaveBeenCalled();
	});

	it('should not call close method of sidebarService when closeOnBackdropClick is false', () => {
		spyOnProperty(service, 'closeOnBackdropClick').and.returnValue(false);
		const spy = spyOn(service, 'close');

		component.close();

		expect(spy).not.toHaveBeenCalled();
	});
});
