import { Component, OnInit } from '@angular/core'; 
import FirebaseMethods from 'src/utils/firebaseMethods';
import { Product } from 'src/utils/product.model';

 
@Component({ 
  selector: 'app-home', 
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css'] 
}) 
export class HomeComponent implements OnInit { 
  products:Product[] = []
  constructor(private firebaseMethods: FirebaseMethods) { } 
 
  async ngOnInit(): Promise<void> { 
    const productsSnapshot = await this.firebaseMethods.getDocuments('products')
    productsSnapshot.forEach((doc) => {
      const data = doc.data()
      this.products.push({
          id:doc.id,
          title: data['title'],
          price:data['price'],
          spec: data['spec']
          
      })
    })
    console.log(this.products);
    
   } 
   
}