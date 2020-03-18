import { Injectable } from '@angular/core';
import {CanActivate} from   '@angular/router' 
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router'
import{ToastrService} from 'ngx-toastr'
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
  {

  constructor( private cookie:CookieService,private router:Router,private toastr :ToastrService) { }
canActivate()
{
   if(this.cookie.get('flag'))
   {
     return true;
   }
   else
   {
          
    this.router.navigateByUrl('/login');
this.toastr.warning('Alert!','Please Login First');
     return false;


   }
}


}
