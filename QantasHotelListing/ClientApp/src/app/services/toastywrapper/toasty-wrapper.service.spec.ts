import { TestBed, inject } from '@angular/core/testing';

import { ToastyWrapperService } from './toasty-wrapper.service';
import { ToastyService, ToastyConfig } from 'ng2-toasty';

import { of } from 'rxjs/observable/of';
import { Hotel } from '../../../models/hotel';

describe('ToastyWrapperService', () => {
  // Set up ToastyWrapperService
const toastyConfig = new ToastyConfig();
const toastyService = new ToastyService(toastyConfig);

const service = new ToastyWrapperService(toastyService, toastyConfig);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastyWrapperService]
    });
  });

  it('Should create', () => {
    expect(service).toBeTruthy();
  });

});
