import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key-benefit',
  standalone: true,
  imports: [],
  templateUrl: './key-benefit.component.html',
  styleUrl: './key-benefit.component.scss'
})
export class KeyBenefitComponent {

  @Input() title!: string;
  @Input() description!: string;

}
