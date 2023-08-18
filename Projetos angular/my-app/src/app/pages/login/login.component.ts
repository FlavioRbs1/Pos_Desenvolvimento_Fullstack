import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { autorizadoGuard } from 'src/app/guards/autorizado.guard';
import { UserService } from 'src/app/service/user.service';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(50),Validators.email])
    ],
    password: ['', Validators.required]
  });
  email = this.addressForm.controls['email'];
  password = this.addressForm.controls['password']
  constructor(
    private autorizacaoService:AutorizacaoService,
    private service: UserService
  ){}

  getErrorEmailMessage(){
    if (this.email.hasError('required')) {
      return ' O email é obrigatório'
    }
    'Você deve inserir um e-mail válido'
    return this.email.hasError('email')? 'Você deve inserir um e-mail válido' : '';
  }
  
  getErrorPasswordMessage(){
    if (this.password.hasError('required')) {
      return 'O email é obrigatorio :)'
    }
    return '';
  }
 

  loginClick(){
    if (this.autorizacaoService.obterLoginStatus())
      this.autorizacaoService.deslogar();
    else
      this.autorizacaoService.autorizar();
  }
  onSubmit(): void {
    if (this.autorizacaoService.obterLoginStatus())
      this.autorizacaoService.deslogar();
    else{
      this.service.login({user:'sdfsd'}).subscribe({
        next:(response)=>{
          console.log(response)
          this.autorizacaoService.autorizar();
        },
        error:(erro:any) =>{
          console.log("Ocorreu um erro")
        }
      })
      //this.autorizacaoService.autorizar();

    }
  }
}
