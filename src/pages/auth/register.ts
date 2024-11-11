import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '@/features/auth/components/auth-layout.js';
import '@/components/ui/form/input.js';
import '@/components/ui/button/button.js';
import { formValues } from '@open-wc/form-helpers';
import { Router } from '@vaadin/router';
import {
  register,
  RegisterCredentialsDTO,
} from '@/features/auth/api/register.js';

@customElement('bpl-register')
export class BplRegister extends LitElement {
  @query('#form')
  form!: HTMLFormElement;

  override render() {
    return html`<bpl-auth-layout title="Log in to your account">
      <form id="form" @submit=${this.formSubmit} novalidate>
        <bpl-input name="email" type="email" ?required=${true}
          >Email Address</bpl-input
        >
        <bpl-input name="password" type="password" required>Password</bpl-input>
        <div class="mt-2">
          <bpl-button @click=${this.formSubmit} type="submit">
            Log in
          </bpl-button>
        </div>
      </form>
      <div class="mt-2 flex items-center justify-end">
        <div class="text-sm">
          <a
            href="/auth/register"
            class="font-medium text-blue-600 hover:text-blue-500"
          >
            Register
          </a>
        </div>
      </div>
    </bpl-auth-layout>`;
  }

  async formSubmit(e: SubmitEvent) {
    e.preventDefault();
    await register(formValues(this.form) as RegisterCredentialsDTO);
    Router.go('/');
  }

  static styles = css`
    @unocss-placeholder;
  `;
}
