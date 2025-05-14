import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  signIn: boolean = true

  users: { email: string, password: string }[] = [
    {
      "email": 'nalbandn5@gmail.com',
      "password": '123'
    }
  ]

  authenticate(email:string, password:string){
  return this.users.find((user) => user.email === email && user.password === password)
  }

  onSignIn(){
    this.signIn = false
  }
  onSignOut(){
    this.signIn = true
  }

}
