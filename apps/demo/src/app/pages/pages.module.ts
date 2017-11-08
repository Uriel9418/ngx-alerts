import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxAlertsModule } from '@ngx-plus/ngx-alerts'
import { NgxFormsModule } from '@ngx-plus/ngx-forms'

import { UiModule } from '../ui/ui.module'

import { PagesRoutingModule } from './pages-routing.module'

import { DemoComponent } from './demo/demo.component'
import { InstallationComponent } from './installation/installation.component'
import { UsageComponent } from './usage/usage.component'
import { DemoAlertsComponent } from './demo/demo-alerts.component'
import { DemoNotifyComponent } from './demo/demo-notify.component'

@NgModule({
  imports: [CommonModule, NgxAlertsModule, NgxFormsModule, UiModule, PagesRoutingModule],
  declarations: [DemoComponent, DemoAlertsComponent, DemoNotifyComponent, InstallationComponent, UsageComponent],
})
export class PagesModule {}
