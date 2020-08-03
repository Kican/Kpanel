import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPassComponent } from './new-pass.component';

describe('NewPassComponent', () => {
  let component: NewPassComponent;
  let fixture: ComponentFixture<NewPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
