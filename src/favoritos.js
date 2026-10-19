const CHAVE = 'iara-games-favoritos'

export function lerFavoritos() {
  try {
    const salvo = localStorage.getItem(CHAVE)
    const lista = salvo ? JSON.parse(salvo) : []
    return Array.isArray(lista) ? lista.filter((id) => typeof id === 'string') : []
  } catch {
    return []
  }
}

export function alternarFavorito(id) {
  const atual = lerFavoritos()
  const proximo = atual.includes(id)
    ? atual.filter((item) => item !== id)
    : [...atual, id]

  try {
    localStorage.setItem(CHAVE, JSON.stringify(proximo))
  } catch {
    return atual
  }

  return proximo
}
