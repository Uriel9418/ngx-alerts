import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NgxAlertsService } from './services'
import { NgxAlertTemplatesComponent } from './components'
// import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify'
import { ToastyModule } from 'ng2-toasty'

const components = [NgxAlertTemplatesComponent]

@NgModule({
  imports: [
    CommonModule,
    // SnotifyModule,
    ToastyModule.forRoot(),
  ],
  declarations: [...components],
  exports: [...components],
})
export class NgxAlertsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxAlertsModule,
      providers: [
        // { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
        // SnotifyService,
        NgxAlertsService,
      ],
    }
  }
}
