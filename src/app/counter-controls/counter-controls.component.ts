import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';

@Component({
    selector: 'app-counter-controls',
    imports: [],
    templateUrl: './counter-controls.component.html',
    styleUrl: './counter-controls.component.scss'
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment({ value: 2 }));
  }

  decrement() {
    this.store.dispatch(decrement({ value: 2 }));
  }
}
