// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function executePromisesInSeries(promises: (() => Promise<any>)[]) {
  for (const promiseFn of promises) {
    await promiseFn();
  }
}