import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableCountComponent } from './data-table-count.component';

describe('DataTableCountComponent', () => {
  let component: DataTableCountComponent;
  let fixture: ComponentFixture<DataTableCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
