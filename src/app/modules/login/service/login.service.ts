import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url;
  isUsuarioLogado$ = new BehaviorSubject<Boolean>(this.logado);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.url = `${environment.apiUrl}/auth`
  }

  login(params: Object){
    return this.http.post(`${this.url}/login`, params).pipe(
      map((data) => {
        sessionStorage.setItem('dadosUsuario', btoa(JSON.stringify(data)));
        this.isUsuarioLogado$.next(true);
        return data;
      })
    );
  }

  deslogar() {
    this.isUsuarioLogado$.next(false);
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  verificaUsuarioLogado(): Observable<any>{
    return this.isUsuarioLogado$.asObservable();
  }

  get jsonUsuario(): any{
    const usuarioJson = sessionStorage.getItem('dadosUsuario') ? sessionStorage.getItem('dadosUsuario') : "";
    return usuarioJson
  }

  get obterUsuario() {
    return this.jsonUsuario ? JSON.parse(atob(this.jsonUsuario)) : null;
  }

  get logado(): boolean {
    return sessionStorage.getItem('dadosUsuario') ? true : false;
  }

}
