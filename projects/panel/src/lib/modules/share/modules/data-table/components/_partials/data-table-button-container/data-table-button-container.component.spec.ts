import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableButtonContainerComponent } from './data-table-button-container.component';

describe('DataTableButtonContainerComponent', () => {
  let component: DataTableButtonContainerComponent;
  let fixture: ComponentFixture<DataTableButtonContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableButtonContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
