import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@/features/auth/components/auth-layout.js';

@customElement('bpl-login')
export class BplLogin extends LitElement {
  override render() {
    return html`<bpl-auth-layout title="Log in to your account"
      >login placeholder</bpl-auth-layout
    >`;
  }

  static styles = css`
    :host {
      @unocss-placeholder;
    }
  `;
}
