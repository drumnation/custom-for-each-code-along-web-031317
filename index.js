function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    // 1. index forEach(iterable, callback) with an array uses `Array.isArray`
    for (let i = 0, l = iterable.length; i < l; i++) {
      const element = iterable[i]
      callback(element, i, iterable)
      // 2. index forEach(iterable, callback) with an array calls `callback` on each element of the array
    }
  }
  else if (typeof iterable === 'object') {
    for (const key in iterable) {
      const value = iterable[key]
      callback(value, key, iterable)
      // 3. index forEach(iterable, callback) with an object calls `callback` on each key-value pair
    }
  }
}
