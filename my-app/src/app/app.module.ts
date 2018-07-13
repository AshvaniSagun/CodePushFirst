import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AppComponent } from './app.component';
import { APIComponent } from './component/API/API.component';
import { homeComponent } from './component/home/home.component';
import { NavMenuComponent } from './component/nav-menue/navmenu.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,APIComponent,homeComponent,NavMenuComponent,NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: homeComponent},     
      { path: 'API',component: APIComponent},
      { path: '**', component: NotFoundComponent }      
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
