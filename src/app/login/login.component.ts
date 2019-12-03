/*import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  login: Login = new Login();
  constructor(private service: AuthService, private router: Router,
    private http: HttpClient, private toastr: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      uname: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    })
  }
  get formControl() {
    return this.loginForm.controls;
  }
  logins() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.toastr.warning("invalid username & password");
      
    }
    else {
      this.router.navigateByUrl('/admin');
    }
  }

}*/
import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login = new Login();
  isSubmitted = false;
  logins: Observable<Login[]>;

  constructor(private service: AuthService, private router: Router,
    private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      uname: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  loginUser() {
    console.log(this.loginForm.value);
    //this.login.username=this.loginForm.controls.username.value;
    //this.login.password=this.loginForm.controls.password.value;
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.toastr.error('Enter username and password');
      return;
    }
    this.service.login(this.loginForm.value).subscribe(data => {
      data.forEach(element => {

        if (element["utype"] == 'admin') {
          // this.toastr.success('Successfully Logged in');
          localStorage.setItem('ACCESS_TOKEN', element["uname"]);
          this.router.navigateByUrl('/admin');
          this.toastr.success('Welcome Admin', 'Login Successful');
        }
        else if (element["utype"] == 'PurchaseManager') {
          this.router.navigateByUrl('/purchase');
        }

      });
    })
    if (localStorage.getItem('ACCESS_TOKEN') == "") {
      this.toastr.warning('Enter valid Username and Password');
    }
  }

}
