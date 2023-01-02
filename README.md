# react-persisted-global-state

## About

Simple React hook for global state which is persisted to Local Storage.

This allows sharing state between multiple components or different instance of the same component, all while the changes are persisted to the browser's Local Storage.

## Installing

Install all dependencies and peer-dependencies:

```bash
npm install react-persisted-global-state use-hooks

yarn add react-persisted-global-state use-hooks
```

## Usage

```tsx
import { createPersistedGlobalState } from 'react-persisted-global-state';

// Register a re-usable instance of our global state store
const useMyPersistedGlobalState = createPersistedGlobalState<string>(
  'my-localstorage-key',
  'Hello, world!'
);

const MyComponent = () => {
  const [state, setState, _] = useMyPersistedGlobalState();

  return (
    <input type="text" value={state} onChange={e => setState(e.target.value)} />
  );
};
```
