import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxAlertsModule } from '@ngx-plus/ngx-alerts'

import { UiModule } from '../ui/ui.module'

import { PagesRoutingModule } from './pages-routing.module'

import { DemoComponent } from './demo/demo.component'
import { InstallationComponent } from './installation/installation.component'
import { UsageComponent } from './usage/usage.component'

@NgModule({
  imports: [
    CommonModule,
    NgxAlertsModule,
    UiModule,
    PagesRoutingModule,
  ],
  declarations: [
    DemoComponent,
    InstallationComponent,
    UsageComponent,
  ],
})
export class PagesModule { }
