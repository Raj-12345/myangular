import { Component, OnInit, Input } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import{MyserviceService} from '../../services/myservice.service';
import{ToastrService} from 'ngx-toastr'
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  flag:boolean=true;
_id:String;
add=new  FormGroup({

  product_name:new FormControl('',[Validators.required,Validators.minLength(3)]),
  product_desc:new FormControl('',[Validators.required,Validators.minLength(3)])
 });


  constructor(private activate:ActivatedRoute,private MyserviceServices:MyserviceService,private toaster:ToastrService,private router:Router) 
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
    this.MyserviceServices.getProductsById(this._id).subscribe((res)=>
    {   
                 
                console.log(res);  
                this.edit.patchValue({
                        'product_name':res.data[0].product_name,
                        'product_desc':res.data[0].product_desc,
                        
                });
     },(error)=>{
      console.log(error);
     }
     )
  
   
    }

  }
     
 





formstoreproducts(add:any) {
  if(add.invalid==false)
{
  var product={
  
    product_name:add.value.product_name,
    product_desc:add.value.product_desc,
      }
 
 console.warn('store data..'+product);

this.storeProducts(product);


}
else
{
 alert('please provide all  products details');
}

       }
   


storeProducts =(product)=> {
        this.MyserviceServices.storeProducts(product).subscribe((res)=>
        {   
               
                   this.toaster.success(res.message,res.status);
                     this.router.navigateByUrl('/dash/products');  
         },(error)=>{

         this.toaster.warning(error.error.message,error.error.status);
         
         }
         )
      
      }            









      //user update opearation
      edit=new  FormGroup({
        product_name:new FormControl('',[Validators.required,Validators.minLength(3)]),
        product_desc:new FormControl('',[Validators.required,Validators.minLength(3)]),
       
       
       });

       formupdateproducts(edit:any) {
  
        var product={
                 'product_name':this.edit.get('product_name').value,
                  'product_desc':this.edit.get('product_desc').value,
                

        };
        
       
   this.productUsers( this._id,product);
       
                            }
   
   
                productUsers =(_id,product)=> {
                             this.MyserviceServices.updateProducts(_id,product).subscribe((res)=>
                             {   
                                          
                              this.toaster.success(res.message,res.status);
                              this.router.navigateByUrl('/dash/products');
                              },(error)=>{
                                this.toaster.warning(error.error.message,error.error.status);  
                              }
                              )
                           
                           }   
   
   
                        
                        
                     
              



  ngOnInit(): void {

                   }



}