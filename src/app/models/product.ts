export class Product {

    constructor(id:number, id_category:number, name: string, thumbnail:string, price:number) {
      this.id=id;
      this.id_category = id_category;
      this.name=name;
      this.thumbnail=thumbnail;
      this.price=price;
    }
  
    id:number;
    id_category: number;
    name: string;
    thumbnail:string;
    price:number;
  
}
  