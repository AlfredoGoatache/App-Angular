import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './secciones/hero/hero.component';
import { FeaturesComponent } from './secciones/features/features.component';
import { GalleryComponent } from './secciones/gallery/gallery.component';
import { PricingComponent } from './secciones/pricing/pricing.component';
import { FaqComponent } from './secciones/faq/faq.component';
import { ContactComponent } from './secciones/contact/contact.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'App Features', component: FeaturesComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: 'F.A.Q', component: FaqComponent },
  { path: 'Contact Us', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
