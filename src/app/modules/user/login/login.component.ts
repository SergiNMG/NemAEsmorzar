import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  getUserForm!: FormGroup;
  hide: boolean = true;
  formValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  getMailErrorMessage() {
    if (this.getUserForm.get('email')?.hasError('required')) {
      return 'Debes introducir un email';
    }
    return this.getUserForm.get('email')?.hasError('email')
      ? 'Email inválido'
      : '';
  }

  getPasswordErrorMessage() {
    if (this.getUserForm.get('password')?.hasError('required')) {
      return 'Debes introducir una contraseña';
    }
    return this.getUserForm.get('password')?.hasError('minLength')
      ? 'La contraseña debe tener más de 6 carácteres'
      : '';
  }

  submitUser() {
    this.formValue = this.getUserForm.value;
  }

  submitForm() {
    if (this.getUserForm.valid) {
      this.userService
        .login(this.getUserForm.value)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
