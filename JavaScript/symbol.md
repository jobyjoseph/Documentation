# Symbol

JavaScript was first standardized in 1997. Since then, till ES6, there were only 6 data types. They are _Undefined_, _Null_, _Boolean_, _Number_, _String_ and _Object_. **Symbol** is a new primitive data type introduced in ES6. A variable of _Symbol_ type is created using `Symbol()` function.

```javascript
const s1 = Symbol();
console.log(typeof s1); // "symbol"
```

## Symbols are unique

Every symbol value returned from `Symbol()` is anonymous and unique. We can consider `Symbol()` function as a magic box which throws out a unique toy each time when we open it.

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

Both statements print `Symbol()` in console. Did you expect a random string? If yes, that is not happening. So, is there any way to see the contents of both variables? No. That is why they say `Symbol()` produces anonymous and unique values.

In that case, how can we make sure that both the variables are unique? We can believe that it is unique because that is what JavaScript promises. Now for our relief, at least we can try comparing them.

```javascript
console.log(symbol1 == symbol2); // false
```

Seeing a `false` is assuring. Let us believe that something unique is stored and managed by JavaScript.

## Symbols as object keys

In JavaScript, an object key should be either a string or a symbol. Other data types are not supported as object keys. Here is an example of an object literal.

```javascript
const obj = {
  name: "John Doe",
  age: 23
};
```

Now let us add a new Symbol key to `obj`.

```javascript
obj[Symbol("id")] = 1234;
```

> We need to use square bracket`[]` syntax to add a Symbol key property to an object. Dot(`.`) notation is not allowed to add Symbols to objects. Following code is invalid.
>
> ```javascript
> obj.Symbol("id") = 1234;
> ```

What is the use of having a Symbol key?

### Symbol keys in `for..in`

`obj` object which we created above now have 3 keys(2 strings and 1 symbol). Now let us log the key names using `for..in` loop.

```javascript
for (key in obj) {
  console.log(key);
}
```

And the output is

```console
"name"
"age"
```

We cannot see `Symbol("id")` in the list. Symbol keys act like private properties(in reality, they are not). They are not looped through when used with `for..in` loop.

So, is this hiding behaviour applicable for all loops on objects?

## Symbols are ignored in object inspection

## Symbols do not auto-convert to a string

## References

Symbol - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

ES6 In Depth - https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/

Symbol - https://developer.mozilla.org/en-US/docs/Glossary/Symbol

Metaprogramming in ES6: Symbols and why they're awesome - https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/

The Symbol Type - https://tc39.es/ecma262/#sec-ecmascript-language-types-symbol-type
