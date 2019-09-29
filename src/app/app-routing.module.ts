import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SignInComponent } from '../app/components/sign-in/sign-in.component';
import { SignUpComponent } from '../app/components/sign-up/sign-up.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';


import { AuthGuard } from '../app/shared/guard/auth.guard';
import { SecureInnerPagesGuard } from '../app/shared/guard/secure-inner-pages.guard.ts.guard';

// Include route guard in routes array
// Import canActivate guard services
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
