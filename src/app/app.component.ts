import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterControlsComponent } from "./counter-controls/counter-controls.component";
import { init } from './store/counter.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CounterOutputComponent, CounterControlsComponent]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(init());
  }

  constructor(private store: Store) {}
}
