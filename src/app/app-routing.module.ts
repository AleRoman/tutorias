import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';


import { SignInComponent } from '../app/components/sign-in/sign-in.component';
import { SignUpComponent } from '../app/components/sign-up/sign-up.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';


import { AuthGuard } from '../app/shared/guard/auth.guard';
import { SecureInnerPagesGuard } from '../app/shared/guard/secure-inner-pages.guard.ts.guard';
import { ColaborativoComponent } from './pages/colaborativo/colaborativo.component';

// Include route guard in routes array
// Import canActivate guard services
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'publicaciones', component: PublicacionesComponent },
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'colaborativo', component: ColaborativoComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
