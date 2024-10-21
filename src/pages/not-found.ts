import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/ui/button/button.js';
import { Router } from '@vaadin/router';

@customElement('bpl-not-found')
export class BplNotFound extends LitElement {
  override render() {
    return html`<div className="mt-52 flex flex-col items-center font-semibold">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <bpl-button
        @click=${() => Router.go('/')}
        .variant=${'primary'}
        .label=${'Go to home'}
      >
        <span name="icon" class="i-mdi-home text-orange-400"></span>
        Go to home
      </bpl-button>
    </div>`;
  }

  static styles = css`
    :host {
      @unocss-placeholder;
    }
  `;
}
