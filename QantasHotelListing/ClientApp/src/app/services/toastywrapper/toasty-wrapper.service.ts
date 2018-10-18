import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Injectable()
export class ToastyWrapperService {

  constructor(
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = 'bootstrap';
  }

  info(options: ToastOptions | string | number): void {
    this.toastyService.info(options);
  }

  success(options: ToastOptions | string | number): void {
    this.toastyService.success(options);
  }

  wait(options: ToastOptions | string | number): void {
    this.toastyService.wait(options);
  }

  error(options: ToastOptions | string | number): void {
    this.toastyService.error(options);
  }
}
