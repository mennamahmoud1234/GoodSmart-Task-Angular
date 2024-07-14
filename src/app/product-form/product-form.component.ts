import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  constructor(private productService :ProductService)
  {

  }

  Name!: string
  Price !:  number
  ExpiryDate! :Date
  
  saveProduct()
  {
    var inputData={
      Name:this.Name,
      Price:this.Price,
     ExpiryDate: this.ExpiryDate

    }
    this.productService.saveProduct(inputData).subscribe({

      next:(res:any)=>{
       console.log(res,'response')
      },
      error:(err:any)=>{
       console.log(err,'errors')
      }

    });

  }
}

