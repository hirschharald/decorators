import "./styles.css";
import { Log, Log2, Log3, Logger, Required } from "./decorators";

@Logger("*******")
class Person {
  
  name: string;
  @Required
  age: number;
  constructor(n: string, a?: number) {
    this.name = n;
    this.age = a ? (this.age = a) : 0;
  }
}
const p = new Person('Heinz')

class Product {
  private _price: number;
  @Log
  title: string;
  constructor(p: number, t: string) {
    this._price = p;
    this.title = t;
  }
  @Log2
  set price(p) {
    this._price = p;
  }
  @Log2
  getPriceWithTax(@Log3 tax: number) {
    return this._price * (1 + tax);
  }
}
console.log("****", new Person());

const pr = new Product(42, "test");
pr.price = 50;
const newP = pr.getPriceWithTax(0.2);
console.log("####", newP);
