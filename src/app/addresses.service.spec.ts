/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddressesService } from './addresses.service';

describe('AddressesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressesService]
    });
  });

  it('should ...', inject([AddressesService], (service: AddressesService) => {
    expect(service).toBeTruthy();
  }));
});
