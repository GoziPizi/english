import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormService } from '../services/contact-form.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  constructor(
    private contactFormService: ContactFormService
  ) { }

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    other: new FormControl('')
  });

  toggleForm() {
    this.contactFormService.toggleForm();
  }

  submitForm() {
    
  }

  get isPopupOpen() {
    return this.contactFormService.isFormOpen;
  }

}
