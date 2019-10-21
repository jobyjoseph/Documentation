`null` is a primitive data type in JavaScript. There is only one value in JavaScript that is of `null` type. So here, there is a `null` data type and `null` value in JavaScript.

The value `null` represents the intentional absense of any object value. Here is an example.

```javascript
"hello".match(/a/gi) // null
```

We are using `match()` method to find the occurence of `a` in `hello`. It cannot find a match and hence returned `null`. In general, `null` is used or returned in situations where an object is expected but not available.

A variable can have a value of `null`, only if it is intentionally assigned. So checking for `null` is better than checking for `undefined`.

## Using `typeof` with `null`

We just learned that `null` value is of `null` type. But, if we try to find the type of `null` using `typeof` operator, the output will be `object`.

```javascript
console.log(typeof null); // "object"
```

Returing `"object"` is a bug in this case. But this bug cannot be fixed. If a browser, say Google Chrome decides to return `"null"` for `typeof null`, then it breaks a lot of existing code. So the EcmaScript committee planned to keep the bug as it is.

## `null` and `undefined`

`undefined` is the default value returned by JavaScript engine for a newly declared variable. `null` marks an intentional absense of an object. Let us see how these two work together.

```javascript
typeof null         // "object"
typeof undefined    // "undefined"
null === undefined  // false
null == undefined   // true
!null               // true
```

`null` when converted to number is `0`. `undefined` when converted to a number is `NaN`.

```javascript
null * 1      // 0
undefined * 1 // NaN
```

`null` is a keyword in JavaScript. We cannot declare a variable with name `null`.

```javascript
var null = 23; // SyntaxError: Unexpected token 'null'
```

On the other hand, we can use `undefined` as an identifier, which is not preferred and can cause lot of errors.

```javascript
(function(){
var undefined = 23;
console.log(undefined); // 23
})();
```

Why we used an IIFE in the above code snippet? We are discussing it under `undefined` type.