import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DataTableSearchComponent} from './data-table-search.component';

describe('DataTableSearchComponent', () => {
	let component: DataTableSearchComponent;
	let fixture: ComponentFixture<DataTableSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DataTableSearchComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DataTableSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
