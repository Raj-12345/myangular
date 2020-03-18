import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs'
import{CookieService} from 'ngx-cookie-service'
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

 

  constructor(private http: HttpClient,private cookie:CookieService) { }
// user related operation
  checkUser(user):Observable<any>{
   
    return  this.http.post('http://localhost:3000/users/login',user);
  }

  getUsers():Observable<any>{
 
    return  this.http.get('http://localhost:3000/users/get');
  }
  getUsersById(_id):Observable<any>{
 
    return  this.http.get('http://localhost:3000/users/get/'+_id);
  }


  deleteUsers(_id):Observable<any>{
    return  this.http.delete("http://localhost:3000/users/delete/"+_id);
  }
 
  storeUsers(user):Observable<any>{
    return  this.http.post('http://localhost:3000/users/register',user);
  } 
  
  updateUsers(_id,user):Observable<any>{
    return  this.http.patch('http://localhost:3000/users/update/'+_id,user);
  } 




///product related operation
  getProducts():Observable<any>{
    return  this.http.get('http://localhost:3000/products/get');
  }
  storeProducts(product):Observable<any>{
    return  this.http.post('http://localhost:3000/products/store/'+this.cookie.get('_id'),product);
  }
  deleteProducts(_id):Observable<any>{
    console.log('delete hona arha h');
    return  this.http.delete("http://localhost:3000/products/delete/"+_id);
  }
  getProductsById(_id):Observable<any>{
 
    return  this.http.get('http://localhost:3000/products/get/'+_id);
  }
  
  updateProducts(_id,product):Observable<any>{
    return  this.http.patch('http://localhost:3000/products/update/'+_id,product);
  } 
}

