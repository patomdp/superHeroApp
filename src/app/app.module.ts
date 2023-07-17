import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Components
import { ReactiveFormsModule } from '@angular/forms';

// Custom Components
import { AddEditHeroComponent } from './components/add-edit-hero/add-edit-hero.component';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { ConfirmationMessageComponent } from './components/shared/confirmation-message/confirmation-message.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEditHeroComponent,
    ListHeroesComponent,
    ConfirmationMessageComponent,
    NavbarComponent,
    HeroCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
