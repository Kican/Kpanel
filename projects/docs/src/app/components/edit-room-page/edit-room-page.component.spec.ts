import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoomPageComponent } from './edit-room-page.component';

describe('EditRoomPageComponent', () => {
  let component: EditRoomPageComponent;
  let fixture: ComponentFixture<EditRoomPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRoomPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
