import { Component, OnInit } from '@angular/core'
import { NgxAlertsService } from '../../../../../../libs/ngx-alerts'

@Component({
  selector: 'demo-notify',
  template: `<ngx-form [config]="formConfig" [item]="item" (action)="handleAction($event)"> </ngx-form>
`,
})
export class DemoNotifyComponent implements OnInit {
  public formConfig: any = {}
  public item: any = {
    title: 'Notify Title',
    body: 'Notify Body',
  }

  constructor(private alerts: NgxAlertsService) {}

  ngOnInit() {
    this.formConfig = {
      title: 'Notifys',
      icon: 'fa fa-comment',
      fields: {
        title: {
          type: 'input',
          label: 'Title',
        },
        body: {
          type: 'input',
          label: 'Body',
        },
      },
      buttons: [
        {
          label: 'default',
          type: 'button',
          classNames: 'btn-block btn-secondary',
          click: { type: 'default' },
        },
        {
          label: 'success',
          type: 'button',
          classNames: 'btn-block btn-success',
          click: { type: 'success' },
        },
        {
          label: 'info',
          type: 'button',
          classNames: 'btn-block btn-info',
          click: { type: 'info' },
        },
        {
          label: 'wait',
          type: 'button',
          classNames: 'btn-block btn-primary',
          click: { type: 'wait' },
        },
        {
          label: 'warning',
          type: 'button',
          classNames: 'btn-block btn-warning',
          click: { type: 'warning' },
        },
        {
          label: 'error',
          type: 'button',
          classNames: 'btn-block btn-danger',
          click: { type: 'error' },
        },
        // {
        //   label: 'prompt',
        //   type: 'button',
        //   classNames: 'btn-block btn-secondary',
        //   click: { type: 'prompt' },
        // },
        // {
        //   label: 'confirm',
        //   type: 'button',
        //   classNames: 'btn-block btn-dark',
        //   click: { type: 'confirm' },
        // },
      ],
    }
  }

  handleAction(event) {
    const cfg = {
      body: event.payload.body,
      title: event.payload.title,
    }

    switch (event.type) {
      case 'default':
        return this.alerts.notifyDefault(cfg)
      case 'success':
        return this.alerts.notifySuccess(cfg)
      case 'error':
        return this.alerts.notifyError(cfg)
      case 'info':
        return this.alerts.notifyInfo(cfg)
      case 'warning':
        return this.alerts.notifyWarning(cfg)
      case 'wait':
        return this.alerts.notifyWait(cfg)
      // case 'prompt':
      //   const answerYes = (toastId, body) => {
      //     this.alerts.notifySuccess({ title: 'Yes', body })
      //     this.alerts.notifyDismiss(toastId)
      //   }
      //   const answerNo = (toastId, body) => {
      //     this.alerts.notifyError({ title: 'No', body })
      //     this.alerts.notifyDismiss(toastId)
      //   }
      //   const prompt = {
      //     buttons: [{ text: 'Yes', action: answerYes }, { text: 'No', action: answerNo }],
      //     placeholder: 'Do you want to dismiss this prompt?',
      //   }
      //   return this.alerts.notifyPrompt(Object.assign(cfg, prompt))
      // case 'confirm':
      //   const confirmYes = () => this.alerts.notifySuccess({ body: 'Yes' })
      //   const confirmNo = () => this.alerts.notifyError({ body: 'No' })
      //   const confirmLater = toastId => {
      //     this.alerts.notifyError({ body: 'Later' })
      //     this.alerts.notifyDismiss(toastId)
      //   }
      //   const confirmClose = toastId => {
      //     this.alerts.notifyError({ body: 'Close' })
      //     this.alerts.notifyDismiss(toastId)
      //   }
      //   const confirm = {
      //     closeOnClick: false,
      //     buttons: [
      //       { text: 'Yes', action: confirmYes, bold: true },
      //       { text: 'No', action: confirmNo },
      //       { text: 'Later', action: confirmLater },
      //       { text: 'Close', action: confirmClose, bold: true },
      //     ],
      //   }
      //   return this.alerts.notifyConfirm(Object.assign(cfg, confirm))
      default: {
        return console.log('unknown event', event)
      }
    }
  }
}
