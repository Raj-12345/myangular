import { Component, OnInit, Output } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import{MyserviceService} from '../../services/myservice.service';
import{ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

constructor( private MyserviceServices:MyserviceService,private toaster:ToastrService,private router:Router)
{

}

products:any;

      

getProducts =()=> {
  this.MyserviceServices.getProducts().subscribe((res)=>
  {   

    this.products=res; 
    console.log(this.products);
   })
  

    }
    delete(_id:any)
    {
      this.deleteProducts(_id);
      console.log(' yaha a ya h 1');
    }

deleteProducts=(_id)=>
    {
      this.MyserviceServices.deleteProducts(_id).subscribe((res)=>
      {
        console.log(res);  
        console.log('yaha a ya 2');
               this .showToaster(res);      
      }
      ,(error)=>
      {
        console.log('yaha a ya 2 error');
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

      this.MyserviceServices.getProducts().subscribe((res)=>
      {   
 
        if(res.status=="success")
        {
       
          this.products=res;
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
this.router.navigateByUrl('/dash/addproducts/'+_id);
}
  


ngOnInit(): void {
  
this.getProducts();
              }
           
  

}

