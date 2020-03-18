import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {




  constructor(private cookie:CookieService) { }


  user={
    _id:this.cookie.get('_id'),
    user_name:this.cookie.get('user_name'),
    user_email:this.cookie.get('user_email')

  }



  ngOnInit(): void {
  }

}
