import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  isFormOpen = false;

  constructor() { }

  toggleForm() {
    this.isFormOpen = !this.isFormOpen;
  }
}
