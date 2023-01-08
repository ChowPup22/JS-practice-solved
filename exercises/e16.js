// see e16.md

export function find(array, callback) {

  for (let elm of array) {
    if (callback(elm)) {
      return elm;
    }
  }

  return undefined;
}
