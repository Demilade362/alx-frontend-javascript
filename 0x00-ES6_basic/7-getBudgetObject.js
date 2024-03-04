export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return {
    income: budget.income,
    gdp: budget.gdp,
    capita: budget.capita,
  };
}
