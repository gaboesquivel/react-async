

import useAsync from "../../hooks/use-async"
import { someVanillaSeries } from "../../services/chain"

export function AsyncOnMountedSerial(){
  const genesisHashState = useAsync(someVanillaSeries)
  
  return <div>
    <h1>Async on Mounted Serial</h1>
    <pre>{JSON.stringify(genesisHashState)}</pre>
  </div>
}