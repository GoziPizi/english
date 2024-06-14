import { Injectable } from '@angular/core';

declare var fbq: Function;

@Injectable({
  providedIn: 'root'
})
export class FacebookPixelService {

  constructor() { }

  trackEvent(event: string, data: any) {
    fbq('track', event, data);
  }
}
