import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../../Components/Register/register.component';
import { registerRoute } from './register.routes';
import { RoutingNavigationService } from '../../Services/routing-navigation.service';




@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(registerRoute),
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [
    RoutingNavigationService,
  ]
})
export class RegisterModule { }
