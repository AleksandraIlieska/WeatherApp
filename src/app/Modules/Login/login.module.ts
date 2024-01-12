import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../Components/Login/login.component';
import { loginRoute } from './login.routes';
import { RoutingNavigationService } from '../../Services/routing-navigation.service';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoute),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RoutingNavigationService
  ]
})
export class LoginModule { }
