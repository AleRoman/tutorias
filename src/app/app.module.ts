import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AuthService } from './shared/services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import * as $ from 'jquery';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { ColaborativoComponent } from './pages/colaborativo/colaborativo.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PublicacionesComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ColaborativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
