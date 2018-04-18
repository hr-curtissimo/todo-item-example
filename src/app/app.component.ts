import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './models/todo';
import { ToDoItemService } from './to-do-item/to-do-item.service';

import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public text: string;
  public items: ToDoItem[];
  public sending: boolean;

  constructor(
    private _itemData: ToDoItemService
  ) {
    this.items = [];
  }

  ngOnInit() {
    this._itemData
      .getAll()
      .subscribe(items => this.items = items);
  }

  createNewItem() {
    this.sending = true;
    this._itemData
      .add(this.text)
      .mergeMap(() => this._itemData.getAll())
      .subscribe(
        items => (this.items = items) && (this.text = ''),
        () => this.sending = false,
        () => this.sending = false
      );
  }

  markComplete(item: ToDoItem) {
    item.completed = true;
    this._itemData
      .save(item)
      .subscribe(
        () => {},
        () => item.completed = false
      );
  }
}
