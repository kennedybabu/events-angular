import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/shared/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  requestData$!: Observable<any>

  constructor(
    private authService: AuthService, 
    private router: Router,
    private notificationService:NotificationService){}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {

  }

  onFormSubmit(): void {
    const formData: any = this.loginForm.value 
    this.authService.login(formData?.email, formData?.password).subscribe((res) => {
      if(res?.access && res?.refresh) {
        this.router.navigate(['/'])
        this.notificationService.sendSuccessNofification('login successful', 'success')
      }
      }, (err) => {
        this.notificationService.sendErrorNofification(err.statusText,'error')
      })
  }
 
}
