import useAsync from "../../hooks/use-async"
import { getGenisisHash } from "../../services/chain"

export function AsyncOnMounted(){
  const genesisHashState = useAsync(getGenisisHash)
  
  return <div>
    <h1>Async on Mounted</h1>
    <pre>{JSON.stringify(genesisHashState)}</pre>
  </div>
}