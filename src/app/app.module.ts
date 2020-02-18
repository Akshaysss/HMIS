import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule,Routes } from '@angular/router';

@NgModule({
   declarations: [
      AppComponent,
      NewComponent,
      ProfileComponent,
      ProductAlertsComponent,
      ProductDetailsComponent,
      
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot([
         { path: '', component: NewComponent },
         { path: 'products/:productId', component: ProductDetailsComponent },
       ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
