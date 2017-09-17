import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EmailBlastComponent } from './email-blast/email-blast.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { UserService } from './adminShared/user.service';

const AdminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		children: [
			{ path: 'login', component: LoginComponent},
			{ path: 'signup', component: SignUpComponent},
			{ path: '', component: AdminComponent, canActivate: [UserService]}
		]
	}
]

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, EmailBlastComponent, UsersComponent, LoginComponent, SignUpComponent, AdminMenuComponent],

  providers: [UserService]
})
export class AdminModule { }
