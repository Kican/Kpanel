import {SidebarService} from './sidebar.service';
import {SidebarConfiguration} from '../models/sidebar.config';
import {SidebarStatus} from '../models/sidebar-status.enum';
import {SidebarMode} from '../models/sidebar-mode.enum';

describe('SidebarServiceUnit', () => {
	let service: SidebarService;
	const configuration = new SidebarConfiguration();
	configuration.overWrite({initialState: SidebarStatus.Closed});

	beforeEach(() => {
		service = new SidebarService(configuration);
	});

	it('should observe statusChange$ with opened value when open method called', () => {
		let status: SidebarStatus = SidebarStatus.Closed;
		service.statusChange$.subscribe(value => {
			status = value;
		});

		service.open();

		expect(status).toBe(SidebarStatus.Opened);
	});

	it('should observe statusChange$ with closed value when close method called', () => {
		service.open();
		let status: SidebarStatus;
		service.statusChange$.subscribe(value => {
			status = value;
		});

		service.close();

		expect(status).toBe(SidebarStatus.Closed);
	});

	it('should observe statusChange$ with opened status when toggle method called with currently closed status', () => {
		let status: SidebarStatus;
		service.statusChange$.subscribe(value => {
			status = value;
		});

		service.toggle();

		expect(status).toBe(SidebarStatus.Opened);
	});

	it('should observe statusChange$ with closed status when toggle method called with currently opened status', () => {
		service.open();
		let status: SidebarStatus;
		service.statusChange$.subscribe(value => {
			status = value;
		});

		service.toggle();

		expect(status).toBe(SidebarStatus.Closed);
	});

	it('should observe statusChange$ only when change happen to status', () => {
		const consumer = {
			statusChange: () => {
			}
		};
		const spy = spyOn(consumer, 'statusChange');
		service.statusChange$.subscribe(value => {
			consumer.statusChange();
		});

		service.close();
		service.close();
		service.close();

		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('should change the status of sidebar when open method called', () => {
		service.open();

		expect(service.status).toBe(SidebarStatus.Opened);
	});

	it('should change the status of sidebar when close method called', () => {
		service.open();
		service.close();

		expect(service.status).toBe(SidebarStatus.Closed);
	});

	it('should change the mode of sidebar when changeMode method called', () => {
		service.changeMode(SidebarMode.Side);

		expect(service.mode).toBe(SidebarMode.Side);
	});

	it('should change hasBackdrop when changeHasBackdrop method called', () => {
		service.changeBackdrop(false);

		expect(service.hasBackdrop).toBe(false);
	});

	it('should change isFixed when changeIsFixed method called', () => {
		service.changeIsFixed(false);

		expect(service.isFixed).toBe(false);
	});

	it('should change closeOnBackdropClick when changeCloseOnBackdropClick method called', () => {
		service.changeCloseOnBackdropClick(false);

		expect(service.closeOnBackdropClick).toBe(false);
	});

	[
		[true, 'fixed'],
		[false, 'absolute']
	].forEach(([value, expected]) => {
		it('should return correct position based on isFixed status', () => {
			service.changeIsFixed(value as boolean);

			expect(service.position).toBe(expected as string);
		});
	});
});
