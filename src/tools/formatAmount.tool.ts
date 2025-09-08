export const formaterAmount = (amount: number, currency: string) => {
  if (amount === 0) return `$ 0 ${currency}`;
  if (amount) {
    amount = Number(amount.toFixed(2));
    const convert = new Intl.NumberFormat('en', { style: 'decimal' });
    const formattedAmount = convert.format(amount || 0);
    const formattedString = `$ ${formattedAmount} ${currency || ''}`;

    return formattedString;
  }
};
