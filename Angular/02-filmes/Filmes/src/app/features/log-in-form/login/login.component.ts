import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StorageLocalService } from 'src/app/shared/services/storage-local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  profileForm: any
  constructor(
    private fb: FormBuilder,
    private session: StorageLocalService) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      email: null,
      password: null,
      remember: null
    })
  }
  OnLogin() {
    this.session.config(true, 'UserAccount')
    let data ={
      email: this.profileForm.value.email,
      password: this.profileForm.value.password
    }
    this.session.sendMoreADate(data)
  }
}
