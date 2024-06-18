import { Component } from '@angular/core';
import { VideoPlayerComponent } from '../../video-player/video-player.component';
import { KeyPointComponent } from './key-point/key-point.component';
import { StarDisplayComponent } from './star-display/star-display.component';
import { KeyBenefitComponent } from './key-benefit/key-benefit.component';
import { ContactFormService } from '../../services/contact-form.service';
import { FacebookPixelService } from '../../services/facebook-pixel.service';
import { TestimonialComponent } from './testimonial/testimonial.component';

@Component({
  selector: 'app-beginner-landing',
  standalone: true,
  imports: [VideoPlayerComponent, KeyPointComponent, StarDisplayComponent, KeyBenefitComponent, TestimonialComponent],
  templateUrl: './beginner-landing.component.html',
  styleUrl: './beginner-landing.component.scss'
})
export class BeginnerLandingComponent {

  constructor(
    private contactFormService: ContactFormService,
  ) { }

  confiance = "Ne doutez plus jamais de vos compétences, et soyez prêts en toutes circonstances à comprendre ce que l’on vous dit."
  liberte = "Reprenez le contrôle sur votre vie en ôtant la barrière de la langue dans toutes les situations."
  job = "Impressionez vos collègues et votre entourage en comprenant l’anglais de manière fluide et précise."

  testimonial_1_name = "Marie"
  testimonial_1_text = "Je suis très satisfaite de la formation. J'ai beaucoup appris et j'ai pu progresser rapidement. Je recommande vivement."
  testimonial_2_name = "Jean"
  testimonial_2_text = "Je suis très satisfait de la formation. J'ai beaucoup appris et j'ai pu progresser rapidement. Je recommande vivement."

  toggleForm() {
    this.contactFormService.toggleForm();
  }

}
