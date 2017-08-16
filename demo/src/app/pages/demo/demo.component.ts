import { Component } from '@angular/core'
import { } from '@ngx-plus/ngx-alerts'

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent {


  constructor() { }

  handleAction(event) {
    switch (event.type) {

      default: {
        return console.log('$event', event)
      }
    }
  }
}
