import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document:Document) { }

  ngOnInit(): void {
  }
 facebookLink(){
  this.document.location.href = 'https://www.facebook.com/sharer/sharer.php?u=www.sonyatconstruction.netlify.com&t=sonyatConstruction'
  window.open(this.document.location.href,' ','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  
 }
 whatsapp(){
  this.document.location.href = 'whatsapp:/share/whatsapp/share//send?text=<www.sonyatconstruction.netlify.com>'
  window.open(this.document.location.href,' ','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
 }
 twitter(){
   this.document.location.href ="https://twitter.com/share?url=<www.sonyatconstruction.netlify.com>&text=<sonyatConstruction>"
   window.open(this.document.location.href,' ','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
 }
 
}
