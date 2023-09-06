
import { useAsyncFn } from "../../hooks/use-async-fn"
import { someVanillaParallel } from "../../services/chain"

export function AsyncOnEnventParallel(){
  const [state, callFn] = useAsyncFn(someVanillaParallel)
  
  return <div>
    <h1>Async on Event in Parallel</h1>
    <button onClick={callFn}>get data in parallel</button>
    <pre>{JSON.stringify(state, null, 2)}</pre></div>
}