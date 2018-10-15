import { TestBed, inject } from '@angular/core/testing';

import { CentralSocketService } from './central-socket.service';

describe('CentralSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentralSocketService]
    });
  });

  it('should be created', inject([CentralSocketService], (service: CentralSocketService) => {
    expect(service).toBeTruthy();
  }));
});
