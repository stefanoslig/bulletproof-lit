import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '../components/ui/button/button.js';
import { Router } from '@vaadin/router';
import logo from '@/assets/logo.svg';

@customElement('bpl-landing')
export class BplLanding extends LitElement {
  @property({ type: String }) header = 'My app';

  render() {
    return html`
      <div flex items-center bg-white>
        <div mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16>
          <h2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl>
            <span block>Bulletproof</span>
          </h2>
          <img loading="lazy" src="${logo}" alt="lit" />
          <p>Showcasing Best Practices For Building Lit Applications</p>
          <div mt-8 flex justify-center>
            <div inline-flex rounded-md shadow>
              <bpl-button
                @click=${() => Router.go('/auth/login')}
                .icon=${'home'}
                .variant=${'primary'}
                .label=${'Get started'}
              >
                <span name="icon" class="i-mdi-home text-orange-400"></span>
                Get started
              </bpl-button>
            </div>
            <div ml-3 inline-flex>
              <a
                href="https://github.com/stefanoslig/bulletproof-lit"
                target="_blank"
                rel="noreferrer"
              >
                <bpl-button
                  .icon=${'github'}
                  .variant=${'outline'}
                  .label=${'Github repo'}
                >
                  <span name="icon" class="i-mdi-github text-orange-400"></span>
                  Github repo
                </bpl-button>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    @unocss-placeholder;
  `;
}
