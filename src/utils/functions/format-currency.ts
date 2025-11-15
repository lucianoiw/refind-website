export function formatCurrency(
  amount: number,
  locale: string = "pt-BR"
): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}
