export const Auth = () => {
  return (
    <div>
      <h3>Вход в аккаунт</h3>
      <form>
        <label for="email">Почта</label>
        <input id="email" placeholder="Ваша почта..."></input>
        <label for="password">Пароль</label>
        <input id="password" placeholder="Ваш пароль..."></input>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
