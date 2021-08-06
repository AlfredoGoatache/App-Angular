import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './secciones/hero/hero.component';
import { FeaturesComponent } from './secciones/features/features.component';
import { DetailsComponent } from './secciones/details/details.component';
import { GalleryComponent } from './secciones/gallery/gallery.component';
import { TestimonialsComponent } from './secciones/testimonials/testimonials.component';
import { PricingComponent } from './secciones/pricing/pricing.component';
import { FaqComponent } from './secciones/faq/faq.component';
import { ContactComponent } from './secciones/contact/contact.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeaturesComponent,
    DetailsComponent,
    GalleryComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
