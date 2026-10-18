
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const jogoExemplo = {
  nome: 'Corrida Florestal',
  preco: 'R$ 139,90',
  genero: 'Corrida',
  capa: '/assets/images/lagoa mistica.png',
  descricao:
    'Um jogo de corrida com cenarios inspirados na natureza. Descricao provisoria para demonstrar a pagina.'
}

export function JogoPage() {
  const { id } = useParams()
  const [favorito, setFavorito] = useState(false)

  if (id !== 'exemplo') {
    return (
      <section className="section section--page-intro">
        <div className="section__inner">
          <h1>Jogo não encontrado</h1>
          <Link to="/">Voltar para a loja</Link>
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
              src={jogoExemplo.capa}
              alt={`Capa do jogo ${jogoExemplo.nome}`}
              className="img-fluid rounded-4 w-100"
            />
          </div>

          <div className="col-12 col-lg-7">
            <h1 className="section__title">
              {jogoExemplo.nome}
            </h1>

            <p>
              <strong>Gênero:</strong> {jogoExemplo.genero}
            </p>

            <h2 className="h3 text-success">
              {jogoExemplo.preco}
            </h2>

            <p className="mt-3">
              {jogoExemplo.descricao}
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
