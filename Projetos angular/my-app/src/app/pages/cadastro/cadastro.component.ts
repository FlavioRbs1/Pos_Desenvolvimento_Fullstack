import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { GenericValidator } from 'src/app/comum/validador';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private service: UserService) { }
  user: User = new User();
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    name: [null, Validators.compose([
      Validators.required, Validators.minLength(3), Validators.maxLength(70)])
    ],
    email: [null, Validators.required],
    phone: [null, Validators.required],
    password: [null, Validators.required],
    cpf: [null, Validators.compose([
      Validators.required, GenericValidator.isvalidCpf()])

    ],
    cnpj: [null, Validators.required],
    dataNascimento: [null, Validators.required]
  });

  onSubmit(): void {
    this.user.id = '';
    if (this.addressForm.controls['name'].value)
      this.user.name = this.addressForm.controls['name'].value;
    if (this.addressForm.controls['email'].value)
      this.user.email = this.addressForm.controls['email'].value;
    if (this.addressForm.controls['phone'].value)
      this.user.phone = this.addressForm.controls['phone'].value;
    if (this.addressForm.controls['cpf'].value)
      this.user.cpf = this.addressForm.controls['cpf'].value;
    if (this.addressForm.controls['password'].value)
      this.user.password = this.addressForm.controls['password'].value;
    if (this.addressForm.controls['dataNascimento'].value)
      this.user.dataNascimento = this.addressForm.controls['dataNascimento'].value;
    //    alert('Usuário cadastrado com sucesso!');
    //    localStorage.setItem('user',JSON.stringify(this.user));

    console.log(this.user);
    this.service.addUsers(this.user).subscribe({
      next: (response) => {
        console.log(response)
        alert('Dado registrado com sucesso')
      },
      error: (erro: any) => {
        console.log(erro)
        alert('Ocorreu um erro')
      }
    })
  }
}
