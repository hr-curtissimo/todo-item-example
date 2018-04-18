import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToDoItemService } from './to-do-item/to-do-item.service';
import { NavComponent } from './nav/nav.component';
import { TodoComponent } from './todo/todo.component';
import { ElsewhereComponent } from './elsewhere/elsewhere.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { initialState } from './store/state';
import { reducers } from './store/reducers';
import { ToDoEffects } from './store/effects/todo-effects';

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
    StoreModule.forRoot(reducers, { initialState }),
    EffectsModule.forRoot([ToDoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    ToDoItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
