import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LayoutComponent } from '../ui/layout/layout.component'

import { DemoComponent } from './demo/demo.component'
import { InstallationComponent } from './installation/installation.component'
import { UsageComponent } from './usage/usage.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      headerItems: [
        { name: 'Demo', link: ['/'] },
        { name: 'Installation', link: ['/', 'installation'] },
        { name: 'Usage', link: ['/', 'usage'] },
      ]
    },
    children: [
      { path: '', component: DemoComponent },
      { path: 'installation', component: InstallationComponent },
      { path: 'usage', component: UsageComponent },
    ],
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
