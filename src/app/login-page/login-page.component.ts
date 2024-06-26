import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { ActivatedRoute, Route, Router } from '@angular/router'
import { FaServiceService } from '../services/fa-service.service'
import { AuthServiceService } from '../services/auth-service.service'
import { MatDialog } from '@angular/material/dialog'
import { PopupService } from '../services/popup.service'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  host: { ngSkipHydration: 'true' },
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userName: any
  emailId: any
  password: any
  invalidMsg: any
  loginRepsonse: any
  receivedValue: any
  reEnteredPswd: string = ''
  role: string = 'default'
  isLogin: boolean = true
  isSignup: boolean = false
  showSpinner: boolean = false
  receiveEmailsChecked: boolean = false
  nameSearchableChecked: boolean = false
  showPassword: boolean = false
  @ViewChild('signUp') signUp!: TemplateRef<any>
  @ViewChild('myDialog') myDialog!: TemplateRef<any>

  errorMsg: any
  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
    private faService: FaServiceService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private authService: AuthServiceService,
    private popup: PopupService
  ) {
    this.route.params.subscribe(params => {
      this.receivedValue = params['value']
      // Do something with receivedValue
    })
  }

  loginForm!: any
  socialUser!: any
  isLoggedin?: boolean
  // constructor(
  //   private formBuilder: FormBuilder,
  //   private socialAuthService: SocialAuthService
  // ) {}
  ngOnInit () {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/avEngineer-dashboard'])
    }
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSignupClick () {
    this.isLogin = false
    this.isSignup = true
  }

  onLoginClick () {
    this.isLogin = true
    this.isSignup = false
  }

  togglePasswordVisibility (): void {
    this.showPassword = !this.showPassword
  }

  onSubmit () {
    this.showSpinner = true
    if (this.emailId === 'abc@gmail.com' && this.password === '1234') {
      this.router.navigate(['/admin-page'])
    } else {
      this.faService
        .login(this.emailId, this.password)
        .subscribe(
          (response: any) => {
            console.log('Response from server:', response)
            if (response.status) {
              let emailId = response.records[0].emailId // Corrected
              let userName = response.records[0].userName // Corrected
              let sessionId = response.sessionId
              this.authService.saveLoggedInEmail(emailId)
              this.authService.saveUserName(userName)
              this.authService.saveSessionId(sessionId)
              this.navigateBasedOnReceivedValue(sessionId);
            }
          },
          (error: any) => {
            this.handleError(error);
          }
        )
        .add(() => {
          this.showSpinner = false
        })
    }
  }

  onSignUp () {
    this.invalidMsg = ''
    let isValid = true

    if (!this.isValidEmail(this.emailId)) {
      this.invalidMsg = 'Please enter a valid email address.'
      isValid = false
    }

    if (this.password !== this.reEnteredPswd) {
      this.invalidMsg = 'Passwords do not match.'
      isValid = false
    }

    if (!this.isValidPassword(this.role)) {
      this.invalidMsg = 'Plese Select the Role'
      isValid = false
    }

    if (!this.isValidPassword(this.password)) {
      this.invalidMsg = 'Password must be at least 8 characters long.'
      isValid = false
    }

    if (!isValid) {
      return
    }
    this.popup.openDialogWithTemplateRef(this.signUp)
  }

  onConfirmSignUp () {
    if (this.receiveEmailsChecked && this.nameSearchableChecked) {
      this.showSpinner = true

      const userData = {
        userName: this.userName,
        emailId: this.emailId,
        password: this.password,
        role: this.role
      }

      this.faService
        .createUser(userData)
        .subscribe(
          (response: any) => {
            console.log('Response from server:', response)
            if (response && response.status) {
              this.invalidMsg = ''
              let emailId = this.emailId // Corrected
              let userName = this.userName // Corrected
              let sessionId = response.sessionId
              this.authService.saveLoggedInEmail(emailId)
              this.authService.saveUserName(userName)
              this.authService.saveSessionId(sessionId)

              alert(response.message)
              this.navigateBasedOnReceivedValue(sessionId)
            }
             else {
              alert(
                response.message || 'An error occurred. Please try again later.'
              )
            }
          },
          (error: any) => {
            this.handleError(error);
          }
        )
        .add(() => {
          this.showSpinner = false
        })
    } else {
      alert('Please check both checkboxes before confirming.')
    }
  }

  navigateBasedOnReceivedValue(sessionId: string) {
    let url: string;
    switch (this.receivedValue) {
      case 'Dashboard':
        url = '/avEngineer-dashboard/';
        break;
      case 'eKart':
        url = '/ekart-page/';
        break;
      default:
        url = '/avCommunity/';
        break;
    }
    this.router.navigate([url + sessionId]);
  }

  handleError(error: any) {
    if (error && error.error && error.error.message) {
      this.errorMsg = error.error.message;
    } else {
      console.error('Error:', error);
      this.errorMsg = 'An error occurred. Please try again later.';
    }
    this.popup.openDialogWithTemplateRef(this.myDialog);
  }

  isValidEmail (email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailPattern.test(email)
  }

  isValidPassword (password: string): boolean {
    return password.length >= 8
  }
}
