import { Injectable } from '@angular/core';
import { ToDoItem } from '../models/todo';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class ToDoItemService {

  private _list: ToDoItem[];
  private _items$: BehaviorSubject<ToDoItem[]>;

  constructor() {
    this._list = JSON.parse(window.localStorage.getItem('items') || '[]');
    this._items$ = new BehaviorSubject<ToDoItem[]>(this._list);
  }

  get itemsChanged$(): Observable<ToDoItem[]> {
    return this._items$.map(items => [...items]);
  }

  add(text: string, due?: Date): void {
    const item = new ToDoItem(text, false, due);
    this._list = [ item, ...this._list ];
    window.localStorage.setItem('items', JSON.stringify(this._list));
    this.getAll();
  }

  getAll(): void {
    setTimeout(() => this._items$.next(this._list), 500);
  }

  save(item: ToDoItem): Observable<ToDoItem> {
    return Observable.of(item)
      .do(item => window.localStorage.setItem('items', JSON.stringify(this._list)))
      .delay(600);
  }

}
