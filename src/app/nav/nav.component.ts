import { Component, OnInit } from '@angular/core';
import { ToDoItemService } from '../to-do-item/to-do-item.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public numberOfTodos: number;

  constructor(
    private _itemData: ToDoItemService
  ) {}

  ngOnInit() {
    this._itemData
      .itemsChanged$
      .do(x => x.push({ text: '?', completed: true }))
      .map(x => x.length)
      .subscribe(count => this.numberOfTodos = count);
  }

}
