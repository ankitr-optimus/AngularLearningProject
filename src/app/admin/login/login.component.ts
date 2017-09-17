
import { Component, OnInit } from '@angular/core';
import { UserService } from '../adminShared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private email: string;
  private password1: string;

  constructor(private userSVC: UserService, private router: Router) {}
  
  login() {
    this.userSVC.login(this.email, this.password1);
		this.userSVC.verifyUser();
  }

  signUp() {
    this.router.navigate(['/admin/signup']);
  }

  cancel() {
    this.router.navigate(['']);
  }


  ngOnInit() {
  }

}
