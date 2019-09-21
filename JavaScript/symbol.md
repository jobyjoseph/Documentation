# Symbol

JavaScript was first standardized in 1997. Since then till ES6, there were only 6 data types. They are _Undefined_, _Null_, _Boolean_, _Number_, _String_ and _Object_. **symbol** is a new primitive data type introduced in ES6, just like number, string or boolean. It is created using `Symbol()` function.

```javascript
const s1 = Symbol();
console.log(typeof s1); // "symbol"
```

## Symbols are unique

Every symbol value returned from `Symbol()` is unique. We can consider `Symbol()` function as a magic box which throws out a unique toy each time when we open it.

Let us create 2 symbols.

```javascript
const symbol1 = Symbol();
const symbol2 = Symbol();
```

Here, we open the magic box 2 times. Now let us see what toy we have received by printing the symbol variables.

```javascript
console.log(symbol1); // Symbol()
console.log(symbol2); // Symbol()
```

Both statements print `Symbol()` in console. Did you expect a random string? If yes, that is not happening. So, is there any way to see the contents of both variables? No.

In that case, how can we make sure that both the variables are unique? We can believe that it is unique because that is what JavaScript promises. Now for our relief, at least we can try comparing them.

```javascript
console.log(symbol1 == symbol2); // false
```

Seeing a `false` is assuring. Let us believe that something unique is stored and managed by JavaScript.

## Purpose of Symbols

Symbols are unique. But we are not able to figure out why did JavaScript brought such a primitive type. What is the purpose?

## Symbols do not auto-convert to a string

## References

Symbol - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

ES6 In Depth - https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/

Symbol - https://developer.mozilla.org/en-US/docs/Glossary/Symbol

Metaprogramming in ES6: Symbols and why they're awesome - https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/
