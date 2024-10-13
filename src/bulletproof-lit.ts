import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { routes } from './routes.js';
import { Router } from '@vaadin/router';

@customElement('bulletproof-lit')
export class BulletproofLit extends LitElement {
  @query('#outlet') private outlet!: HTMLElement;

  firstUpdated() {
    const router = new Router(this.outlet);
    router.setRoutes(routes);
  }

  render() {
    return html` <main id="outlet"></main> `;
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;
}
