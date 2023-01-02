import React from 'react';
import ReactDOM from 'react-dom';
import { Example } from '../stories/createPersistedGlobalState.stories';

describe('createPersistedGlobalState', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Example />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
