# Lesson 6.3 - Block Scoped Functions

Block scoped functions work very much the same way that block scoped variables
do. You mave have seen the widely used IIFE (Immediately Invoked Function Expression)
syntax. This is done to prevent the
function declarations from polluting the global namespace.

ES2015 to the rescue again! What used to look like this:

```js
(function() {
  var foo = function() { return 'bar' }
})()
```

Can now be encapsulated like this:

```js
{
  function foo() { return 'bar' }
}
```

While this is just a simple example, the implications of this are profound.
It really moves JavaScript in the direction of many other programming
languages that have always supported block scoping, and makes controlling
the scope of variables and functions much, much easier.

## Moving on
This was an easy section! Let's move on to learn about ES2015 classes and put
all of our work together into some class based code!
