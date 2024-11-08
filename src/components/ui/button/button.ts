import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('bpl-button')
export class BplButton extends LitElement {
  static override readonly shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ reflect: true, type: Boolean }) disabled = false;

  @property({ reflect: true }) type?: 'button' | 'submit' | 'reset';

  @property() label?: string;

  @property() size: 'sm' | 'md' | 'lg' = 'md';

  @property({ reflect: true }) variant: 'primary' | 'secondary' | 'outline' =
    'primary';

  override render() {
    return html`
      <button
        class="${classMap(
          this.#computedClasses,
        )} cursor-pointer inline-flex items-center rounded-md text-sm  disabled:pointer-events-none disabled:opacity-50"
        aria-label="${ifDefined(this.label)}"
        part="button"
        type="${ifDefined(this.type)}"
        ?disabled="${this.disabled}"
      >
        <span aria-hidden="true">
          <slot id="icon" part="icon" name="icon"></slot>
        </span>
        <span aria-hidden=${String(!!this.label) as 'true' | 'false'}
          ><slot id="text"></slot
        ></span>
      </button>
    `;
  }

  get #computedClasses() {
    return {
      'bg-primary text-primary-foreground shadow hover:bg-primary/90':
        this.variant === 'primary',
      'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80':
        this.variant === 'secondary',
      'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground':
        this.variant === 'outline',
      'h-9 px-4 py-2': this.size === 'md',
      'h-8 rounded-md px-3 text-xs': this.size === 'sm',
      'h-10 rounded-md px-8': this.size === 'lg',
    };
  }

  static styles = css`
    @unocss-placeholder;
  `;
}
