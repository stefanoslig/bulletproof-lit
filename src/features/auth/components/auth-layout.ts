import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import logo from '@/assets/logo.svg';

@customElement('bpl-auth-layout')
export class BplAuthLayout extends LitElement {
  @property({ type: String })
  public title = '';

  public override render() {
    return html`<div
      class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <div class="flex justify-center">
          <a
            @click=${() => Router.go('/')}
            class="flex items-center text-white"
          >
            <img loading="lazy" src="${logo}" alt="lit" />
          </a>
        </div>
        <h2 class="mt-3 text-center text-3xl font-extrabold text-gray-900">
          ${this.title}
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <!-- nested login/register routes -->
          <slot></slot>
        </div>
      </div>
    </div>`;
  }

  static styles = css`
    :host {
      @unocss-placeholder;
    }
  `;
}
