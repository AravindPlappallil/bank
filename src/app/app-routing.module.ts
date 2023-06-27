import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
 {path:'',component:LoginPageComponent},
  {path:'registration-page',component:RegistrationPageComponent},
 {path:'home-page',component:HomePageComponent},
 {path:'transaction',component:TransactionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
