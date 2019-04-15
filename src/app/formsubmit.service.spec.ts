import { TestBed } from '@angular/core/testing';

import { FormsubmitService } from './formsubmit.service';

describe('FormsubmitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsubmitService = TestBed.get(FormsubmitService);
    expect(service).toBeTruthy();
  });
});
