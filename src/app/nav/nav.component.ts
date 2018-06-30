import { Component, OnInit } from '@angular/core';
import { ToDoItemService } from '../to-do-item/to-do-item.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { State } from '../store/state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public numberOfTodos: number;

  constructor(
    private _store: Store<State>
  ) {}

  ngOnInit() {
    this._store
      .select(state => state.todos)
      .map(x => x.length)
      .subscribe(count => this.numberOfTodos = count);
  }

}
