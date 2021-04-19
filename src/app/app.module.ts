import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ServicesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
