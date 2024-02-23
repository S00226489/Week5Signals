import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private count = new BehaviorSubject<number>(0);
  count$ = this.count.asObservable();

  constructor() { }

  increment() {
    this.count.next(this.count.value + 1);
  }

  decrement() {
    if (this.count.value > 0) {
      this.count.next(this.count.value - 1);
    }
  }

  getCount() {
    return this.count.value;
  }
}
