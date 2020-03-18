import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookie:CookieService,private router:Router) { }



  logout()
  {
    this.cookie.deleteAll();
this.router.navigateByUrl('');
  }

  ngOnInit(): void {
  }

}
