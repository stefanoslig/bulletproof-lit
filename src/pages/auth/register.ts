import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('bpl-register')
export class BplRegister extends LitElement {
  override render() {
    return html`register placeholder`;
  }

  static styles = css`
    :host {
      @unocss-placeholder;
    }
  `;
}
