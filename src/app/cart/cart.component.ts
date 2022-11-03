import { Component, OnInit } from '@angular/core';
import FirebaseMethods from 'src/utils/firebaseMethods';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: any = null;
  constructor(private firebaseMethods: FirebaseMethods) {}

  async ngOnInit(): Promise<void> {
    const productsSnapshot = await this.firebaseMethods.getDocuments('cart');
    const products: {
      id: string;
      title: any;
      price: any;
      spec: any;
      picture: any;
      user_uid: string;
    }[] = [];
    productsSnapshot.forEach((doc) => {
      const data = doc.data();
      products.push({
        id: doc.id,
        title: data['title'],
        price: data['price'],
        spec: data['spec'],
        picture: data['picture'],
        user_uid:data['user_uid']
      });
    });
    this.products = products;
    // console.log(this.products);
  }

}
