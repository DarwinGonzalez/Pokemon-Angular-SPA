import { TestBed } from '@angular/core/testing';

import { ConsultaServiceService } from './consulta-service.service';

describe('ConsultaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaServiceService = TestBed.get(ConsultaServiceService);
    expect(service).toBeTruthy();
  });
});
