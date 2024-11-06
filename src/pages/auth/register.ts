import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@/features/auth/components/auth-layout.js';

@customElement('bpl-register')
export class BplRegister extends LitElement {
  override render() {
    return html`<bpl-auth-layout title="Register your account"
      >register placeholder</bpl-auth-layout
    >`;
  }

  static styles = css`
    :host {
      @unocss-placeholder;
    }
  `;
}
