import { useState } from 'react'
import { LoginForm } from '../components/LoginForm.jsx'
import { LoginStatus } from '../components/LoginStatus.jsx'
import { entrar } from '../services/authService.js'
import '../styles/login.css'

export function LoginPage() {
  const [carregando, setCarregando] = useState(false)
  const [sessao, setSessao] = useState(null)
  const [erro, setErro] = useState(null)
  const [senhaCadastro, setSenhaCadastro] = useState('')

  async function aoEntrar(credenciais) {
    setCarregando(true)
    setErro(null)
    setSessao(null)

    try {
      const resultado = await entrar(credenciais)
      setSessao(resultado)
    } catch {
      setSessao(null)
      setErro('Não foi possível entrar. Confira usuário e senha.')
    } finally {
      setCarregando(false)
    }
  }

  const senhaCurta = senhaCadastro.length > 0 && senhaCadastro.length < 8

  return (
    <section className="section" aria-labelledby="login-heading">
      <div className="section__inner">
        <h1 id="login-heading" className="section__title">Entrar na Iara Games</h1>
        <p className="section__lead">
          Entre com sua conta ou cadastre-se para acompanhar lançamentos e novidades.
        </p>
        <LoginStatus sessao={sessao} erro={erro} />
        <div className="login-page__grid">
          <LoginForm onEntrar={aoEntrar} carregando={carregando} />

          <div className="form-card">
            <form
              className="form-card__form"
              onSubmit={(event) => event.preventDefault()}
            >
              <fieldset className="form-card__fieldset">
                <legend className="form-card__legend">Criar conta</legend>
                <div className="form-grid login-page__fields">
                  <label className="form-field form-field--full">
                    <span>Nome completo</span>
                    <input
                      type="text"
                      name="cadastro-nome"
                      placeholder="Seu nome"
                      required
                      autoComplete="name"
                    />
                  </label>
                  <label className="form-field form-field--full">
                    <span>E-mail</span>
                    <input
                      type="email"
                      name="cadastro-email"
                      placeholder="seu@email.com"
                      required
                      autoComplete="email"
                    />
                  </label>
                  <label className="form-field form-field--full">
                    <span>Senha</span>
                    <input
                      type="password"
                      name="cadastro-senha"
                      placeholder="Mínimo 8 caracteres"
                      required
                      autoComplete="new-password"
                      minLength={8}
                      value={senhaCadastro}
                      onChange={(event) => setSenhaCadastro(event.target.value)}
                    />
                    {senhaCadastro ? (
                      <small
                        className="cadastro-senha-aviso"
                        style={{ color: senhaCurta ? '#ff6b6b' : '#22c55e' }}
                      >
                        {senhaCurta
                          ? 'A senha deve ter pelo menos 8 caracteres.'
                          : 'Senha válida!'}
                      </small>
                    ) : null}
                  </label>
                </div>
              </fieldset>
              <div className="form-card__actions login-page__actions">
                <button className="btn btn-primary" type="submit">
                  Criar conta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
