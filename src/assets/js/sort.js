export default function compare (property, order = true) {
  if (order === true) {
    return function (a, b) {
      var value1 = a[property]
      var value2 = b[property]
      return value2 - value1
    }
  } else {
    return function (a, b) {
      var value1 = a[property]
      var value2 = b[property]
      return value1 - value2
    }
  }
}
