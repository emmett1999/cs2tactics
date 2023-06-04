import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadePopupComponent } from './nade-popup.component';

describe('NadePopupComponent', () => {
  let component: NadePopupComponent;
  let fixture: ComponentFixture<NadePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NadePopupComponent]
    });
    fixture = TestBed.createComponent(NadePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
