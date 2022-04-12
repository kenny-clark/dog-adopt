import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.servide';

@Component({
  selector: 'da-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    console.log("button clicked");
    console.log(data.value);

    this.auth.signup(data.value.email, data.value.password).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
    data.reset();
  }
}
