import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLinksComponent } from './menu-links/menu-links.component';

// Pages
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { EducacaoComponent } from './pages/educacao/educacao.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    MenuComponent,
    MenuLinksComponent,
    AboutMeComponent,
    EducacaoComponent,
    PortifolioComponent,
    ContatoComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, AvatarComponent, MenuComponent]
})
export class AppModule { }
