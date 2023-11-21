import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { SignupService } from 'src/app/services/auth/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private router: Router, private authService:AuthService){}

  signupForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    bio: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onFormSubmit(){
    this.authService.signUp(this.signupForm.value).subscribe(
      (res: any) => {
        console.log(res)
        if(res?.user){
          this.router.navigate(['/'])
        }
      })
  }

}
