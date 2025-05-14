import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../sign-in/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})
export class SiteHeaderComponent {

  users: {email: string, password: string}[] = []
  signIn: boolean = true
  

  constructor(private route: Router, public authService: AuthService){
    this.users = authService.users
    this.signIn = authService.signIn
  }

  onSignOut(){
    this.authService.onSignOut()
    this.route.navigate(["/home"])
  }
  
  
  

 


}
