import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelScrollTopComponent } from './panel-scroll-top.component';

describe('PanelScrollTopComponent', () => {
  let component: PanelScrollTopComponent;
  let fixture: ComponentFixture<PanelScrollTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelScrollTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelScrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
