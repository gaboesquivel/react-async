// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function executePromisesInSeries(promises: (() => Promise<any>)[]) {
  const results = []
  for (const promiseFn of promises) {
    results.push(await promiseFn());
  }
  return results
}