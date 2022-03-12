import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './MyComponents/user/user.component';
import { BookComponent } from './MyComponents/book/book.component';
import { HeaderComponent } from './MyComponents/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
