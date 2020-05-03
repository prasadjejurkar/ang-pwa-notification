import { TestBed } from '@angular/core/testing';

import { AppudateService } from './appudate.service';

describe('AppudateService', () => {
  let service: AppudateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppudateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
