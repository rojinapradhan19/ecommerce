import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { YourCardService } from 'src/app/Services/card.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  activeSideBar:boolean=true;

  cartCount?:number;
  constructor(private data :YourCardService, private checkAuth: AuthService) { }

  ngOnInit(){
    this.data.curentCart.subscribe(cardCount=>this.cartCount = cardCount);
  }
changeSideBarState(){
  this.activeSideBar= !this.activeSideBar;
}
logout(){
  localStorage.clear();
  this.checkAuth.changeAuth(false);
}
}
