import { Component } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  doubleCount!: number;

  constructor(private stateService: StateService) {
    this.stateService.count$.subscribe(value => {
      this.doubleCount = value * 2;
    });
  }
}
