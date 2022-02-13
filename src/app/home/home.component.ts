import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { ListPro } from '../models/listPro';
import { Product } from '../models/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: Product[] = [];
  categoryList: Category[] = [];
  proList : ListPro[] = [];
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(data =>{
      this.productList = data;
      this.productService.getCategoryList().subscribe(data =>{
        this.categoryList = data;
        this.getFullProduct();
      });
    });
    
  }
  getFullProduct(){
    this.categoryList.forEach(element => {
      let temp = {} as ListPro;
      temp.category = element;
      const search = this.productList.filter((data) => data.id_category === element.id);
      temp.products = search;
      this.proList.push(temp);
    });
  }
}
