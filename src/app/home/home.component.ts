import { Component,Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document:Document,private _route:Router) { }

  ngOnInit(): void {}
  clickWhatsapp(){
    this.document.location.href = 'https://wa.me/2348033474778'
    window.open(this.document.location.href,' ','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  }
}
