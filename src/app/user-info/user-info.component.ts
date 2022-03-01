import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';


@Component({
  selector: 'da-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo: UserInfo | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.showUserInfo();
  }
  getUserInfo(){
    return this.http.get<UserInfo>("https://dog-adopt-e7baf-default-rtdb.firebaseio.com/myinfo.json");
  }

  showUserInfo(){
    this.getUserInfo().subscribe((data: UserInfo)=> {
      console.log(data);
      this.myInfo = data;
    })
  }
}
