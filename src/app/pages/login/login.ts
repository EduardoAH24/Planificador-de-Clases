import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  iniciar() {
    this.authService.login(this.email, this.password)
      .then(() => this.router.navigate(['/clases']))
      .catch(err => alert('Credenciales incorrectas'));
  }
}
