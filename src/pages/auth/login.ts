import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('bpl-login')
export class BplLogin extends LitElement {
  override render() {
    return html`login placeholder`;
  }

  static styles = css`
    :host {
      @unocss-placeholder;
    }
  `;
}
