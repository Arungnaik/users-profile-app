import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    HeaderComponent,
    HomeComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgbModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
