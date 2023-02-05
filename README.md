# react-persisted-global-state

[![License](https://img.shields.io/github/license/Addono/react-persisted-global-state?style=flat-square)](https://github.com/Addono/react-persisted-global-state/blob/master/LICENSE)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://img.shields.io/badge/project%20status-Active-greengrass?style=flat-square)](https://www.repostatus.org/#active)
[![Depfu](https://img.shields.io/depfu/Addono/react-persisted-global-state?style=flat-square)](https://depfu.com/github/Addono/react-persisted-global-state)
[![npm](https://img.shields.io/npm/dt/react-persisted-global-state?style=flat-square)](https://www.npmjs.com/package/react-persisted-global-state)
[![npm](https://img.shields.io/npm/v/react-persisted-global-state?style=flat-square)](https://www.npmjs.com/package/react-persisted-global-state)
[![GitHub stars](https://img.shields.io/github/stars/Addono/react-persisted-global-state?style=flat-square)](https://github.com/Addono/react-persisted-global-state/stargazers)<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## About

Simple React hook for global state which is persisted to Local Storage.

This allows sharing state between multiple components or different instance of the same component, all while the changes are persisted to the browser's Local Storage.

## Installing

Install `react-persisted-global-state` and its peer-dependencies:

```bash
# For users of npm
npm install --save react-persisted-global-state react-use

# For users of Yarn
yarn add react-persisted-global-state react-use
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

## ✨ Contributors <a name = "contributors"></a>

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://aknapen.nl"><img src="https://avatars1.githubusercontent.com/u/15435678?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adriaan Knapen</b></sub></a><br /><a href="https://github.com/Addono/react-persisted-global-state/commits?author=Addono" title="Code">💻</a> <a href="#tool-Addono" title="Tools">🔧</a> <a href="https://github.com/Addono/react-persisted-global-state/commits?author=Addono" title="Documentation">📖</a> <a href="https://github.com/Addono/react-persisted-global-state/commits?author=Addono" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
