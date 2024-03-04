export default function appendToEachArrayValue(array, appendString) {
  for (var value of array) {
    var value = appendString + value;
  }

  return array;
}
