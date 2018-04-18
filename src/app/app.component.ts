import { Component } from '@angular/core';
import { ToDoItem } from './models/todo';
import { ToDoItemService } from './to-do-item/to-do-item.service';

import 'rxjs/add/operator/mergeMap';
import { State } from './store/state';
import { Store } from '@ngrx/store';
import { LoadTodos } from './store/actions/todo-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(store: Store<State>) {
    store.dispatch(new LoadTodos());
  }
}
