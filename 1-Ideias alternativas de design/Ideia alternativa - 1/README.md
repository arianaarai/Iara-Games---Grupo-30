# Iara Games

Plataforma de jogos independentes brasileiros. Projeto desenvolvido para a FIAP - Web Genesis (Sprint 01).

## Contexto e proposta

A Iara Games é uma plataforma focada na venda e divulgação de jogos independentes brasileiros. A ideia é criar um espaço dedicado para desenvolvedores nacionais publicarem seus jogos e para jogadores descobrirem produções feitas no Brasil.

O nome faz referência à Iara, entidade do folclore brasileiro (mãe-d'água), conectando a identidade nacional à proposta da plataforma.

## Pesquisa de plataformas

Foram analisadas três plataformas de distribuição de jogos como referência de mercado:

### Steam

Maior plataforma de distribuição digital de jogos do mundo. Utiliza destaque visual forte para jogos em promoção e recomendações personalizadas.

### GOG

Plataforma conhecida por vender jogos sem DRM e valorizar jogos independentes. Possui interface limpa e foco em descoberta de títulos.

### Nuuvem

Plataforma brasileira de venda de jogos digitais. Inspirou a linguagem visual voltada ao público nacional.

## Design

### Paleta de cores (`:root`)

Paleta **análoga** (verde + azul + turquesa), alinhada ao Cap. 6: cores frias que remetem a calma e confiança, e à identidade da Iara (mãe-d'água, natureza brasileira).

| Uso              | Cor                   | HEX       | Justificativa                                                                                           |
| ---------------- | --------------------- | --------- | ------------------------------------------------------------------------------------------------------- |
| Fundo principal  | Azul petróleo         | `#0F2A2E` | Representa a água e a natureza, conectando com a lenda da Iara. |
| Fundo secundário | Verde floresta escuro | `#1E3D3F` | Transição para o verde; reforça a conexão com natureza brasileira e folclore.                           |
| Cor destaque     | Verde água            | `#2EC4B6` | Verde-água associado à Iara (mãe-d'água); usada em botões, links, bordas e destaques.                   |
| Highlight        | Roxo                  | `#A855F7` | Contraste para hovers e links; destaque em menus.                                                       |
| Texto            | Branco                | `#F5F7F7` | Contraste adequado para legibilidade; cor neutra sobre fundos escuros.                                  |

**Onde cada cor é usada:** header/footer (fundo secundário), body (gradiente fundo principal → secundário), botões e links (destaque/highlight), cards (bordas destaque), texto geral (cor texto).

### Tipografia

- **Títulos (h1, h2, h3, logo):** Poppins – geométrica e moderna, boa legibilidade em tamanhos grandes.
- **Texto:** Open Sans – legível em blocos longos, combina bem com Poppins.

### Decisões visuais

1. **Bordas arredondadas** (8px em botões, 12px em cards) – Deixam a interface mais amigável e contemporânea, sem parecer rígida.
2. **Ícones nos cards** (Font Awesome) – Ícones de gênero (bússola, carro, xadrez) reforçam a informação sem depender só de texto; ajudam daltônicos e leitura rápida.
3. **Padrão de cards** – Altura fixa na imagem, borda com cor destaque e hover em roxo; organização visual consistente para facilitar a comparação entre jogos. Cards foram utilizados para exibir jogos porque facilitam a comparação rápida entre títulos, permitindo visualizar imagem, gênero e ação principal de forma organizada.

### Funcionalidades da home

- **Hero** com vídeo de fundo e overlay em gradiente
- **Seção Iara** – texto inspirado na lenda da mãe-d'água
- **Jogos em destaque** – cards com imagem, título, gênero (com ícones) e link
- **Footer** com links para Contato e Suporte

## Tecnologias

Durante o desenvolvimento desta sprint, o objetivo do grupo foi criar uma primeira visão da plataforma, focando principalmente na identidade visual e organização da home page. Como esta é apenas a versão inicial do projeto, optamos por uma estrutura simples em HTML e CSS, que poderá evoluir nas próximas sprints com novas funcionalidades.

- HTML5
- CSS3
- Font Awesome (ícones nos cards)
- Vídeo em background (hero)

## Como executar

1. Clone o repositório
2. Abra o arquivo `index.html` no navegador
3. Ou use Live Server no VS Code

## Estrutura do projeto

```
├── index.html
├── css/
│   └── style.css
├── images/
├── videos/
│   └── hero-banner.mp4
├── pages/
│   ├── loja.html
│   ├── biblioteca.html
│   ├── forum.html
│   ├── suporte.html
│   └── login.html
└── README.md
```

## UX e Acessibilidade

### Usabilidade

- **Menu claro** – Links para as 5 áreas do piloto (Loja, Biblioteca, Fórum, Suporte, Login) sempre visíveis no header.
- **CTAs visíveis** – Botões Explorar jogos, Ver jogo e Login com cor de destaque e efeito hover.
- **Hierarquia visual** – Títulos em Poppins, conteúdo em blocos definidos (hero, lenda, cards); informações principais em evidência.

### Acessibilidade

- **Contraste** – Texto branco sobre fundos escuros; cores em conformidade com WCAG para legibilidade.
- **Semântica e `alt`** – Uso de header, nav, main, section, article, footer; `alt` descritivo em todas as imagens.
- **Foco visível** – Outline em todos os links ao navegar por teclado (`:focus` com cor de destaque), permitindo uso sem mouse.
