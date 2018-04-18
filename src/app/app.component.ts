import { Component } from '@angular/core';
import { ToDoItem } from './models/todo';
import { ToDoItemService } from './to-do-item/to-do-item.service';

import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
