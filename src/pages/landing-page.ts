import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '../components/ui/button/button-primary.js';
import logo from '../assets/open-wc-logo.svg';

@customElement('landing-page')
export class LandingPage extends LitElement {
  @property({ type: String }) header = 'My app';

  static styles = css`
    @unocss-placeholder;
  `;

  render() {
    return html`
      <div flex h-screen items-center bg-white>
        <div mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16>
          <h2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl>
            <span block>Bulletproof React</span>
          </h2>
          <img loading="lazy" src="${logo}" alt="lit" />
          <p>Showcasing Best Practices For Building React Applications</p>
          <div mt-8 flex justify-center>
            <div inline-flex rounded-md shadow>
              <button-primary .label=${'Get started'}> </button-primary>
            </div>
            <div ml-3 inline-flex>
              <a
                href="https://github.com/alan2207/bulletproof-react"
                target="_blank"
                rel="noreferrer"
              >
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
