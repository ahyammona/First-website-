import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';



const routes: Routes = [
  { 
    path: '', redirectTo: '/home', pathMatch: 'full' 
  },
  {
    path:'home',
  component:HomeComponent,
 },
  {
    path:'services',
    component: ServicesComponent
  },
  {
    path:'gallery',
    component: GalleryComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
