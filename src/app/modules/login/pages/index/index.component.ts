import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  form!: FormGroup;
  loading = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      senha: new FormControl(null, [Validators.required])
    })
  }

  entrar(){
    if(!this.form.valid) return this.form.markAllAsTouched();
    const params = this.form.getRawValue();
    this.loading = true;
    this.loginService.login(params).subscribe({
      next: (data) => {
        this.loading = false;
        this.router.navigateByUrl('/home');
      },
      error: () => {
        this.loading = false;
      }
    })
  }
}
