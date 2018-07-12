import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AppComponent } from './app.component';
import { APIComponent } from './component/API/API.component';
import { homeComponent } from './component/layout/home/home.component';
import { NavMenuComponent } from './component/nav-menue/navmenu.component';
@NgModule({
  declarations: [
    AppComponent,APIComponent,homeComponent,NavMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: homeComponent},     
      { path: 'API',component: APIComponent}      
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
