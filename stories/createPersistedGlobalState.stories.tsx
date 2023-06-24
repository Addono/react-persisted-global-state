import React from 'react';
import { Meta, Story } from '@storybook/react';
import { createPersistedGlobalState } from '../src';

const useMyPersistedGlobalState = createPersistedGlobalState<string>(
  'my-key',
  'Hello, world!'
);

const MyComponent = () => {
  const [state, setState, clearState] = useMyPersistedGlobalState();

  return (
    <input type="text" value={state} onChange={e => setState(e.target.value)} onDoubleClick={clearState}/>
  );
};

export const Example = () => {
  return (
    <div>
      <p>The state will be synced in this tab and persisted to local storage  between this first component:</p>
      <MyComponent />

      <p>And this second component:</p>
      <MyComponent />

      <i>
        <p>Try changing the state in one component and see it update in the other.</p>
        <p>Double-clicking will clear the state.</p>
      </i>
    </div>
  );
};

const meta: Meta = {
  title: 'createPersistedGlobalState',
  component: Example,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <Example {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
