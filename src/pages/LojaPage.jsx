import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { jogos } from '../data/jogos.js'
import { alternarFavorito, lerFavoritos } from '../favoritos.js'

export function LojaPage() {
  const [busca, setBusca] = useState('')
  const [genero, setGenero] = useState('Todos')
  const [somenteFavoritos, setSomenteFavoritos] = useState(false)
  const [favoritos, setFavoritos] = useState(lerFavoritos)

  const generos = useMemo(
    () => [...new Set(jogos.map((jogo) => jogo.genero))],
    [],
  )

  const termo = busca.trim()
  const jogosFiltrados = jogos.filter((jogo) => {
    const correspondeNome = jogo.nome
      .toLocaleLowerCase('pt-BR')
      .includes(termo.toLocaleLowerCase('pt-BR'))
    const correspondeGenero = genero === 'Todos' || jogo.genero === genero
    const correspondeFavorito = !somenteFavoritos || favoritos.includes(jogo.id)

    return correspondeNome && correspondeGenero && correspondeFavorito
  })

  const filtrosAtivos = termo !== '' || genero !== 'Todos' || somenteFavoritos

  function limparBusca() {
    setBusca('')
    setGenero('Todos')
    setSomenteFavoritos(false)
  }

  return (
    <section className="section section--page-intro" aria-labelledby="loja-heading">
      <div className="section__inner">
        <h1 id="loja-heading" className="section__title">Loja</h1>

        <div className="loja-filtros">
          <div className="loja-filtros__busca">
            <label className="visually-hidden" htmlFor="busca-jogos">Buscar jogo</label>
            <input
              id="busca-jogos"
              type="search"
              placeholder="Buscar jogo"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
            />
          </div>

          <div className="loja-filtros__genero">
            <label className="visually-hidden" htmlFor="filtro-genero">Filtrar gênero</label>
            <select
              id="filtro-genero"
              className={genero === 'Todos' ? 'is-placeholder' : undefined}
              value={genero}
              onChange={(event) => setGenero(event.target.value)}
            >
              <option value="Todos">Filtrar gênero</option>
              {generos.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="loja-visao" role="group" aria-label="O que mostrar">
            <button
              type="button"
              className={somenteFavoritos ? 'loja-favoritos' : 'loja-favoritos is-active'}
              aria-pressed={!somenteFavoritos}
              onClick={() => setSomenteFavoritos(false)}
            >
              Todos os jogos
            </button>
            <button
              type="button"
              className={somenteFavoritos ? 'loja-favoritos is-active' : 'loja-favoritos'}
              aria-pressed={somenteFavoritos}
              onClick={() => setSomenteFavoritos(true)}
            >
              Favoritos
            </button>
          </div>
        </div>

        <p className="loja-contador" aria-live="polite">
          {jogosFiltrados.length === 1
            ? '1 jogo encontrado'
            : `${jogosFiltrados.length} jogos encontrados`}
          {termo ? ` para “${termo}”` : ''}
        </p>

        {jogosFiltrados.length === 0 ? (
          <div className="loja-vazio" role="status">
            <p>
              {somenteFavoritos && termo === '' && genero === 'Todos'
                ? 'Nenhum jogo nos favoritos.'
                : 'Nenhum jogo encontrado.'}
            </p>
            {filtrosAtivos ? (
              <button type="button" className="loja-limpar" onClick={limparBusca}>
                Limpar busca
              </button>
            ) : null}
          </div>
        ) : (
          <div className="loja-grid">
            {jogosFiltrados.map((jogo) => {
              const favorito = favoritos.includes(jogo.id)

              return (
                <article className="jogo-card" key={jogo.id}>
                  <button
                    type="button"
                    className="jogo-card__favorito"
                    aria-pressed={favorito}
                    aria-label={
                      favorito
                        ? `Remover ${jogo.nome} dos favoritos`
                        : `Adicionar ${jogo.nome} aos favoritos`
                    }
                    data-tooltip={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                    onClick={() => setFavoritos(alternarFavorito(jogo.id))}
                  >
                    {favorito ? '♥' : '♡'}
                  </button>
                  <Link to={`/jogo/${jogo.id}`}>
                    <img src={jogo.capa} alt={`Capa de ${jogo.nome}`} />
                    <h2>{jogo.nome}</h2>
                  </Link>
                  <p>{jogo.genero}</p>
                  <p className="jogo-card__preco">{jogo.preco}</p>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
