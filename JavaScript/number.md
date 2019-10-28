Number is a primitive data type in JavaScript to represent numeric type. Following are valid number types in JavaScript.

```javascript
12
23.09
-5.2
0
```

## Double-precision 64-bit binary format IEEE 754

In JavaScript, number type is a _double-precision 64-bit binary format IEEE 754_ value. Double precision means, JavaScript uses 64 bits to store a number. Each bit contains a binary value.

```javascript
var num = 23;
```

Here variable `num` occupies 64 bit of memory to store the number `23`.

[IEEE 754](https://en.wikipedia.org/wiki/IEEE_754-1985) is an industry standard for representing floating point numbers.

## `Infinity`, `-Infinity`

`Infinity`, `-Infinity` and `NaN` are special values of _number_ data type.

```javascript
typeof Infinity   // "number"
typeof -Infinity  // "number"
typeof NaN        // "number"
```

`Infinity` and `-Infinity` represents infinity on positive and negative side of number line. If in any operations, the numeric result is beyond the double precision number range, `Infinity` is returned.

```javascript
Number.MAX_VALUE * -100000000 // -Infinity
Number.MAX_VALUE * 100000000  // Infinity
```

## `NaN`

`NaN` stands for _Not a Number_. It is the value returned when a mathematical operation fails.

```javascript
"hello" * 23    // NaN
Math.sqrt(-2)   // NaN
```