import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
users: {email: string, password: string}[] = [
  {
    "email": 'nalbandn5@gmail.com',
    "password": '123'
  }
]
constructor(private router: Router){

}

onLogin(){
  const matchedUser = this.users.find((user) => user.email === this.email && user.password === this.password)
  if(matchedUser){
    this.msg = 'successfully logged in'
    this.router.navigate(['/catalog'])
  } else{
    this.msg = 'login failed'
  }
}
}
