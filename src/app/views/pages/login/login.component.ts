import { AccountService } from './../../../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;

  constructor(private fb: FormBuilder , private accountservice : AccountService ) {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
  OnSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.username);
    console.log('Email', form.value.password);
  }
}
