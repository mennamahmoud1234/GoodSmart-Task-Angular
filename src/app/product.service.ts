
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7173/api/product'; //  Add-Product endpoint url 

  constructor(private httpClient: HttpClient) {}

  saveProduct(inputData :object) {
    return this.httpClient.post(this.apiUrl, inputData);
  }

  
}
