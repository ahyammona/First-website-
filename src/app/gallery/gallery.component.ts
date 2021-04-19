import { Component, OnInit } from '@angular/core';
declare var jQuery: any;


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    $(document).ready(function(){
      $('.next').on('click',function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();
       if(nextImg.length){
          currentImg.removeClass('active').css('z-index',-10);
          nextImg.addClass('active').css('z-index',10) 
        }
      })
    })
    $('.prev').on('click',function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
    
     if(prevImg.length){
        currentImg.removeClass('active').css('z-index',-10);
        prevImg.addClass('active').css('z-index',10)
      }
    })
  }
}
