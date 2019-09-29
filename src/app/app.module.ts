import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AuthService } from "./shared/services/auth.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
<<<<<<< HEAD
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
=======
import * as $ from 'jquery';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
>>>>>>> 3439556677f9dce5f15db014c74c88020bd7636d

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
=======
    AngularFontAwesomeModule
>>>>>>> 3439556677f9dce5f15db014c74c88020bd7636d
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
