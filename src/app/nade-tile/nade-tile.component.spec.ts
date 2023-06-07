import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadeTileComponent } from './nade-tile.component';

describe('NadeTileComponent', () => {
  let component: NadeTileComponent;
  let fixture: ComponentFixture<NadeTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NadeTileComponent]
    });
    fixture = TestBed.createComponent(NadeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
