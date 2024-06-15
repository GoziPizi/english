import { Component } from '@angular/core';
import { VideoPlayerComponent } from '../../video-player/video-player.component';
import { KeyPointComponent } from './key-point/key-point.component';

@Component({
  selector: 'app-beginner-landing',
  standalone: true,
  imports: [VideoPlayerComponent, KeyPointComponent],
  templateUrl: './beginner-landing.component.html',
  styleUrl: './beginner-landing.component.scss'
})
export class BeginnerLandingComponent {

}
