/**
 * @param {import('../types/auth.js').Credenciais} credenciais
 * @returns {Promise<import('../types/auth.js').Sessao>}
 */
export async function entrar(credenciais) {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: credenciais.usuario,
      password: credenciais.senha,
    }),
  })

  if (!response.ok) {
    throw new Error('login-falhou')
  }

  const dados = await response.json()
  const nome = [dados.firstName, dados.lastName]
    .filter(Boolean)
    .join(' ')
    .trim()

  return {
    nome: nome || credenciais.usuario,
    email: dados.email ?? null,
  }
}
