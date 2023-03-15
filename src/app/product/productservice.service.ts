import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }



// http request view all products

viewAllProducts(){
  return this.http.get('http://localhost:3000/products')
}
addproduct(newproduct:any){
  return this.http.post("http://localhost:3000/products",newproduct)

}




}
