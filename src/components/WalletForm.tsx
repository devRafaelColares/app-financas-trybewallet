import { useDispatch, useSelector } from 'react-redux';
import { FormEvent, useEffect, useState } from 'react';
import { Dispatch, ReduxState } from '../types';
import { fetchCurrenciesAPI, setNewExpense } from '../redux/actions';
import fetchExchangeRates from '../services/fetchExchangeRates';

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  const currencies = useSelector((state: ReduxState) => state.wallet.currencies);
  const expenseId = useSelector((state: ReduxState) => state.wallet.expenses);

  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('Dinheiro');
  const [selectedTag, setSelectedTag] = useState<string>('Alimentação');
  const [selectedExpenseValue, setSelectedExpenseValue] = useState<string>('');
  const [selectedDescription, setSelectedDescription] = useState<string>('');

  useEffect(() => {
    dispatch(fetchCurrenciesAPI());
    if (currencies.length > 0 && !selectedCurrency) {
      setSelectedCurrency(currencies[0]);
    }
  }, []);

  const handleBtnAddExpense = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const exchangeRates = await fetchExchangeRates();

    const newExpense = {
      id: expenseId.length,
      value: selectedExpenseValue,
      currency: selectedCurrency,
      method: selectedPaymentMethod,
      tag: selectedTag,
      description: selectedDescription,
      exchangeRates,
    };

    dispatch(setNewExpense(newExpense));

    setSelectedExpenseValue((prev) => '');
    setSelectedCurrency((prev) => 'USD');
    setSelectedPaymentMethod((prev) => 'Dinheiro');
    setSelectedTag((prev) => 'Alimentação');
    setSelectedDescription((prev) => '');
  };

  return (
    <form onSubmit={ handleBtnAddExpense }>
      <label htmlFor="valor-despesa">
        Valor:
        <input
          type="text"
          id="valor-despesa"
          data-testid="value-input"
          value={ selectedExpenseValue }
          onChange={ (event) => setSelectedExpenseValue(event.target.value) }
        />
      </label>

      <label htmlFor="currencies">
        Moeda:
        <select
          data-testid="currency-input"
          id="currencies"
          value={ selectedCurrency }
          onChange={ (event) => setSelectedCurrency(event.target.value) }
        >
          {currencies.map((currency) => (
            <option key={ currency } value={ currency }>
              {currency}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="metodo-pagamento">
        Método de pagamento:
        <select
          data-testid="method-input"
          id="metodo-pagamento"
          value={ selectedPaymentMethod }
          onChange={ (event) => setSelectedPaymentMethod(event.target.value) }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>

      <label htmlFor="tag">
        Tag:
        <select
          data-testid="tag-input"
          id="tag"
          value={ selectedTag }
          onChange={ (event) => setSelectedTag(event.target.value) }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>

      <label htmlFor="descrição-despesa">
        Descrição:
        <input
          type="text"
          id="descrição-despesa"
          data-testid="description-input"
          value={ selectedDescription }
          onChange={ (event) => setSelectedDescription(event.target.value) }
        />
      </label>

      <button type="submit">Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
