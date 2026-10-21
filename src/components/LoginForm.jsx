/**
 * Formulário provisório. A Pessoa 2 valida os campos e chama onEntrar.
 *
 * @param {{
 *   onEntrar: (credenciais: import('../types/auth.js').Credenciais) => void
 *   carregando: boolean
 * }} props
 */
export function LoginForm({ onEntrar, carregando }) {
  void onEntrar

  return (
    <div className="form-card">
      <form
        className="form-card__form"
        onSubmit={(event) => event.preventDefault()}
      >
        <fieldset className="form-card__fieldset" disabled={carregando}>
          <legend className="form-card__legend">Já tenho conta</legend>
          <div className="form-grid login-page__fields">
            <label className="form-field form-field--full">
              <span>Usuário</span>
              <input
                type="text"
                name="login-usuario"
                placeholder="seu usuário"
                required
                autoComplete="username"
              />
            </label>
            <label className="form-field form-field--full">
              <span>Senha</span>
              <input
                type="password"
                name="login-senha"
                placeholder="Sua senha"
                required
                autoComplete="current-password"
              />
            </label>
          </div>
        </fieldset>
        <div className="form-card__actions login-page__actions">
          <button className="btn btn-primary" type="submit" disabled={carregando}>
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
        </div>
      </form>
    </div>
  )
}
