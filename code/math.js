export function calculateTax({ price, taxRate, taxable }) {
  if (!taxable) return 0;
  return price * taxRate / 100;
}
