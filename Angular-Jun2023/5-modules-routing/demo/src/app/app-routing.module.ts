import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: UserListComponent},  
  {path: 'todo-list', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
