import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableContainerComponent } from './data-table-container.component';

describe('DataTableContainerComponent', () => {
  let component: DataTableContainerComponent;
  let fixture: ComponentFixture<DataTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
