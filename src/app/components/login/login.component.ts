import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

import { Credenciais } from './../../models/credenciais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private toast: ToastrService,
    private service: AuthService,
    private route: Router) { }

    ngOnInit(): void { }

    logar() {
      this.service.authenticate(this.creds).subscribe(resposta => {
        this.service.succesfullLogin(resposta.headers.get('Authorization').substring(7));
        this.route.navigate([''])
      }, () => {
        this.toast.error('Usuário e/ou senha inválidos!');
      })
    }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }

}
