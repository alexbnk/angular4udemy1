import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NetworkComponent } from './network/network.component';
import { HostsComponent } from './hosts/hosts.component';
import { AlertComponent } from './alert/alert.component';
import { UserComponent } from './user/user.component';
import { RestorationComponent } from './restoration/restoration.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { HostComponent } from './hosts/host/host.component';
import { HostEditComponent } from './hosts/host-edit/host-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NetworkComponent,
    HostsComponent,
    AlertComponent,
    UserComponent,
    RestorationComponent,
    DetailsComponent,
    HeaderComponent,
    HostComponent,
    HostEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
