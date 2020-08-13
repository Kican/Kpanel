import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSetUserRolesComponent } from './dialog-set-user-roles.component';

describe('DialogSetUserRolesComponent', () => {
  let component: DialogSetUserRolesComponent;
  let fixture: ComponentFixture<DialogSetUserRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSetUserRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSetUserRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
