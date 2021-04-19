import { Component, EventEmitter } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = "  "

  ngOnInit(){
    const ham = document.querySelector(".ham");
    const links = document.querySelectorAll('.menu-btn li')
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    ham!.addEventListener('click',() =>{
        ham?.classList.toggle('open');
        menuBtn!.classList.toggle('open');
        })
        menuOpen=true
        links.forEach(link =>{
          link.addEventListener('click',() =>{
           ham!.classList.toggle('open')
           menuBtn!.classList.toggle('open')
           menuOpen=false
          })
        })
  }
}
