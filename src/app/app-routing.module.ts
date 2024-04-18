import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { User3Component } from './user3/user3.component';
import { User4Component } from './user4/user4.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';


const routes: Routes = [
  {path: 'user1',component:User1Component },
  {path: 'user2', component:User2Component},
  {path: 'user3', component:User3Component},
  {path: '**', component:PageNotFoundComponentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
