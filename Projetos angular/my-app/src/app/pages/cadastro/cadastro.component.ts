import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  user:User = new User();
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    firstName: [null, Validators.compose([
      Validators.required, Validators.minLength(3), Validators.maxLength(70)])
    ],
    email: [null, Validators.required],
    phone: [null, Validators.required],
    password: [null, Validators.required],
    cpf: [null, Validators.required],
    cnpj: [null, Validators.required]
  });

  onSubmit(): void {
    this.user.id = '1';
    if (this.addressForm.controls['firstName'].value)
    this.user.firstName = this.addressForm.controls['firstName'].value;
    if (this.addressForm.controls['email'].value)
    this.user.email = this.addressForm.controls['email'].value;
    if (this.addressForm.controls['phone'].value)
    this.user.phone = this.addressForm.controls['phone'].value;
    if (this.addressForm.controls['password'].value)
    this.user.password = this.addressForm.controls['password'].value;
    alert('Usuário cadastrado com sucesso!');
    localStorage.setItem('user',JSON.stringify(this.user));
  }
}
