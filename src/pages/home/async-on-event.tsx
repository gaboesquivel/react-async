
import { useAsyncFn } from "../../hooks/use-async-fn"
import { getGenisisHash } from "../../services/chain"

export function AsyncOnEnvent(){
  const [state, callFn] = useAsyncFn(getGenisisHash)
  
  return <div>
    <h1>Async on Event</h1>
    <button onClick={callFn}>get genesis hash</button>
    <pre>{JSON.stringify(state)}</pre></div>
}