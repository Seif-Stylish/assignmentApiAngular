import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './views/users/users.component';
import { HeaderComponent } from './layouts/header/header.component';
import { UserService } from './services/user.service';
import { SingleUserComponent } from './views/single-user/single-user.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { OurFormComponent } from './views/our-form/our-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    SingleUserComponent,
    OurFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
