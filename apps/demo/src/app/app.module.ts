import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { NgxFormsModule } from '@ngx-plus/ngx-forms'

import { NgxAlertsModule } from '../../../../libs/ngx-alerts'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [BrowserModule, NgxAlertsModule.forRoot(), NgxFormsModule.forRoot(), AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
