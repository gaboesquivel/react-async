
import { useAsyncFn } from "../../hooks/use-async-fn"
import { someVanillaConditional } from "../../services/chain"

export function AsyncOnEnventConditial(){
  const [state, callFn] = useAsyncFn(someVanillaConditional)
  
  return <div>
    <h1>Async on Event Conditionally</h1>
    <button onClick={callFn}>get data in conditionally</button>
    <pre>{JSON.stringify(state)}</pre></div>
}