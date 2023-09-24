import { AccountService } from './../../../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
  OnSubmit(form: FormGroup) {
    console.log('Name', form.value.username);
    console.log('Email', form.value.password);
    this.accountService
      .login(form.value.username, form.value.password)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = '/dashboard';
          this.router.navigateByUrl(returnUrl);
        },
        error: (error) => {
          // this.error = error;
          // this.loading = false;
        },
      });
  }
}
