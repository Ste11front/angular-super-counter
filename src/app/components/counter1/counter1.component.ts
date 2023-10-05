import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.scss'],
})
export class Counter1Component {
  count: number = 0;

  @Input() set increase(valueContainer: any) {
    this.count = this.count + valueContainer.value;
  }
  @Input() set reset(valueContainer: any) {
    this.count = valueContainer.value;
  }


}
