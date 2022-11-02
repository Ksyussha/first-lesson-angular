export class Product {
  id: string
  title: string
  price:number
  spec: any
  picture: string
  constructor(id: string = '', title: string ='', price:number = 0, spec: any = {}, picture:string='') {
    this.id = id
    this.title = title
    this.price = price
    this.spec = spec
    this.picture = picture
  }
};
