import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../models/todo';
import { ToDoItemService } from '../to-do-item/to-do-item.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
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
      .itemsChanged$
      .subscribe(items => {
        this.items = items;
        this.sending = false;
        this.text = '';
      });
  }

  createNewItem() {
    this.sending = true;
    this._itemData.add(this.text);
  }

  markComplete(item: ToDoItem) {
    item.completed = true;
    this._itemData
      .save(item)
      .subscribe(
        () => this.sending = false,
        () => item.completed = false || (this.sending = false),
      );
  }
}
