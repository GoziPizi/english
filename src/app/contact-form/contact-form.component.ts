import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormService } from '../services/contact-form.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FacebookPixelService } from '../services/facebook-pixel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  private baseUrl = 'https://back.parlons-anglais.fr';

  constructor(
    private contactFormService: ContactFormService,
    private http: HttpClient,
    private facebookPixelService: FacebookPixelService, 
    private router: Router
  ) { }

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    other: new FormControl('')
  });

  toggleForm() {
    this.contactFormService.toggleForm();
  }

  submitForm() {
    this.facebookPixelService.trackEvent('ContactFormSent', this.contactForm.value);
    this.http.post(`${this.baseUrl}/api/contact`, this.contactForm.value).subscribe({
      next: () => {
        this.contactForm.reset();
        this.toggleForm();
        this.router.navigate(['/thank-you-form']);
      }
    });
  }

  get isPopupOpen() {
    return this.contactFormService.isFormOpen;
  }

}
