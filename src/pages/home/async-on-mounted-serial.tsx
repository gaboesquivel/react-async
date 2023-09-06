
import { useAsyncFn } from "../../hooks/use-async-fn"
import { someVanillaSeries } from "../../services/chain"

export function AsyncOnMountedSerial(){
  const genesisHashState = useAsyncFn(someVanillaSeries)
  
  return <div>
    <h1>Async on Mounted Serial</h1>
    <pre>{JSON.stringify(genesisHashState)}</pre>
  </div>
}