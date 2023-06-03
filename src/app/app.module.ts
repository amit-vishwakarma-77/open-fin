import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ScoreBarComponent } from './components/score-bar/score-bar.component';
import { CardContainerComponent } from './components/cards-container.component/cards-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScoreBarComponent,
    CardContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
