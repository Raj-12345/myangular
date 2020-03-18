import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import{MyserviceService} from '../../services/myservice.service';
import{ToastrService} from 'ngx-toastr'
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
flag:boolean=true;
user_name:String;
user_email:String;
user_password:String;
 _id:String;
 response:any;




  add=new  FormGroup({
    user_name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    user_email:new FormControl('',[Validators.required,Validators.email]),
    user_password:new FormControl('',[Validators.required,Validators.minLength(5)])
   
   });
 

    constructor(private formbulider:FormBuilder,private MyserviceServices:MyserviceService,private toaster:ToastrService,private router:Router,private activate:ActivatedRoute,private cookie:CookieService ) 
    { 
    
      console.log(' a raha h');
      this._id=this.activate.snapshot.params['id'];
      if( this._id ==undefined)
    {

       this.flag=true;
    }
    else
    {
      this.flag=false;
      this.MyserviceServices.getUsersById(this._id).subscribe((res)=>
      {   
                   
                  console.log(res);  
                  this.edit.patchValue({
                          'user_name':res.data[0].user_name,
                          'user_email':res.data[0].user_email,
                          'user_password':res.data[0].user_password

                  });
       },(error)=>{
        console.log(error);
       }
       )
    
     
    }




    }
       

    

      
    formstoreusers(add:any) {
  
       if(this.add.invalid==false)
    {
  
      var user={
      user_name:add.value.user_name,
      user_email:add.value.user_email,
      user_password:add.value.user_password
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
                                       
                            this.toaster.success(res.message,res.status);
                            this.router.navigateByUrl('/dash/users');
                           },(error)=>{
                            console.log(error);
                           })

                           }
                        
                        
                  
                  
                      


/////user update operation

edit=new  FormGroup({
  user_name:new FormControl('',[Validators.required,Validators.minLength(3)]),
  user_email:new FormControl('',[Validators.required,Validators.email]),
  user_password:new FormControl('',[Validators.required,Validators.minLength(5)])
 
 });





                        formupdateusers(edit:any) {
  
                        var user={
                                 'user_name':this.edit.get('user_name').value,
                                  'user_email':this.edit.get('user_email').value,
                                   'user_password':this.edit.get('user_password').value

                        };
                        
                       
                   this.updateUsers( this._id,user);
                       
                                            }
                   
                   
                                updateUsers =(_id,user)=> {
                                             this.MyserviceServices.updateUsers(_id,user).subscribe((res)=>
                                             {   
                                                          
                                              this.toaster.success(res.message,res.status);
                                              this.router.navigateByUrl('/dash/users');
                                              },(error)=>{
                                                this.toaster.warning(error.error.message,error.error.status);  
                                              }
                                              )
                                           
                                           }   
                   
                   
                                        
                                        
                                     
                              

    
      ngOnInit(): void {
      
        

  
    
    }
 
  
}
  
  