import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";


const routes: Routes = [
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
