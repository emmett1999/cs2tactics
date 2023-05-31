import { TestBed } from '@angular/core/testing';

import { GrenadeService } from './grenade.service';

describe('GrenadeService', () => {
  let service: GrenadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrenadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
