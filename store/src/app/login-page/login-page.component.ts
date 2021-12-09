import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({
username: ['', [Validators.required,Validators.minLength(1), Validators.required]],
pwd: ['', Validators.required]
});
}

ngOnInit() {
}
postdata(angForm1: { value: { username: any; pwd: any; }; })
{
this.dataService.userlogin(angForm1.value.username,angForm1.value.pwd)
.pipe(first())
.subscribe(
data => {
  console.log("log in data", data);
  
const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/home-page';
this.router.navigate([redirect]);
},
error => {
  console.log(error);
  
alert("Username or password is incorrect")
});
}
get username() { return this.angForm.get('username'); }
get pwd() { return this.angForm.get('pwd'); }
}