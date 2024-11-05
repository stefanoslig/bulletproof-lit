import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';

import { FormControlMixin, requiredValidator } from '@open-wc/form-control';

@customElement('bpl-input')
class BplInput extends FormControlMixin(LitElement) {
  static formControlValidators = [requiredValidator];

  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: String })
  value = '';

  render() {
    return html`
      <label for="input"><slot></slot></label>
      <input
        id="input"
        .value="${live(this.value)}"
        @input="${this.#onInput}"
      />
    `;
  }

  updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
  }

  #onInput({ target }: { target: HTMLInputElement }): void {
    this.value = target.value;
  }

  static styles = css`
    :host {
      @unocss-placeholder;
    }
  `;
}
