function identity (x) {
  return x;
}

function argsToArray (...params) {
  return [...params];
}

/**
 * Iterates over and transforms each value of `generator` by using
 * the transform function `iteratee`.
 * 
 * @param {generator function} generator
 * the generating function to map over.
 * @param {function} iteratee
 * the transform function that returns the new value from a given iterated value.
 * @param {function} paramModifier
 * takes the arguments received by the map generator function 
 * and maps them to an array of values the generator can handle.
 * @return {generator function}
 * the map generator function which will yield the mapped values.
 */
function map (generator, iteratee=identity, paramModifier=argsToArray) { 
  return function* _map(...params) {
    for(let item of generator(...paramModifier(...params))) {
      yield iteratee(item);
    }
  };
}

/**
 * Iterates over and yields each value of `generator` that returns
 * true from the predicate test given by `iteratee`.
 * 
 * @param {generator function} generator
 * the generating function to filter over.
 * @param {function} iteratee
 * the predicate test that returns true when the value should be included.
 * @param {function} paramModifier
 * takes the arguments received by the filter generator function 
 * and maps them to an array of values the generator can handle.
 * @return {generator function}
 * the filter generator function which will yield the filtered values.
 */
function filter (generator, iteratee=identity, paramModifier=argsToArray) { 
  return function* _filter(...params) {
    for(let item of generator(...paramModifier(...params))) {
      if(iteratee(item)) {
        yield item;
      }
    }
  };
}

export default {
  map,
  filter,
};
