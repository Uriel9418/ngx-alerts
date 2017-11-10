import { Component } from '@angular/core'
import { NgxAlertsService } from '../../../../../../libs/ngx-alerts'

@Component({
  selector: 'demo-alerts',
  template: `
    <div class="card">
      <div class="card-header"><i class="fa fa-comment"></i> Alerts</div>
      <div class="card-body">
        <div class="form-group">
          <label class="form-control-label" for="title">Title</label>
          <input class="form-control" [(ngModel)]="item.title" name="input" placeholder="Title" aria-describedby="Title" type="text">
        </div>
        <div class="form-group">
          <label class="form-control-label" for="text">Message</label>
          <input class="form-control" [(ngModel)]="item.text" name="input" placeholder="Message" aria-describedby="Message" type="text">
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
export class DemoAlertsComponent {
  public item: any = {
    title: 'Alert Title',
    text: 'Alert Message',
  }
  public buttons: any[] = [
    {
      label: 'Success',
      classNames: 'btn btn-block btn-success',
      type: 'success',
    },
    {
      label: 'Error',
      classNames: 'btn btn-block btn-danger',
      type: 'error',
    },
    {
      label: 'Warning',
      classNames: 'btn btn-block btn-warning',
      type: 'warning',
    },
    {
      label: 'Info',
      classNames: 'btn btn-block btn-info',
      type: 'info',
    },
    {
      label: 'Question',
      classNames: 'btn btn-block btn-primary',
      type: 'question',
    },
  ]

  constructor(private alerts: NgxAlertsService) {}

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
