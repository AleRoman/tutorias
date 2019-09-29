import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'publicaciones', component: PublicacionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
