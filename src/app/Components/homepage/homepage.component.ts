import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service'; // Importe o serviço de autenticação

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      // Redireciona para a próxima página após o login bem-sucedido
      this.router.navigate(['/dashboard']);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }
}
