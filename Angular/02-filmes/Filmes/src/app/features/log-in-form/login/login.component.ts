import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserLogin } from 'src/app/shared/models/UserLogin';
import { StorageLocalService } from 'src/app/shared/services/storage-local.service';

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
    private storage: StorageLocalService
  ) { }


  ngOnInit(): void {
    this.auth.mostrarMenuEmitter.emit(false)
    this.progress = false
    this.profileForm = this.fb.group({
      email: '',
      password: '',
      remember: false
    });
    this.storage.config(true, "UserAccount")
    this.user = JSON.parse(this.storage.callJSON());
    this.user ? this.justSend() : null
  }
  OnLogin() {
    this.progress = true

    this.user ? this.justSend() : this.setData_Send()
  }
  justSend() {
    this.auth.login(this.user)
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
