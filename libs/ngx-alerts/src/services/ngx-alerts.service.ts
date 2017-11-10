import { Injectable } from '@angular/core'
import { assign, noop } from 'lodash'
import swal, { SweetAlertOptions } from 'sweetalert2'

// import { SnotifyToastConfig, SnotifyService } from 'ng-snotify'
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty'

export interface NgxAlertsNotification extends ToastOptions {
  body: string
  title: string
}

@Injectable()
export class NgxAlertsService {
  constructor(private notifyService: ToastyService, private defaultConfig: ToastyConfig) {}

  private defaultNotify(type: string, config: NgxAlertsNotification) {
    // return this.notifyService[type](config.body, config.title || null, {
    //   timeout: config.timeout || 3000,
    //   showProgressBar: config.showProgressBar || true,
    //   closeOnClick: config.closeOnClick || true,
    //   pauseOnHover: config.pauseOnHover || true,
    //   buttons: config.buttons,
    //   placeholder: config.placeholder,
    //   html: config.html || null,
    //   position: config.position,
    // })
    const options: ToastOptions = {
      title: config.title || '',
      msg: config.body || '',
      showClose: config.showClose || true,
      timeout: config.timeout || 5000,
      theme: config.theme || 'bootstrap',
    }
    switch (type) {
      case 'default':
        return this.notifyService.default(options)
      case 'info':
        return this.notifyService.info(options)
      case 'success':
        return this.notifyService.success(options)
      case 'wait':
        return this.notifyService.wait(options)
      case 'error':
        return this.notifyService.error(options)
      case 'warning':
        return this.notifyService.warning(options)
      default:
        return console.log('unknown event: ', type)
    }
  }

  public notifyDefault(config: NgxAlertsNotification) {
    this.defaultNotify('default', config)
  }

  public notifySuccess(config: NgxAlertsNotification) {
    this.defaultNotify('success', config)
  }

  public notifyInfo(config: NgxAlertsNotification) {
    this.defaultNotify('info', config)
  }

  public notifyWarning(config: NgxAlertsNotification) {
    this.defaultNotify('warning', config)
  }

  public notifyError(config: NgxAlertsNotification) {
    this.defaultNotify('error', config)
  }

  public notifyWait(config: NgxAlertsNotification) {
    this.defaultNotify('wait', config)
  }

  // public notifyPrompt(config: NgxAlertsNotification) {
  //   this.defaultNotify('prompt', config)
  // }
  //
  // public notifyConfirm(config: NgxAlertsNotification) {
  //   this.defaultNotify('confirm', config)
  // }

  // public notifyDismiss(toastId) {
  //   this.notifyService.remove(toastId)
  // }

  alert(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions: any = {
      type: options.type || null,
      title: options.title || null,
      text: options.text || null,
      buttonsStyling: options.buttonsStyling || false,
      confirmButtonClass: options.confirmButtonClass || 'btn btn-lg btn-secondary',
      animation: options.animation || true,
      customClass: options.customClass || '',
    }

    if (closeCb !== noop) {
      defaultOptions.showCancelButton = options.showCancelButton || true
      defaultOptions.cancelButtonClass = options.cancelButtonClass || 'btn btn-lg btn-secondary'
    }

    return swal(assign(defaultOptions, options)).then(res => successCb(res), dismiss => closeCb(dismiss))
  }

  alertSuccess(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'success',
      confirmButtonClass: 'btn btn-lg btn-success',
    }
    return this.alert(assign(defaultOptions, options), successCb, closeCb)
  }

  alertWarning(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'warning',
      confirmButtonClass: 'btn btn-lg btn-warning',
    }
    return this.alert(assign(defaultOptions, options), successCb, closeCb)
  }

  alertError(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'error',
      confirmButtonClass: 'btn btn-lg btn-danger',
    }
    return this.alert(assign(defaultOptions, options), successCb, closeCb)
  }

  alertInfo(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'info',
      confirmButtonClass: 'btn btn-lg btn-info',
    }
    return this.alert(assign(defaultOptions, options), successCb, closeCb)
  }

  alertQuestion(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'question',
      confirmButtonClass: 'btn btn-lg btn-primary',
    }
    return this.alert(assign(defaultOptions, options), successCb, closeCb)
  }
}
