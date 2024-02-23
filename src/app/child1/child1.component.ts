import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from '../state.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnDestroy {
  count!: number;
  private subscription: Subscription;

  constructor(private stateService: StateService) {
    this.subscription = this.stateService.count$.subscribe(value => {
      this.count = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
