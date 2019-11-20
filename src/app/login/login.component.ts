import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { ToastrService} from 'ngx-toastr';
import { Router} from '@angular/router';
import { Loginuser } from '../loginuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted=false;
  loginuser: Loginuser;
  message: string;
  user:Observable<Loginuser[]>;
  users:Loginuser=new Loginuser();


  constructor(private authservice:AuthService,private router:Router,private formBuilder: FormBuilder,private toastr:ToastrService) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]]
    });
  }
 get formControls() {
   return this.loginForm.controls;
 }
 login(){
   this.isSubmitted=true;
   if(this.loginForm.invalid){
     return;
   }
   this.authservice.login(this.loginForm.value)
   .subscribe(x=> {
     console.log(x)
     x.forEach(element=> {
       this.users.utype=element["utype"];
     })
     if(this.users.utype==1) {
       this.router.navigate(['assetlist']);
       this.toastr.info('Welcome Admin')
     }
     else if(this.users.utype==2)
     {
       this.router.navigate(['user']);
       this.toastr.info('Welcome User')
     }
     else{
       this.message="Invalid Username or password"
     }
    },(error) =>{console.log(error)}
   )
 }
}
