import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isValid?:boolean;
userName:any = '';
  constructor(private checkAuth: AuthService) { }

  ngOnInit(): void {
    this.checkAuth.curentAut.subscribe((auth: boolean | undefined) => this.isValid=auth);
    this.checkValid();
  }
  checkValid(){
    let localData = localStorage.getItem('VALID');
    if(localStorage.getItem("VALID")){
      this.checkAuth.changeAuth(true);
    }
  }
}
