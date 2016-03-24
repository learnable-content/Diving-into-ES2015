import { calculateTax } from './math';

export const items = [
  { price: 10, taxable: true },
  { price: 22, taxable: false },
  { price: 13.45, taxable: true }
];

export function calculate({ taxRate = 8, items = [] }) {
  let total = 0, totalTax = 0;

  items.forEach(item => {
    total += item.price;
    totalTax += calculateTax({ taxRate, ...item });
  })

  return {total, totalTax};
}
