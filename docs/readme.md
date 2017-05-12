## Functions

<dl>
<dt><a href="#map">map(generator, iteratee, paramModifier)</a> ⇒ <code>generator-function</code></dt>
<dd><p>Iterates over and transforms each value of <code>generator</code> by using
the transform function <code>iteratee</code>.</p>
</dd>
<dt><a href="#filter">filter(generator, iteratee, paramModifier)</a> ⇒ <code>generator-function</code></dt>
<dd><p>Iterates over and yields each value of <code>generator</code> that returns
true from the predicate test given by <code>iteratee</code>.</p>
</dd>
</dl>

<a name="map"></a>

## map(generator, iteratee, paramModifier) ⇒ <code>generator-function</code>
Iterates over and transforms each value of `generator` by using
the transform function `iteratee`.

**Kind**: global function  
**Returns**: <code>generator-function</code> - the map generator function which will yield the mapped values.  

| Param | Type | Description |
| --- | --- | --- |
| generator | <code>generator-function</code> | the generating function to map over. |
| iteratee | <code>function</code> | the transform function that returns the new value from a given iterated value. |
| paramModifier | <code>function</code> | takes the arguments received by the map generator function  and maps them to an array of values the generator can handle. |

<a name="filter"></a>

## filter(generator, iteratee, paramModifier) ⇒ <code>generator-function</code>
Iterates over and yields each value of `generator` that returns
true from the predicate test given by `iteratee`.

**Kind**: global function  
**Returns**: <code>generator-function</code> - the filter generator function which will yield the filtered values.  

| Param | Type | Description |
| --- | --- | --- |
| generator | <code>generator-function</code> | the generating function to filter over. |
| iteratee | <code>function</code> | the predicate test that returns true when the value should be included. |
| paramModifier | <code>function</code> | takes the arguments received by the filter generator function  and maps them to an array of values the generator can handle. |

