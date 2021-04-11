import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSearchComponent } from './pages/app-search/app-search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/search' },
  { path: 'search', component: AppSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
