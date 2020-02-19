import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule,Routes } from '@angular/router';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
   declarations: [
      AppComponent,
      NewComponent,
      ProfileComponent,
      ProductAlertsComponent,
      ProductDetailsComponent,
      PatientDetailsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatIconModule,
      // RouterModule.forRoot([
      //    { path: '', component: NewComponent },
      //    { path: 'products/:productId', component: ProductDetailsComponent },
      //  ])
         ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
