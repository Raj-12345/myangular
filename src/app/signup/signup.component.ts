import { Component, OnInit } from '@angular/core';
import   {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

signup:FormGroup;
firstname:String="";
lastname:String="";
email:String="";
password:String="";


  constructor( private formbulider:FormBuilder,private router : Router)
   {
   
       this.signup=formbulider.group({
            firstname:['',[Validators.required,Validators.minLength(3)]],
            lastname:['',[Validators.required,Validators.minLength(3)]],
            email:['',[Validators.required,Validators.email]],
             password:['',Validators.required],

       });

    };


get firstName(){return this.signup.get('firstname');}
get lastName(){return this.signup.get('lastname');}
get Email(){return this.signup.get('email');}
get Password(){return this.signup.get('password');}

postData(signup:any) {

  console.warn(signup);
  this.firstname=signup.value.firstname;
  this.lastname=signup.value.lastname;
  this.email=signup.value.email;
  this.password=signup.value.password;

  this.router.navigateByUrl('/login')
                     }


  ngOnInit(): void {
  }


}
