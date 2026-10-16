import { Link } from 'react-router-dom'

export function JogoPage() {
  return (
    <section className="section section--page-intro" aria-labelledby="jogo-heading">
      <div className="section__inner section__inner--narrow">
        <h1 id="jogo-heading" className="section__title">Página do jogo</h1>
        <p className="section__lead">Capa, preço, gênero e descrição entram aqui.</p>
        <p className="section__lead mb-0">
          <Link to="/">Voltar para a loja</Link>
        </p>
      </div>
    </section>
  )
}
