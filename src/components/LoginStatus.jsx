/**
 * Texto provisório. A Pessoa 3 mostra o nome da sessão ou o erro.
 *
 * @param {{
 *   sessao: import('../types/auth.js').Sessao | null
 *   erro: string | null
 * }} props
 */
export function LoginStatus({ sessao, erro }) {
  void sessao
  void erro

  return null
}
