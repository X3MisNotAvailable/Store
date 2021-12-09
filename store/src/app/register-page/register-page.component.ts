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
username: ['', [Validators.required,Validators.minLength(1)]],
password: ['', Validators.required],
name: ['', Validators.required],
phonenumber: ['', Validators.required],
address :['', Validators.required]
});
}

ngOnInit() {
}

postdata(angForm1: { value: { name: any; username: any; password: any; phonenumber: any; address: any;  }; })
{
this.dataService.userregistration(angForm1.value.name,angForm1.value.username,angForm1.value.password,angForm1.value.phonenumber,angForm1.value.address)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['/login-page']);
},

error => {
});
}

get username() { return this.angForm.get('username'); }
get password() { return this.angForm.get('password'); }
get name() { return this.angForm.get('name'); }
get phonenumber() { return this.angForm.get('phonenumber'); }
get address() { return this.angForm.get('address'); }
}