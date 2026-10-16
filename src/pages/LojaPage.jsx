import { Link } from 'react-router-dom'

export function LojaPage() {
  return (
    <section className="section section--page-intro" aria-labelledby="loja-heading">
      <div className="section__inner section__inner--narrow">
        <h1 id="loja-heading" className="section__title">Loja</h1>
        <p className="section__lead">A lista de jogos entra aqui.</p>
        <p className="section__lead mb-0">
          <Link to="/jogo/exemplo">Ir para a página de um jogo</Link>
        </p>
      </div>
    </section>
  )
}
