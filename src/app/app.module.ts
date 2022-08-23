import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroComponent } from './components/sub-components/intro/intro.component';
import { ProfileComponent } from './components/sub-components/profile/profile.component';

@NgModule({
  declarations: [AppComponent, MainComponent, IntroComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
