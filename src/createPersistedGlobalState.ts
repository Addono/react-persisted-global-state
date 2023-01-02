import { createGlobalState, useLocalStorage } from 'react-use';

/**
 * Creates a global shared state which is persisted to local
 * storage.
 * @param key Unique global used for persisting this state.
 * @param initialState The initial global state
 * @returns A hook which can be used to get, set and remove
 *   the global state.
 * @example
 *   const useMyPersistedGlobalState = createPersistedGlobalState<string>('my-key', 'Hello, world!')
 *
 *   const MyComponent = () => {
 *     const [state, setState, removeState] = useMyPersistedGlobalState()
 *
 *     return (
 *       <input
 *         type="text"
 *         value={state}
 *         onChange={(e) => setState(e.target.value)}
 *       />
 *     )
 *   }
 */
export const createPersistedGlobalState = <S extends unknown>(
  key: string,
  initialState: S
): (() => readonly [S, (state: S) => void, () => void]) => {
  const useGlobalState = createGlobalState<S>(initialState);

  return () => {
    const [globalState, setGlobalState] = useGlobalState();
    const [
      localStorageState,
      setLocalStorageState,
      removeLocalStorageState,
    ] = useLocalStorage<S>(key, globalState);

    const state: S =
      globalState === initialState && localStorageState !== undefined
        ? localStorageState
        : globalState;
    const setState: (state: S) => void = state => {
      setGlobalState(state);
      setLocalStorageState(state);
    };
    const removeState: () => void = () => {
      setGlobalState(initialState);
      removeLocalStorageState();
    };

    return [state, setState, removeState] as const;
  };
};
