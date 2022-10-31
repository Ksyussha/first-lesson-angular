export class Product {
  id: string
  title: string
  price:number
  spec: any
  picture: string
  constructor(id: string = '', title: string ='', price:number = 0, spec: any = {}, picture:string='https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/w_1920,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg') {
    this.id = id
    this.title = title
    this.price = price
    this.spec = spec
    this.picture = picture
  }
};
