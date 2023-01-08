export function minBy(array, cb) {

  for (let elm of array) {
    const result = array.filter((item) => cb(item) < cb(elm));

    if (result.length === 0) {
      return elm;
    }
  }
}

export function maxBy(array, cb) {

  for (let elm of array) {
    const result = array.filter((item) => cb(item) > cb(elm));

    if (result.length === 0) {
      return elm;
    }
  }
}
