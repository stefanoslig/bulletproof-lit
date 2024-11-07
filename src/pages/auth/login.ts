import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import '@/features/auth/components/auth-layout.js';
import '@/components/ui/form/input';
import { formValues } from '@open-wc/form-helpers';

@customElement('bpl-login')
export class BplLogin extends LitElement {
  @query('#form')
  form!: HTMLFormElement;

  override render() {
    return html`<bpl-auth-layout title="Log in to your account">
      <form id="form" @submit=${this.formSubmit}>
        <bpl-input name="email" type="email" ?required=${true}
          >Email Address</bpl-input
        >
        <bpl-input name="password" type="password" required>Password</bpl-input>
        <button type="submit">submit</button>
      </form>
      <div class="mt-2 flex items-center justify-end">
        <div class="text-sm">
          <a
            @click=${() => Router.go('/auth/register')}
            class="font-medium text-blue-600 hover:text-blue-500"
          >
            Register
          </a>
        </div>
      </div>
    </bpl-auth-layout>`;
  }

  formSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log(formValues(this.form));
  }

  static styles = css`
    @unocss-placeholder;
  `;
}
