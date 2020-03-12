import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { DashComponent } from './dash/dash.component';
import { DashModule } from './dash/dash.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => (import('./home/home.module').then(m => m.HomeModule))

  },

  {
   

    path: 'login',
    loadChildren: () => (import('./login/login.module').then(m =>m.LoginModule))
   
  },
  {

    path: 'signup',
    loadChildren: () => (import('./signup/signup.module').then(m => SignupModule))


  },
  {
    path: 'dash',
    loadChildren: () => (import('./dash/dash.module').then(m => DashModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
