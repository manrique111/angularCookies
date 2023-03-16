import {Component, OnInit} from '@angular/core';
import {NgxEncryptCookieService} from "ngx-encrypt-cookie";

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit{

  cookieValue: any;
  cookieValueDecript1: any;
  cookieValueDecript2: any;

  constructor(private cookie: NgxEncryptCookieService) {
  }

  ngOnInit() {
    this.generar();
  }

  generar() {
    const key = this.cookie.generateKey();
    this.cookie.set("test","test value",true, key);
    const otherKey = this.cookie.generateKey("256/32","hello all");

    this.cookie.set("customKey","test value without encryption",true, otherKey);

    const val = this.cookie.get("test",true, key);   // decrypted value
    const val_1 = this.cookie.get("customKey",false)  //encrypted value

    this.cookieValue = this.cookie.getAll();
    //returns all cookies - here it will return encrypted values also if cookie is having

    this.cookieValueDecript1 = this.cookie.getAll(true, key);
    this.cookieValueDecript2 = this.cookie.getAll(true, otherKey);
    // returns all values - here if a cookie is having encrypted value it will decrypt.
    this.cookie.delete("test");

    this.cookie.deleteAll("/");
    this.cookie.deleteAll();
  }


}
