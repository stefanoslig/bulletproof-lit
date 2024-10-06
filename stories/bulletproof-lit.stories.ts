import { html, TemplateResult } from 'lit';
import '../src/bulletproof-lit.js';

export default {
  title: 'BulletproofLit',
  component: 'bulletproof-lit',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  header,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <bulletproof-lit
    style="--bulletproof-lit-background-color: ${backgroundColor}"
    .header=${header}
  ></bulletproof-lit>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
