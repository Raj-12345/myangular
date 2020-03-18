import { Component, OnInit } from '@angular/core';
import{MyserviceService} from '../../services/myservice.service';
import{ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private MyserviceServices:MyserviceService,private toaster:ToastrService,private router:Router,private cookie:CookieService) 
  {

   }

users:any;

  getUsers =()=> {
    this.MyserviceServices.getUsers().subscribe((res)=>
    {   
  console.log('database data'+res);
      this.users=res; 
     
     },(error)=>{console.log(error)})
    
  
      }


      // user deleted opeartion
      delete(_id:any)
      {
        console.log('ya h _id '+_id);
        this.deleteUsers(_id);
      }
      


      deleteUsers=(_id)=>
    {
      this.MyserviceServices.deleteUsers(_id).subscribe((res)=>
      {
                         this.showToaster(res);
      }
      ,(error)=>
      {
        
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

                  this.MyserviceServices.getUsers().subscribe((res)=>
                  {    
                            if(res.status=="success")
                            {
                 this.users=res;
                            } 
                          
                              })
                  
                 }
                 else
                 {
                 this.toaster.warning(res.message,res.status);
                 }
                 
    }



edit(_id)
{
console.log(_id);
this.router.navigateByUrl('/dash/addusers/'+_id);
}




  ngOnInit(): void {
    this.getUsers();
  }

}
