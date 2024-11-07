import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';

import {
  FormControlMixin,
  patternValidator,
  requiredValidator,
} from '@open-wc/form-control';
import { ifDefined } from 'lit/directives/if-defined.js';

export type InputType =
  | 'email'
  | 'hidden'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

@customElement('bpl-input')
export class BplInput extends FormControlMixin(LitElement) {
  static formControlValidator = [requiredValidator, patternValidator];

  @property({ type: Boolean, reflect: true })
  public required = false;

  @property({ type: String, reflect: true })
  public type: InputType = 'text';

  @property()
  public value = '';

  @property({ type: String, reflect: true })
  public placeholder = '';

  @property({ type: String, reflect: true })
  public pattern?: string;

  @state()
  public validationMessage = '';

  @query('input')
  public validationTarget?: HTMLInputElement;

  protected override render(): TemplateResult {
    return html` <label
        class="block text-sm font-medium text-gray-700"
        for="input"
        ><slot></slot
      ></label>
      <input
        id="input"
        type="text"
        .required="${live(this.required)}"
        .type="${live(this.type)}"
        .value="${live(this.value)}"
        placeholder="${this.placeholder}"
        @input="${this.#onChange}"
        pattern=${ifDefined(this.pattern)}
        aria-describedby="error-text"
        aria-required="${this.required}"
        aria-describedby="${ifDefined(this.validationMessage)}"
        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      <span class="text-sm font-semibold text-red-500" id="error-text"
        >${this.validationMessage}</span
      >`;
  }

  public override validationMessageCallback(message: string): void {
    this.validationMessage = message;
  }

  protected override updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
  }

  #onChange(event: Event & { target: HTMLInputElement }): void {
    this.value = event.target.value;
  }

  static styles = css`
    @unocss-placeholder;
  `;
}
