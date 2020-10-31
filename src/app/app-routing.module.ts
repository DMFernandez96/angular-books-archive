import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookshopLibrosComponent } from './bookshop-libros/bookshop-libros.component';
import { BookshopSucursalesComponent } from './bookshop-sucursales/bookshop-sucursales.component';

const routes: Routes = [
  { path: '',redirectTo: 'libros',pathMatch: 'full' },
  { path: 'libros', component: BookshopLibrosComponent },
  { path: 'sucursales', component: BookshopSucursalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
