import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSource = new BehaviorSubject(false);
  curentAut = this.authSource.asObservable();
  constructor() { }
  changeAuth(authState:boolean){
    this.authSource.next(authState)

  }

}
