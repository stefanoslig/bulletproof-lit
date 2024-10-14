import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('button-primary')
export class ButtonPrimary extends LitElement {
  @property({ type: String }) size = 'default';
  @property({ type: Boolean }) isLoading = false;
  @property({ type: String }) label = 'Click Me!';

  render() {
    return html`<button
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 bg-primary text-primary-foreground shadow hover:bg-primary/90"
    >
      ${!this.isLoading &&
      html`<span class="mr-2"><slot name="icon"></slot></span>`}
      <span class="mx-2">${this.label}</span>
    </button>`;
  }

  static styles = css`
    :host {
      @unocss-placeholder;
    }
  `;
}
