import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count = new BehaviorSubject<number>(0);

  pippo = 0;

  increaseCount(){

    // const pippoValue = this.pippo;
    // const pippoIncreased = pippoValue + 1
    // this.pippo = pippoIncreased;

    // this.pippo = this.pippo + 1;

    const actualCount = this.count.value;
    const increasedCount = actualCount + 1;
    this.count.next(increasedCount);

    // this.count.next(this.count.value + 1)
  }

  resetCount(){
    this.count.next(0);
  }


}
