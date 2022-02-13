import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly APIUrl = 'https://group2t2009e.azurewebsites.net/api/';
  constructor(private httpClient: HttpClient) { }
  getProductList(): Observable<any[]> {
    return this.httpClient.get<any>(this.APIUrl + 'Product');
  }
  getCategoryList(): Observable<any[]> {
    return this.httpClient.get<any>(this.APIUrl + 'Category');
  }
}
