import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainTopbarComponent } from './main-topbar/main-topbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainModalComponent } from './main-modal/main-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSidebarComponent,
    MainTopbarComponent,
    MainContentComponent,
    MainFooterComponent,
    MainModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
