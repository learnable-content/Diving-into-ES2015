# Lesson 4.2 - Receipt Printer

Now that we know all about template literals, let's put them to use and create
a function that will print out a receipt of all our items!

The first thing we will do is refactor our `calculate` function to return the
total price and the total tax separately:

```js
export function calculate({ taxRate = 8, items = [] }) {
  let total = 0, totalTax = 0;

  items.forEach(function(item) {
    total += item.price;
    totalTax += calculateTax({ taxRate, ...item });
  })

  return {total, totalTax};
}
```

Not a huge change here, all we did was keep two separate running totals for
price and tax, and returned them in as an array.

We are going to use the `strip` function from the last lesson to create this
receipt, so let's go ahead and make a new file called `utils-strings.js` and
paste in the strip function:

```js
export function strip(pieces, ...value) {
  let str = '';
  pieces.forEach(function(piece, index) {
    let val = value[index] || '';
    str += piece + val;
  })
  return str.replace(/^\s*/gm, '');
}
```

Ok great! Now it's as simple as importing the modules we need and creating
a function that will print out a receipt! Lets create a file called `printer.js`
and create our function:

```js
import { strip } from './utils-strings';
import { calculate } from './calculator';

export function printReceipt(items) {
  let {total, totalTax} = calculate({ items });

  return strip`
    ${items.map(function(item) { return item.price }).join('\n')}
    ${'-'.repeat(30)}
    Sub-Total: ${total}
    ${'='.repeat(30)}
    Tax: ${totalTax}
    ${'='.repeat(30)}
    Total: ${total + totalTax}
  `;
}
```

That's it! So what's happening here? The first thing we did was calculate the
total price and total tax using our calculate function, and assigned the values
to `total` and `totalTax` variables using destructuring. Then we used our custom
template literal called `strip` to print out our receipt! Let's try it out in
the console:

```bash
$ babel-node
> var { items } = require('./calculator')
> var { printReceipt } = require('./printer')
> console.log(printReceipt(items))
->
10
22
13.45
------------------------------
Sub-Total: 45.45
==============================
Tax: 1.876
==============================
Total: 47.326
```

## Moving on
Template literals are awesome! Let's move on now and find out what this wacky
new syntax called arrow functions are!
