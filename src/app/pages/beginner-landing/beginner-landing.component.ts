import { Component } from '@angular/core';
import { VideoPlayerComponent } from '../../video-player/video-player.component';
import { KeyPointComponent } from './key-point/key-point.component';
import { StarDisplayComponent } from './star-display/star-display.component';
import { KeyBenefitComponent } from './key-benefit/key-benefit.component';

@Component({
  selector: 'app-beginner-landing',
  standalone: true,
  imports: [VideoPlayerComponent, KeyPointComponent, StarDisplayComponent, KeyBenefitComponent],
  templateUrl: './beginner-landing.component.html',
  styleUrl: './beginner-landing.component.scss'
})
export class BeginnerLandingComponent {

  confiance = "Ne doutez plus jamais de vos compétences, et soyez près en toutes circonstances à comprendre ce que l’on vous dit"
  liberte = "Reprenez le contrôle sur votre vie en ôtant la barrière de la langue dans toutes les situations"
  job = "Impressionez vos collègues et votre entourage en comprenant l’anglais de manière fluide et précise"

}
