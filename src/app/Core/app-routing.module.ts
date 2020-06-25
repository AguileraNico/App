import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'admin',
    loadChildren: () => import('../Modules/Admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../Modules/Home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('../Modules/Resultados/resultados.module').then(mod => mod.ResultadosModule)
  },
  {
    path: 'liga',
    loadChildren: () => import('../Modules/Liga/liga.module').then(mod => mod.LigaModule)
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
