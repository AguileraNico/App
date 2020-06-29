import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../Shared/page-not-found/page-not-found.component';
import { LoggedService } from './logged/logged.service';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'admin',
    loadChildren: () => import('../Modules/Admin/admin.module').then(mod => mod.AdminModule),
    canActivate: [LoggedService]
  },
  {
    path: 'home',
    loadChildren: () => import('../Modules/Home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'results',
    loadChildren: () => import('../Modules/Results/results.module').then(mod => mod.ResultsModule)
  },
  {
    path: 'liga',
    loadChildren: () => import('../Modules/Liga/liga.module').then(mod => mod.LigaModule),
    canActivate: [LoggedService]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
