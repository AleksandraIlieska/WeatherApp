import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../../Components/Shared/Navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        NavbarComponent
    ],
})
export class NavbarModule { }
