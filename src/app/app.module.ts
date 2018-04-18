import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToDoItemService } from './to-do-item/to-do-item.service';
import { NavComponent } from './nav/nav.component';
import { TodoComponent } from './todo/todo.component';
import { ElsewhereComponent } from './elsewhere/elsewhere.component';

const routes: Route[] = [
  { redirectTo: '/todos', path: '', pathMatch: 'full' },
  { path: 'todos', component: TodoComponent },
  { path: 'elsewhere', component: ElsewhereComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodoComponent,
    ElsewhereComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ToDoItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
