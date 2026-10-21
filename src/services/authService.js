/**
 * Consulta provisória. A Pessoa 4 chama a DummyJSON.
 *
 * @param {import('../types/auth.js').Credenciais} credenciais
 * @returns {Promise<import('../types/auth.js').Sessao>}
 */
export async function entrar(credenciais) {
  void credenciais

  throw new Error('A Pessoa 4 liga a API.')
}
