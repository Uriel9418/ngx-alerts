import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { NgxAlertsModule } from '../../../../../libs/ngx-alerts'

import { UiModule } from '../ui/ui.module'
import { PagesRoutingModule } from './pages-routing.module'

import { DemoComponent } from './demo/demo.component'
import { InstallationComponent } from './installation/installation.component'
import { UsageComponent } from './usage/usage.component'
import { DemoAlertsComponent } from './demo/demo-alerts.component'
import { DemoNotifyComponent } from './demo/demo-notify.component'

@NgModule({
  imports: [CommonModule, FormsModule, NgxAlertsModule, UiModule, PagesRoutingModule],
  declarations: [DemoComponent, DemoAlertsComponent, DemoNotifyComponent, InstallationComponent, UsageComponent],
})
export class PagesModule {}
