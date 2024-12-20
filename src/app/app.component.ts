import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { init } from './store/counter.actions';

@Component({
    selector: 'app-root',
    imports: [CounterOutputComponent, CounterControlsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(init());
  }

  constructor(private store: Store) {}
}
