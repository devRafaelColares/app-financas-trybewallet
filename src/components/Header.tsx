import { useSelector } from 'react-redux';
import { Expense, ReduxState } from '../types';

function Header() {
  const userEmail = useSelector((state:any) => state.user.email);
  const expenseSum = useSelector((state: ReduxState) => state.wallet.expenses);

  const findTotalsums = expenseSum.reduce((acc: number, current: Expense) => {
    const { value, currency, exchangeRates } = current;
    const exchangeRate = exchangeRates?.[currency].ask;
    const numericValue = Number(value);
    const numericExchangeRate = exchangeRate ? Number(exchangeRate) : 1;
    return acc + numericValue * numericExchangeRate;
  }, 0);

  return (
    <div>
      <p data-testid="email-field">
        Usuário Logado:
        {' '}
        { userEmail }
      </p>
      <p data-testid="total-field">{findTotalsums.toFixed(2)}</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>

  );
}

export default Header;
