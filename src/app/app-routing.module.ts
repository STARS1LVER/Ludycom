import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ludycom',
    loadChildren: () => import('./ludycom-prueba/ludycom-prueba.module').then( modulo => modulo.LudycomPruebaModule )
  },

  {
    path: '**',
    redirectTo: 'ludycom'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
