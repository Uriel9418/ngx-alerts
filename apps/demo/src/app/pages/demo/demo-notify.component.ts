import { Component } from '@angular/core'
import { NgxAlertsService } from '../../../../../../libs/ngx-alerts'

@Component({
  selector: 'demo-notify',
  template: `
    <div class="card">
      <div class="card-header"><i class="fa fa-comment"></i> Notifys</div>
      <div class="card-body">
        <div class="form-group">
          <label class="form-control-label" for="title">Title</label>
          <input class="form-control" [(ngModel)]="item.title" name="input" placeholder="Title" aria-describedby="Title" type="text">
        </div>
        <div class="form-group">
          <label class="form-control-label" for="body">Body</label>
          <input class="form-control" [(ngModel)]="item.body" name="input" placeholder="Body" aria-describedby="Body" type="text">
        </div>
      </div>
      <div class="card-footer">
        <button *ngFor="let button of buttons"
                [class]="button.classNames"
                (click)="handleAction({ type: button.type, payload: item })">{{button.label}}
        </button>
      </div>
    </div>
`,
})
export class DemoNotifyComponent {
  public item: any = {
    title: 'Notify Title',
    body: 'Notify Body',
  }

  public buttons: any[] = [
    {
      label: 'simple',
      classNames: 'btn btn-block btn-primary',
      type: 'simple',
    },
    {
      label: 'success',
      classNames: 'btn btn-block btn-success',
      type: 'success',
    },
    {
      label: 'info',
      classNames: 'btn btn-block btn-info',
      type: 'info',
    },
    {
      label: 'warning',
      classNames: 'btn btn-block btn-warning',
      type: 'warning',
    },
    {
      label: 'error',
      classNames: 'btn btn-block btn-danger',
      type: 'error',
    },
    {
      label: 'prompt',
      classNames: 'btn btn-block btn-secondary',
      type: 'prompt',
    },
    {
      label: 'confirm',
      classNames: 'btn btn-block btn-dark',
      type: 'confirm',
    },
  ]

  constructor(private alerts: NgxAlertsService) {}

  handleAction(event) {
    switch (event.type) {
      case 'simple':
        return this.alerts.notifySimple(this.item)
      case 'success':
        return this.alerts.notifySuccess(this.item)
      case 'error':
        return this.alerts.notifyError(this.item)
      case 'info':
        return this.alerts.notifyInfo(this.item)
      case 'warning':
        return this.alerts.notifyWarning(this.item)
      case 'prompt':
        const answerYes = (toastId, body) => {
          this.alerts.notifySuccess({ title: 'Yes', body })
          this.alerts.notifyDismiss(toastId)
        }
        const answerNo = (toastId, body) => {
          this.alerts.notifyError({ title: 'No', body })
          this.alerts.notifyDismiss(toastId)
        }
        const prompt = {
          buttons: [{ text: 'Yes', action: answerYes }, { text: 'No', action: answerNo }],
          placeholder: 'Do you want to dismiss this prompt?',
        }
        return this.alerts.notifyPrompt(Object.assign(this.item, prompt))
      case 'confirm':
        const confirmYes = () => this.alerts.notifySuccess({ body: 'Yes' })
        const confirmNo = () => this.alerts.notifyError({ body: 'No' })
        const confirmLater = toastId => {
          this.alerts.notifyError({ body: 'Later' })
          this.alerts.notifyDismiss(toastId)
        }
        const confirmClose = toastId => {
          this.alerts.notifyError({ body: 'Close' })
          this.alerts.notifyDismiss(toastId)
        }
        const confirm = {
          closeOnClick: false,
          buttons: [
            { text: 'Yes', action: confirmYes, bold: true },
            { text: 'No', action: confirmNo },
            { text: 'Later', action: confirmLater },
            { text: 'Close', action: confirmClose, bold: true },
          ],
        }
        return this.alerts.notifyConfirm(Object.assign(this.item, confirm))
      default: {
        return console.log('Unknown event', event)
      }
    }
  }
}
