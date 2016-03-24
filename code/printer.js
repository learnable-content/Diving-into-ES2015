import { strip } from './strings';
import { calculate } from './calculator';

export function printReceipt(items) {
  var {total, totalTax} = calculate({ items });

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
