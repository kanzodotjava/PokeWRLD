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
    this.newUsername = ''; 
    this.userInfo = this.userService.getUserInfo();
  }

  changePassword() {
    this.userService.changePassword(this.newPassword);
    this.newPassword = ''; 
    this.userInfo = this.userService.getUserInfo();
  }
   openPokedex() {
    this.router.navigate(['/pokemons']);
  }
}
