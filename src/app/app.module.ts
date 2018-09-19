import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { AgmCoreModule } from '@agm/core';
import { RestaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    RestaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATfNJUK0pyUQJQU2tl_SFX7wwN8LA6BFc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
