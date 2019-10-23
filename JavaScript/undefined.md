`undefined` is a primitive data type. It contains only one value which is `undefined`. It is like saying, there is a teacher in our school and his name is also `teacher`.

The meaning of `undefined` is _value not assigned_. When checking the value of a variable in JavaScript, if the returned value is `undefined`, it means a value has not been assigned to that variable yet.

## Default value of variables

In JavaScript, we can declare a variable using `var`, `let` and `const`. When we declare a variable using `var` or `let`, the value stored by default is `undefined`.

```javascript
var a;
let b;
console.log(a); // undefined
console.log(b); // undefined
```

## Empty check

Since `undefined` has the meaning of _value not assigned_, it is not appropriate to assign `undefined` to mark intentional absense of a value. We can use `null` for that purpose.

```javascript
if (isApproved) {
  date = new Date();
} else {
  date = undefined; // NOT Ok. Use null instead
}
```

## `window.undefined`

In JavaScript, `undefined` is not a reserved keyword. It means we can use `undefined` as an identifier. Following code use `undefined` as a variable and shows the problem it creates.

```javascript
(function(){
  var undefined = true;
  
  if(undefined) {
    console.log("undefined is true");
  }
})();
```

In the above code snippet, we make `undefined` a truthy value. It can easily break things in code. So to ensure correctness, we can use `window.undefined` inside `if` condition. `window.undefined` stores the primitive `undefined` value. Since the `writable` attribute of `window.undefined` is `false`, no one can rewrite it with any other value.

```javascript
window.undefined = true;
console.log(window.undefined); // undefined
```

In the code snippet above, we defined an `undefined` variable inside an Immediately Invoked Function Expression(IIFE).

```javascript
(function(){
  //...
})();
```

It is because, if we just try to create a new variable `undefined` in global scope, it will point towards `window.undefined`. Since we cannot overide the value of `window.undefined`, it looks like we cannot declare an `undefined` variable in global scope. Let us try that.

```javascript
var undefined = true;
console.log(undefined); // undefined
```

Here, assigning `true` to `undefined` is not a syntax error. Still, second line prints `undefined`, not `true`. 

> Instead of `undefined`, if we are assigning something to `null`, then JavaScript engine throws _Syntax Error_.