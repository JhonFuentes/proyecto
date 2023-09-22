import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './principal/header/header.component';
import { LeftsidebarComponent } from './principal/leftsidebar/leftsidebar.component';
import { FooterComponent } from './principal/footer/footer.component';
import { BodyComponent } from './principal/body/body.component';
import { HomeComponent } from './principal/leftsidebar/home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    PrincipalComponent,
    HeaderComponent,
    LeftsidebarComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
