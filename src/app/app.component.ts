import { Component } from '@angular/core';
import { StateService } from './state.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child1Component, Child2Component], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week 5 - Signals  [Aiden Farrell S00226489]';

  constructor(private stateService: StateService) {}

  increment() {
    this.stateService.increment();
  }

  decrement() {
    this.stateService.decrement();
  }
}
