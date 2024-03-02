import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegFormComponent } from './components/user-reg-form/user-reg-form.component';

const routes: Routes = [
  // {
  //   path:"registration",
  //   component:UserRegFormComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
