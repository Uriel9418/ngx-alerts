import { Component, OnInit } from '@angular/core'
import { NgxAlertsService } from '@ngx-plus/ngx-alerts'

@Component({
  selector: 'demo-toasts',
  template: `<ngx-form [config]="formConfig" [item]="item" (action)="handleAction($event)"> </ngx-form>
`,
})
export class DemoToastsComponent implements OnInit {

  public formConfig: any = {}
  public item: any = {
    title: 'Toast Title',
    message: 'Toast Message',
  }

  constructor(private alerts: NgxAlertsService) { }

  ngOnInit() {
    this.formConfig = {
      title: 'Toasts',
      icon: 'fa fa-comment',
      fields: {
        title: {
          type: 'input',
          label: 'Title',
        },
        message: {
          type: 'input',
          label: 'Message',
        },
      },
      buttons: [{
        label: 'success',
        type: 'button',
        classNames: 'btn-block btn-success',
        click: { type: 'success' },
      }, {
        label: 'error',
        type: 'button',
        classNames: 'btn-block btn-danger',
        click: { type: 'error' },
      }, {
        label: 'warning',
        type: 'button',
        classNames: 'btn-block btn-warning',
        click: { type: 'warning' },
      }, {
        label: 'info',
        type: 'button',
        classNames: 'btn-block btn-info',
        click: { type: 'info' },
      }, {
        label: 'warning',
        type: 'button',
        classNames: 'btn-block btn-primary',
        click: { type: 'warning' },
      }, {
        label: 'default',
        type: 'button',
        classNames: 'btn-block btn-default',
        click: { type: 'default' },
      }],
    }
  }

  handleAction(event) {
    switch (event.type) {
      case 'default':
        return this.alerts.toastDefault(event.payload.title, event.payload.message)
      case 'error':
        return this.alerts.toastError(event.payload.title, event.payload.message)
      case 'info':
        return this.alerts.toastInfo(event.payload.title, event.payload.message)
      case 'success':
        return this.alerts.toastSuccess(event.payload.title, event.payload.message)
      case 'wait':
        return this.alerts.toastWait(event.payload.title, event.payload.message)
      case 'warning':
        return this.alerts.toastWarning(event.payload.title, event.payload.message)
      default: {
        return console.log('$event', event)
      }
    }
  }
}
