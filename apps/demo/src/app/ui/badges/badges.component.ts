import { Component } from '@angular/core'

@Component({
  selector: 'badges',
  template: `
    <a *ngFor="let badge of badges" [href]="badge.link">
      <img [src]="badge.img" />
    </a>
  `,
  styles: [
    `
    a {
      text-decoration: none;
    }
  `,
  ],
})
export class BadgesComponent {
  public badges = [
    {
      link: 'https://ngx-plus-slack.now.sh/',
      img: 'https://ngx-plus-slack.now.sh/badge.svg',
    },
    {
      link: 'https://www.npmjs.com/package/@ngx-plus/ngx-alerts',
      img: 'https://img.shields.io/npm/v/@ngx-plus/ngx-alerts.svg?maxAge=2592000?style=plastic',
    },
    {
      link: 'https://ngx-plus.github.io/ngx-alerts/',
      img: 'https://img.shields.io/badge/demo-online-61B5D9.svg',
    },
    {
      link: 'https://travis-ci.org/ngx-plus/ngx-alerts',
      img: 'https://travis-ci.org/ngx-plus/ngx-alerts.svg?branch=master',
    },
    {
      link: 'https://coveralls.io/github/ngx-plus/ngx-alerts?branch=master',
      img: 'https://coveralls.io/repos/github/ngx-plus/ngx-alerts/badge.svg?branch=master',
    },
    {
      link: '#contributors',
      img: 'https://img.shields.io/badge/contributors-2-orange.svg',
    },
  ]
}
