import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key-point',
  standalone: true,
  imports: [],
  templateUrl: './key-point.component.html',
  styleUrl: './key-point.component.scss'
})
export class KeyPointComponent {

  @Input() title!: string;
  @Input() icon!: string;

  constructor() { }

}
