import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { NgxAlertsModule } from '@ngx-plus/ngx-alerts'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [
    BrowserModule,
    NgxAlertsModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
