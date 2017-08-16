import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToastyService, ToastyModule } from 'ng2-toasty'

import { NgxAlertsService } from './services'
import { NgxAlertTemplatesComponent } from './components'

const components = [
  NgxAlertTemplatesComponent
]

@NgModule({
  imports: [
    CommonModule,
    ToastyModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    ToastyModule,
  ]
})
export class NgxAlertsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxAlertsModule,
      providers: [
        NgxAlertsService,
        ToastyService,
      ]
    }
  }
}
