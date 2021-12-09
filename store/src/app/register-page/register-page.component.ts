import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
  this.angForm = this.fb.group({
  name: ['', Validators.required],
  username: ['', [Validators.required,Validators.minLength(1)]],
  pwd: ['', Validators.required],
  phonenumber: ['', Validators.required],
  address :['', Validators.required]
});
}

ngOnInit() {
}

postdata(angForm1: { value: 
  { name: string; 
    username: string; 
    pwd: string; 
    phonenumber: string; 
    address: string; 
  }; })
{
    this.dataService.userregistration
    (angForm1.value.name,
      angForm1.value.username,
      angForm1.value.pwd,
      angForm1.value.phonenumber
      ,angForm1.value.address)
    .pipe(first())
    .subscribe(
      data=> {
this.router.navigate(['/login-page']);
console.log("NAGLAOG NA!");

},

error => {
  console.log(error);
  console.log("DAI PA NAG LALAOG");
  this.router.navigate(['/login-page'])
  
});
}

get username() { return this.angForm.get('username'); }
get pwd() { return this.angForm.get('pwd'); }
get name() { return this.angForm.get('name'); }
get phonenumber() { return this.angForm.get('phonenumber'); }
get address() { return this.angForm.get('address'); }
}


