import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'details',
    component: PokemonComponent
  },
  {
    path: 'details/:id',
    component: PokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
