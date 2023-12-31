// Import
import { ApiPromise, WsProvider } from '@polkadot/api';
import { executePromisesInSeries } from '../../lib/async';

const wsProvider = new WsProvider('wss://rpc.polkadot.io');

export async function getApi(){
 return ApiPromise.create({ provider: wsProvider });
}

export async function getChain(){
  const api = await getApi()
  return api.rpc.system.chain()
}

export async function getLatestHeader() {
  const api = await getApi()
  return api.rpc.chain.getHeader();
}

export async function getGenisisHash(){
  const api = await getApi()
  return api.genesisHash.toHex()
}

export async function someVanillaSeries(){
  const tasks = [
    getChain, 
    getGenisisHash, 
    getChain
  ];
  return executePromisesInSeries(tasks)
}

export async function someVanillaParallel(){
  const result = await Promise.all([getGenisisHash(), getChain()])
  return await result
}

export async function someVanillaConditional(){
  const chain = await getChain()
  const genesisHash = chain ? await getGenisisHash(): null
  return genesisHash
}

