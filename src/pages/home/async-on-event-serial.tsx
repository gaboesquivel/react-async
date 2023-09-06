
import { useAsyncFn } from "../../hooks/use-async-fn"
import { someVanillaSeries } from "../../services/chain"

export function AsyncOnEnventSerial(){
  const [state, callFn] = useAsyncFn(someVanillaSeries)
  
  return <div>
    <h1>Async on Event Serially</h1>
    <button onClick={callFn}>get data serially</button>
    <pre>{JSON.stringify(state, null, 2)}</pre></div>
}