import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { spy, assert, SinonSpy } from 'sinon';
import { Router } from '@vaadin/router';
import type { BulletproofLit } from '../src/bulletproof-lit.js';

import '../src/bulletproof-lit.js';

describe('BulletproofLit', () => {
  let element: BulletproofLit;
  let setRoutesSpy: SinonSpy;

  beforeEach(async () => {
    setRoutesSpy = spy(Router.prototype, 'setRoutes');
    element = await fixture(html`<bulletproof-lit></bulletproof-lit>`);
  });

  afterEach(() => {
    setRoutesSpy.restore();
  });

  it('renders a router outlet', () => {
    const outlet = element.shadowRoot!.querySelector('#outlet')!;
    expect(outlet).to.exist;
  });

  it('set the routes', () => {
    assert.calledOnce(setRoutesSpy);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
