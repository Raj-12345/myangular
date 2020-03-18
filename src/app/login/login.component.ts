import { Component, OnInit } from '@angular/core';
import   {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import{MyserviceService} from '../services/myservice.service';
import{ToastrService} from 'ngx-toastr'
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {





login=new  FormGroup({

  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(5)])
 
 });

  constructor(private MyserviceServices:MyserviceService,private toaster:ToastrService,private router:Router,private cookie:CookieService)
     {}




loginData(login:any) {
  if(login.invalid==false)
{

var user={
   user_email:login.value.email,
   user_password:login.value.password

       }      

this.checkUser(user)
                     
}
else
{
 alert('please provide all  details');
}

                    }




//checking
  checkUser(user)
  {
  
    
    this.MyserviceServices.checkUser(user).subscribe((res)=>
        {   
        
         this.cookie.set('_id',res.data[0]._id);
         this.cookie.set('flag','true');
         this.cookie.set('user_name',res.data[0].user_name);
         this.cookie.set('user_email',res.data[0].user_email);
                     this.showToaster(res);    
        
         },(error)=>{
                
                      this.toaster.warning( error.error.message,error.error.status);
         }
         )

  }

  showToaster(res)
  {

               if(res.status=='success')
               {
             
        
                this.toaster.success(res.message,res.status);
                 this.router.navigateByUrl('/dash');
               }
              
   }
  


  ngOnInit(): void {
  }

}
