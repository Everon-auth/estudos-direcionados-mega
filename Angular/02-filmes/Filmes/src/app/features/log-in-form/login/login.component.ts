import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserLogin } from 'src/app/shared/models/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  profileForm: any
  progress: boolean = false
  user!: UserLogin;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
  ) {
  }


  ngOnInit(): void {
    this.auth.mostrarMenuEmitter.emit(false)
    this.progress = false
    this.profileForm = this.fb.group({
      email: '',
      password: '',
      remember: false
    });
  }
  OnLogin() {
    this.progress = true

    this.user ? this.justSend() : this.setData_Send()
  }
  justSend() {
    this.auth.getuserANDlogin(this.user)
  }
  setData_Send() {
    this.user = {
      email: this.profileForm.value.email,
      password: this.profileForm.value.password,
      checked: this.profileForm.value.remember,
    }
    this.justSend()
  }
}
