import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLinksComponent } from './menu-links/menu-links.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    MenuComponent,
    MenuLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, AvatarComponent, MenuComponent]
})
export class AppModule { }
