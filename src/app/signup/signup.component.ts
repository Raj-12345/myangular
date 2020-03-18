import { Component, OnInit } from '@angular/core';
import   {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MyserviceService} from '../services/myservice.service'
import{ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signup=new  FormGroup({
    user_name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    user_email:new FormControl('',[Validators.required,Validators.email]),
    user_password:new FormControl('',[Validators.required,Validators.minLength(5)])
   
   });
  
    constructor(private formbulider:FormBuilder,private MyserviceServices:MyserviceService,private toaster:ToastrService,private router:Router) 
    { }
       
   
              
    
    formstoreusers(signup:any) {
   
       if(this.signup.invalid==false)
     {
  
      var user={
      user_name:signup.value.user_name,
      user_email:signup.value.user_email,
      user_password:signup.value.user_password
      }

this.storeUsers(user);
    }
    else
    {
    
      alert('please provide all  details');
    }
     
                         }


             storeUsers =(user)=> {
                          this.MyserviceServices.storeUsers(user).subscribe((res)=>
                          {   
                                       
                                       this.showToaster(res);    
                           },(error)=>{
                            console.log(error);
                           }
                           )
                        
                        }   


                        showToaster(res)
                        {
                          console.log(res);
                                     if(res.status=='success')
                                     {
                                      this.toaster.success(res.message,res.status);
                                       this.router.navigateByUrl('/login');
                                     }
                                     else
                                     {
                                     this.toaster.warning(res.message,res.status);
                                     }
                        }
                  
                  
    
    
      ngOnInit(): void {
    
      
        
      
    
       }
    
    
    
    }
 
  