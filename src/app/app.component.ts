import { LoginService } from './modules/login/service/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esg-adventure';
  nomeUsuario: string;
  isUsuarioLogado$ = this.loginService.verificaUsuarioLogado();

  constructor(
    private loginService: LoginService
  ){
    this.nomeUsuario = this.loginService.obterUsuario?.nome;
  }

  sair(){
    this.loginService.deslogar();
  }
}
