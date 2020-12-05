import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class YourCardService {

  private cartSource= new BehaviorSubject(0);
  curentCart = this.cartSource.asObservable();
  constructor() { }
  changeCart(addToCart:any){
    let newCart= this.cartSource['_value'] + addToCart;
    this.cartSource.next(newCart);
  }
}
