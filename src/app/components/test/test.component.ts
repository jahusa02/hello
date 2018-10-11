import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { stringify } from '@angular/compiler/src/util';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name: string;
  isEdit: boolean;
  d: any;


  constructor() {
    this.test(document);
    this.test2(document);

  }

  ngOnInit() {

  }

  test(document){
    var js, id='lwx';
    if(document.getElementById(id)) return;
    js = document.createElement('script');
    js.id = id;
    js.src = "https://www.xing-share.com/plugins/login.js";
    document.getElementsByTagName('head')[0].appendChild(js);
  }

  test2(document){
    var js, id = 't';

    js = document.createElement('script');
    js.setAttribute('type', 'xing/login');
    js.id = id;


    document.getElementsByTagName('body')[0].appendChild(js);
    document.getElementById('t').innerHTML = "{\"consumer_key\": \"127a3a86d946b110a9ad\"}";

  }

  test3(document) {
    var js;
    js = document.createElement('script');
    js.src = "src/login.js";
    document.getElementsByTagName('head')[0].appendChild(js);
  }

  deleteCookies(){
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    console.log("deleted");
    window.location.replace("");
  }



}
