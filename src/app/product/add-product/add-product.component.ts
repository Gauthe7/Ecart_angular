import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private fb: FormBuilder,private ps:ProductserviceService,private route:Router) { }
  addProductForm = this.fb.group({
    id: ['1'],
    productName: [''],
    categoryId: [''],
    Description: [''],
    price: [''],
    Available: [''],
    productImage: [''],
    Rating: [''],
    Reviews: [''],
    Warranty: ['']
  })
  ngOnInit(): void {

  }
  addnewproduct() {
    let newproductdata = {

      id: this.addProductForm.value.id,
      productName: this.addProductForm.value.productName,
      categoryId: this.addProductForm.value.categoryId,
      Description: this.addProductForm.value.Description,
      price: this.addProductForm.value.price,
      Available: this.addProductForm.value.Available,
      productImage: this.addProductForm.value.productImage,
      Rating: this.addProductForm.value.Rating,
      Reviews: this.addProductForm.value.Reviews,
      Warranty: this.addProductForm.value.Warranty

    }
    this.ps.addproduct(newproductdata).subscribe((item:any)=>{
      alert("Product added successfuly")
      this.route.navigateByUrl('product')
    })
  }

}
