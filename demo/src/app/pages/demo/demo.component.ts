import { Component } from '@angular/core'

@Component({
  selector: 'demo',
  template: `
    <section>
      <ui-header></ui-header>
    </section>
    <section>
      <h2>Demo</h2>
      <p class="lead">
        Below are examples of what
        <a href="https://github.com/ngx-plus/ngx-alerts"><b><code>@ngx-plus/ngx-alerts</code></b></a> can do. Follow the steps on the <b><a routerLink="/installation">Installation</a></b> page to get started.
      </p>
    </section>
    <section>
      <div class="row">
        <div class="col-lg-6">
          <demo-notify></demo-notify>
        </div>
        <div class="col-lg-6">
          <demo-alerts></demo-alerts>
        </div>
      </div>
    </section>
  `,
})
export class DemoComponent { }
