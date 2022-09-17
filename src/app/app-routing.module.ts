import { NgModule } from '@angular/core';

import { HomeComponent } from './views/home/home.component';
import { GamesComponent } from './views/games/games.component';
import { InformaticaComponent } from './views/informatica/informatica.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { AcessoriosComponent } from './views/acessorios/acessorios.component';
import { ContatosComponent } from './views/contatos/contatos.component';

import { LoginComponent } from './views/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"games",component: GamesComponent},
  {path:"informatica",component: InformaticaComponent},
  {path:"celulares",component: CelularesComponent},
  {path:"acessorios",component: AcessoriosComponent},
  {path:"contatos",component: ContatosComponent},
  {path:"login",component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
