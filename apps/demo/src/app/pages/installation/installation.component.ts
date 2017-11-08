import { Component } from '@angular/core'

@Component({
  selector: 'installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss'],
})
export class InstallationComponent {
  installCode = 'npm install @ngx-plus/ngx-alerts --save'

  importCode = `import { NgxAlertsModule } from '@ngx-plus/ngx-alerts'

@NgModule({
  imports: [
    NgxAlertsModule.forRoot()
  ]
})`
}
