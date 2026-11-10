/**
 * @param {{
 *   sessao: import('../types/auth.js').Sessao | null
 *   erro: string | null
 * }} props
 */
export function LoginStatus({ sessao, erro }) {
  if (sessao) {
    return (
      <p className="login-status login-status--ok" role="status">
        Bem-vinda, {sessao.nome}. E-mail: {sessao.email}
      </p>
    )
  }

  if (erro) {
    return (
      <p className="login-status login-status--erro" role="alert">
        {erro}
      </p>
    )
  }

  return null
}
