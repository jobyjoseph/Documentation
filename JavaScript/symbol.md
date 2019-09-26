# Symbol

**Symbol** is a new primitive data type introduced in ES6.

JavaScript was first standardized in 1997. Until ES6, there were only 6 data types. They are _Undefined_, _Null_, _Boolean_, _Number_, _String_ and _Object_. With the new addition of _Symbol_, there are 7 data types in JavaScript.

## Creating symbol variable

A variable of _Symbol_ type is created using `Symbol()` function.

```javascript
const s1 = Symbol();
console.log(typeof s1); // "symbol"
```

While creating a symbol variable, we can optionally pass a description.

```javascript
const id = Symbol("UserId");
const name = Symbol("UserName");
```

`"UserId"` and `"UserName"` are the descriptions. Descriptions help in debugging. Other than that, there is no impact for description strings.

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

In that case, how can we make sure that both the variables are unique? That is a guarantee by JavaScript. Now for our relief, at least we can try comparing them.

```javascript
console.log(symbol1 == symbol2); // false
```

Seeing a `false` is assuring. It means `symbol1` and `symbol2` are unique.

Having same description, does not create identical symbols. Descriptions are purely for debugging purpose. It does not have any impact on uniquness of generated symbols.

```javascript
const s1 = Symbol("Disney");
const s2 = Symbol("Disney");
console.log(s1 == s2); // false
```

`s1` is not equal to `s2`, even though their Symbol description is same.

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

### Symbol keys with `Object.keys()`

The `Object.keys()` method returns an **array** of a given object's own enumerable property names, in the same order as we get with a normal loop.

Let us try `Object.keys()` on `obj` object. Here is the full code from object creation to printing property names.

```javascript
const obj = {
  name: "John Doe",
  age: 23
};
obj[Symbol("id")] = 1234;

console.log(Object.keys(obj)); // ["name", "age"]
```

Here also the symbol keys are omitted. Only the string property names `name` and `age` are printed.

## Symbols do not auto-convert to a string

In JavaScript, we can explicitly convert one data type to another using various techniques. One common conversion is converting a data type to string. All data types have `.toString()` method which makes this job easy. Here are few examples.

```javascript
console.log(true.toString()); // "true"
console.log(Number(123).toString()); // "123"
console.log([3, 5, 8].toString()); // "3,5,8"
```

In similar manner, we can convert a symbol to a string using `.toString()` method.

```javascript
const symbol1 = Symbol("Token");
console.log(symbol1.toString()); //"Symbol(Token)";
```

A symbol when converted to a string, outputs the `Symbol()` function which created it, along with the symbol description(`Token`).

There are cases where JavaScript implicitly convert a data type to string. Here are two examples.

```javascript
console.log(1 + "2"); // "12"
alert([3, 4, 5]); // alerts "3,4,5"
```

What if we try to alert the value of a symbol? It throws an error. Let us try.

```javascript
const symbol1 = Symbol("Token");
alert(symbol1); // TypeError: Cannot convert a Symbol value to a string
```

This says that, if we want to convert a symbol to string, we need to explicitly use `.toString()` method. Otherwise, implicit conversion to string value results in _TypeError_.

## Well-Known symbols

So far we learned how to create custom symbols. There are a set of built-in symbols in JavaScript called as Well-Known symbols. We can find these symbols as constants of `Symbol` class. There are 13 such symbols.

1. `Symbol.asyncIterator`
2. `Symbol.hasInstance`
3. `Symbol.isConcatSpreadable`
4. `Symbol.iterator`
5. `Symbol.match`
6. `Symbol.matchAll`
7. `Symbol.replace`
8. `Symbol.search`
9. `Symbol.species`
10. `Symbol.split`
11. `Symbol.toPrimitive`
12. `Symbol.toStringTag`
13. `Symbol.unscopables`

We can find all these constant symbols, by going to browser console and type `Symbol.`. Browser will show above symbols in the auto complete.

![](assets/well-known-symbols.png)

## Global symbol registry

## References

Symbol - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

ES6 In Depth - https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/

Symbol - https://developer.mozilla.org/en-US/docs/Glossary/Symbol

Metaprogramming in ES6: Symbols and why they're awesome - https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/

The Symbol Type - https://tc39.es/ecma262/#sec-ecmascript-language-types-symbol-type
