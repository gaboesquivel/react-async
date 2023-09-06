import { DependencyList, useEffect } from 'react';
import { FunctionReturningPromise, useAsyncFn } from './use-async-fn';


export default function useAsync<T extends FunctionReturningPromise>(
  fn: T,
  deps: DependencyList = []
) {
  const [state, callback] = useAsyncFn(fn, deps, {
    loading: true,
  });

  useEffect(() => {
    callback();
  }, [callback]);

  return state;
}