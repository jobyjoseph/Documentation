Boolean represents a logical entity. Logical entities are used to write conditions and enable branching in the program. There are only 2 values in JavaScript that are of Boolean type. They are `true` and `false`.

```javascript
// Branching
if (true) {
  console.log("I am truthy");
} else {
  console.log("I will never be logged");
}
```

## Falsy values

When we use any data types as a logical entity, JavaScript automatically converts that value to a boolean `true` or `false`. For example, in the following snippet we use `"hello"` as a logical entity.

```javascript
if ("hello") {
  console.log("hello is true");
} else {
  console.log("hello is false");
}
```

Here the output is `"hello is true"`. It is because, JavaScript automatically converts a non-empty string to a `true`. There are some values, when converted to boolean, results in `false`. Those values are called _falsy values_. They are:

- `0`
- `-0`
- `null`
- `false` Obviously
- `NaN`
- `undefined`
- `""` Empty string

All other values in JavaScript are truthy values.

> An empty object `{}` and empty array `[]` are truthy values. It is not falsy like an empty string.

> The string "false" is a non-empty string. So when it is converted to boolean, it is a truthy value.