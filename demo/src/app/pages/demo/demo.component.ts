import { Component, OnInit } from '@angular/core'
import { NgxAlertsService } from '@ngx-plus/ngx-alerts'

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {

  public formConfig: any = {}
  public item: any = {}

  constructor(private alerts: NgxAlertsService) { }

  ngOnInit() {
    this.formConfig = {
      title: 'Ngx-Forms',
      icon: 'fa fa-tasks',
      fields: {
        input: 'input',
        password: 'password',
        email: 'email',
        date: 'date',
        textarea: 'textarea',
        wysiwyg: 'wysiwyg',
        select: {
          type: 'select',
          options: [
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
          ],
        },
      },
      buttons: [{
        label: 'Save',
        type: 'submit',
        classNames: 'btn-primary',
        click: { type: 'submit' },
      }, {
        label: 'Cancel',
        type: 'button',
        classNames: 'btn-secondary',
        click: { type: 'cancel' },
      }],
    }
  }

  handleAction(event) {
    switch (event.type) {
      case 'submit':
        return this.alerts.toastSuccess('Save!', JSON.stringify(event.payload))
      case 'cancel':
        return this.alerts.toastError('Cancel!', JSON.stringify(event.payload))
      case 'success':
        return this.alerts.alertSuccess({ title: 'Success!' })
      case 'error':
        return this.alerts.alertError({ title: 'Error!' })
      case 'warning':
        return this.alerts.alertWarning({ title: 'Warning!' })
      case 'info':
        return this.alerts.alertInfo({ title: 'Info!' })
      case 'question':
        return this.alerts.alertQuestion({ title: 'Question!' })
      default: {
        return console.log('$event', event)
      }
    }
  }
}
