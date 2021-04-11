import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppNotFoundComponent } from './pages/app-not-found/app-not-found.component';
import { AppSearchComponent } from './pages/app-search/app-search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/search' },
  { path: 'search', component: AppSearchComponent },
  { path: '**', component: AppNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
