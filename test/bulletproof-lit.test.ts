import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { BulletproofLit } from '../src/bulletproof-lit.js';
import '../src/bulletproof-lit.js';

describe('BulletproofLit', () => {
  let element: BulletproofLit;
  beforeEach(async () => {
    element = await fixture(html`<bulletproof-lit></bulletproof-lit>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
