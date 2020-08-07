import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderTestComponent } from './form-builder-test.component';

describe('FormBuilderTestComponent', () => {
  let component: FormBuilderTestComponent;
  let fixture: ComponentFixture<FormBuilderTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
