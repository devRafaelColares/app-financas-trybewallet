import { useSelector } from 'react-redux';

function Header() {
  const userEmail = useSelector((state:any) => state.user.email);

  return (
    <div>
      <p data-testid="email-field">
        Usuário Logado:
        {' '}
        { userEmail }
      </p>
      <p data-testid="total-field">Despesa Total: R$ 0</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>

  );
}
export default Header;
