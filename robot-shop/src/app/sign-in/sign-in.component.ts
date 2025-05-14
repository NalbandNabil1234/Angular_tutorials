import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
email: string = ''
password: string = ''
msg: string = ''


constructor(private router: Router, public auth : AuthService){
  
}

onLogin(){
  const auth = this.auth.authenticate(this.email, this.password)
  if(auth){
    this.msg = 'successfully logged in'
    this.router.navigate(['/catalog'])
    this.auth.onSignIn()
  } else{
    this.msg = 'login failed'
  }
}



}
