import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  // 👇 Ruta agregada para la página nueva
  {
    path: 'products',
    loadComponent: () => import('./products/products.page').then((m) => m.ProductsPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
