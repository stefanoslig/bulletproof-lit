import { html, TemplateResult } from 'lit';
import '../src/bulletproof-lit.js';

export default {
  title: 'BulletproofLit',
  component: 'bulletproof-lit',
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<void> = () => html` <bulletproof-lit></bulletproof-lit> `;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
