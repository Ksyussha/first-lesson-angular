import { Component, OnInit } from '@angular/core';
import FirebaseMethods from 'src/utils/firebaseMethods';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [new Product()];
  constructor(private firebaseMethods: FirebaseMethods) {}

  async ngOnInit(): Promise<void> {
    const productsSnapshot = await this.firebaseMethods.getDocuments(
      'products'
    );
    const products: { id: string; title: any; price: any; spec: any; picture:any }[] = [];
    productsSnapshot.forEach((doc) => {
      const data = doc.data();
      products.push({
        id: doc.id,
        title: data['title'],
        price: data['price'],
        spec: data['spec'],
        picture: data['picture']
      });
    });
    this.products = products;
    // console.log(this.products);
    
  }
}
