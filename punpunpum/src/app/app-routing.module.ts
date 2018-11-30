import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const app_routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule',},
  { path: 'power', loadChildren: './power/power.module#PowerPageModule',},
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }