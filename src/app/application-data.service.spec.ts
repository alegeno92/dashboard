import { TestBed } from '@angular/core/testing';

import { ApplicationDataService } from './application-data.service';

describe('ApplicationDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationDataService = TestBed.get(ApplicationDataService);
    expect(service).toBeTruthy();
  });
});
