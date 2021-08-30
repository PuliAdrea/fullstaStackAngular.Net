import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiauthService } from 'src/app/services/apiauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User;
  public email :string;
  public pasword: string;

  constructor(
    public apiAuth: ApiauthService
    ) { }

  ngOnInit(): void {
    
  }

  login(){
    this.user ={
      name: this.email,
      password: this.pasword
    }
    this.apiAuth.login(this.user).subscribe(response =>{
      console.log(response)
    });
  }

}
