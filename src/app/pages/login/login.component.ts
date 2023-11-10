import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm!: FormGroup  
  requestData$!: Observable<any>

  constructor(private authService: AuthService){}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {

    this.requestData$ = this.authService.userData$ 

  }

  onFormSubmit(): void {
    console.log(this.loginForm.value)
    const formData: any = this.loginForm.value 
    this.authService.login(formData?.email, formData?.password).subscribe((res) => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  }
 
}
