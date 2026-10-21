
import { useState } from 'react'

export function LoginForm({ onEntrar, carregando }) {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  const formularioValido =
    usuario.trim().length > 0 && senha.trim().length > 0

  function aoEnviar(event) {
    event.preventDefault()

    if (carregando || !formularioValido) return

    onEntrar({
      usuario: usuario.trim(),
      senha
    })
  }

  return (
    <div className="form-card">
      <form className="form-card__form" onSubmit={aoEnviar}>
        <fieldset className="form-card__fieldset" disabled={carregando}>
          <legend className="form-card__legend">
            Já tenho conta
          </legend>

          <div className="form-grid login-page__fields">
            <label className="form-field form-field--full">
              <span>Usuário</span>
              <input
                type="text"
                name="login-usuario"
                placeholder="Seu usuário"
                autoComplete="username"
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}
                required
              />
            </label>

            <label className="form-field form-field--full">
              <span>Senha</span>
              <input
                type="password"
                name="login-senha"
                placeholder="Sua senha"
                autoComplete="current-password"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                required
              />
            </label>
          </div>
        </fieldset>

        <div className="form-card__actions login-page__actions">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={carregando || !formularioValido}
          >
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
        </div>
      </form>
    </div>
  )
}
