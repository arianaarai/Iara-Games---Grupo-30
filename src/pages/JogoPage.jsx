
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { jogos } from '../data/jogos.js'

export function JogoPage() {
  const { id } = useParams()
  const [favorito, setFavorito] = useState(false)

  // Mantem o link de exemplo funcionando
  const jogoId = id === 'exemplo' ? 'corrida-florestal' : id

  // Encontra o jogo pelo ID da URL
  const jogo = jogos.find((item) => item.id === jogoId)

  if (!jogo) {
    return (
      <section className="section section--page-intro">
        <div className="section__inner">
          <h1>Jogo não encontrado</h1>
          <p>Não encontramos esse jogo no catálogo.</p>
          <Link to="/">← Voltar para a loja</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section section--page-intro">
      <div className="section__inner">
        <div className="mb-4">
          <Link to="/">← Voltar para a loja</Link>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-5">
            <img
              src={jogo.capa}
              alt={`Capa do jogo ${jogo.nome}`}
              className="img-fluid rounded-4 w-100"
            />
          </div>

          <div className="col-12 col-lg-7">
            <h1 className="section__title">
              {jogo.nome}
            </h1>

            <p>
              <strong>Gênero:</strong> {jogo.genero}
            </p>

            <h2 className="h3 text-success">
              {jogo.preco}
            </h2>

            <p className="mt-3">
              {jogo.descricao}
            </p>

            <button
              type="button"
              className="btn btn-success mt-3"
              aria-pressed={favorito}
              onClick={() => setFavorito(!favorito)}
            >
              {favorito
                ? '♥ Remover dos favoritos'
                : '♡ Adicionar aos favoritos'}
            </button>

            <p role="status" className="mt-3">
              {favorito
                ? 'Jogo adicionado aos favoritos!'
                : ''}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
