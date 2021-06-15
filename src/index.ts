export type Comparable = string | number

export type GetKeyFunc<T> = (source: T) => Comparable

function cmp<T>(a: T, b: T) {
    if (a < b) return -1
    if (a > b) return 1
    return 0
}

export function reverseSortByKey<T>(...getKeys: Array<GetKeyFunc<T>>): (a: T, b: T) => number {
  return sort({keys: getKeys, reverse: true})
}

export function sortByKey<T>(...getKeys: Array<GetKeyFunc<T>>): (a: T, b: T) => number {
  return sort({keys: getKeys, reverse: false})
}

function sort<T>(options: {keys: Array<GetKeyFunc<T>>, reverse: boolean}): (a: T, b: T) => number {
  const mult = options.reverse ? -1 : 1
  return (a: T, b: T) => {
    for (const getKey of options.keys) {
      const keyFirst = getKey(a)
      const keySecond = getKey(b)
      const compared = cmp(keyFirst, keySecond)
      if (compared) {
        return mult * compared
      }
    }
    return 0
  }
}
