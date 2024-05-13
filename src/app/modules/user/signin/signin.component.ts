import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  addUserForm!: FormGroup;
  hide: boolean = true;
  formValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  getMailErrorMessage() {
    if (this.addUserForm.get('email')?.hasError('required')) {
      return 'Debes introducir un email';
    }
    return this.addUserForm.get('email')?.hasError('email')
      ? 'Email inválido'
      : '';
  }

  getPasswordErrorMessage() {
    if (this.addUserForm.get('password')?.hasError('required')) {
      return 'Debes introducir una contraseña';
    }
    return this.addUserForm.get('password')?.hasError('minLength')
      ? 'La contraseña debe tener más de 6 carácteres'
      : '';
  }

  submitUser() {
    this.formValue = this.addUserForm.value;
  }

  submitForm() {
    if (this.addUserForm.valid) {
      this.userService
        .register(this.addUserForm.value)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    }
  }
}
