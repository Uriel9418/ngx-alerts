import { Component, OnInit } from '@angular/core'
import { NgxAlertsService } from '@ngx-plus/ngx-alerts'

@Component({
  selector: 'demo-alerts',
  template: `<ngx-form [config]="formConfig" [item]="item" (action)="handleAction($event)"> </ngx-form>
`,
})
export class DemoAlertsComponent implements OnInit {
  public formConfig: any = {}
  public item: any = {
    title: 'Alert Title',
    text: 'Alert Message',
  }

  constructor(private alerts: NgxAlertsService) {}

  ngOnInit() {
    this.formConfig = {
      title: 'Alerts',
      icon: 'fa fa-comment',
      fields: {
        title: {
          type: 'input',
          label: 'Title',
        },
        text: {
          type: 'input',
          label: 'Message',
        },
      },
      buttons: [
        {
          label: 'Success',
          type: 'button',
          classNames: 'btn-block btn-success',
          click: { type: 'success' },
        },
        {
          label: 'Error',
          type: 'button',
          classNames: 'btn-block btn-danger',
          click: { type: 'error' },
        },
        {
          label: 'Warning',
          type: 'button',
          classNames: 'btn-block btn-warning',
          click: { type: 'warning' },
        },
        {
          label: 'Info',
          type: 'button',
          classNames: 'btn-block btn-info',
          click: { type: 'info' },
        },
        {
          label: 'Question',
          type: 'button',
          classNames: 'btn-block btn-primary',
          click: { type: 'question' },
        },
      ],
    }
  }

  handleAction(event) {
    switch (event.type) {
      case 'success':
        return this.alerts.alertSuccess(event.payload)
      case 'error':
        return this.alerts.alertError(event.payload)
      case 'warning':
        return this.alerts.alertWarning(event.payload)
      case 'info':
        return this.alerts.alertInfo(event.payload)
      case 'question':
        return this.alerts.alertQuestion(event.payload)
      default: {
        return console.log('$event', event)
      }
    }
  }
}
