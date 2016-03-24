# Lesson 5.2 - Arrow Functions Everywhere

Now that we know how to make use of arrow functions, let's refactor our code
to use them!

Let's start with our `strip` function in the `strings.js` file:

```js
export function strip(pieces, ...value) {
  let str = '';

  pieces.forEach((piece, index) => {
    let val = value[index] || ''
    str = str + piece + val
  });

  return str.replace(/^\s*/gm, '');
}
```

What we did there was replace the callback function in the `forEach` loop to
be an arrow function. This doesn't net us a *ton* of extra room or readability,
but it's a good idea to be consistent throughout your codebase, and I find it
to be good practice to use arrow functions when creating anonymous callback
functions like this.

Next, we can move on to the `printReceipt` function in the `printer.js` file.
This function will benefit a lot from this refactor. Let's tak a look at where
we're mapping over the prices of the items and see if we can improve upon
that:

```js
export function printReceipt(items) {
  let {total, totalTax} = calculate({ items });

  return strip`
    ${items.map(item => item.price).join('\n')}
    ${'-'.repeat(30)}
    Sub-Total: ${total}
    ${'='.repeat(30)}
    Tax: ${totalTax}
    ${'='.repeat(30)}
    Total: ${total + totalTax}
  `;
}
```

That's better! We've reduced that callback function to three words and one
fat arrow! And it's still very readable and clear what's going on. This is
great!

Did you also notice that we were able to drop the parentheses from the callback
function we used when mapping over the items? You can do this when there is
only one argument being passed into the function. Really cool!

The last change we're going to make is in the `calculate` function in the
`calculator.js` file. Here we're going to do the same thing we did in the
`strip` function:

```js
export function calculate({ taxRate = 8, items = [] }) {
  let total = 0, totalTax = 0;

  items.forEach(item => {
    total += item.price;
    totalTax += calculateTax({ taxRate, ...item });
  });

  return {total, totalTax};
}
```

Great! Our modules are looking better and better!

## Moving on
We're learning a lot about ES2015, but we're not done yet! Let's move on to
the next lesson where we'll talk about variables and scoping!
