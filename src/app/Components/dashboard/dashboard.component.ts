import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userInfo: any;
  newUsername: string = '';
  newPassword: string = '';

  constructor(private userService: UserService,
  private router: Router) { }

  ngOnInit(): void {
    this.userInfo = this.userService.getUserInfo();
  }

  changeUsername() {
    this.userService.changeUsername(this.newUsername);
    this.newUsername = ''; // Limpar o campo de entrada
    this.userInfo = this.userService.getUserInfo(); // Atualizar as informações do usuário exibidas
  }

  changePassword() {
    this.userService.changePassword(this.newPassword);
    this.newPassword = ''; // Limpar o campo de entrada
    this.userInfo = this.userService.getUserInfo(); // Atualizar as informações do usuário exibidas
  }
   openPokedex() {
    this.router.navigate(['/pokemons']);
  }
}
