import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { GamesComponent } from './views/games/games.component';
import { InformaticaComponent } from './views/informatica/informatica.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { AcessoriosComponent } from './views/acessorios/acessorios.component';
import { ContatosComponent } from './views/contatos/contatos.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { ComunicationComponent } from './components/header/comunication/comunication.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { BodyComponent } from './components/body/body.component';
import { OfertasComponent } from './components/body/ofertas/ofertas.component';
import { CardsComponent } from './components/cards/cards.component';
import { DestaquesComponent } from './components/body/destaques/destaques.component';
import { EmailComponent } from './components/body/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    GamesComponent,
    InformaticaComponent,
    CelularesComponent,
    AcessoriosComponent,
    ContatosComponent,
    FooterComponent,
    MenuComponent,
    ComunicationComponent,
    LogoComponent,
    BodyComponent,
    OfertasComponent,
    CardsComponent,
    DestaquesComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
