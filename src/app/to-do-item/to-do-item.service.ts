import { Injectable } from '@angular/core';
import { ToDoItem } from '../models/todo';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class ToDoItemService {

  private list: ToDoItem[];

  constructor() {
    this.list = JSON.parse(window.localStorage.getItem('items') || '[]');
  }

  add(text: string, due?: Date): Observable<ToDoItem> {
    return Observable.of(new ToDoItem(text, false, due))
      .do(item => this.list.push(item))
      .do(item => window.localStorage.setItem('items', JSON.stringify(this.list)))
      .delay(500);
  }

  getAll(): Observable<ToDoItem[]> {
    return Observable.of(this.list)
      .delay(500);
  }

  save(item: ToDoItem): Observable<ToDoItem> {
    return Observable.of(item)
      .do(item => window.localStorage.setItem('items', JSON.stringify(this.list)))
      .delay(600);
  }

}
