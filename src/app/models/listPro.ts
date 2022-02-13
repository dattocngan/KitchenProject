import { Category } from "./category";
import { Product } from "./product";

export class ListPro {

    constructor(category: Category,products: Product[]) {
      this.category = category;
      this.products = products;
    }
  
    category: Category;
    products: Product[];
  }
  