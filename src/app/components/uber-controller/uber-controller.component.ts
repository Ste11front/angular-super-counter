import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uber-controller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uber-controller.component.html',
  styleUrls: ['./uber-controller.component.scss']
})
export class UberControllerComponent {

  resetCounter(){}
  increaseCounter(){}
}
