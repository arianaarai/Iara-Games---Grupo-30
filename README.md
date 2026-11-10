# Iara Games — O coração dos jogos brasileiros

> **FIAP · Grupo 3** · Etapa 3 · Sprint 03 · **Etapa 4 · Redesign de Interação** · **Etapa 5 · Interatividade com JavaScript** · **Etapa 6 · Loja em React** · **Etapa 7 · Login em React**  
> **Status:** Em desenvolvimento  
> **Conceito:** Uma plataforma de e-commerce mística e moderna, focada em dar visibilidade aos jogos produzidos no Brasil.

A Iara Games não é apenas uma loja; é uma imersão nas águas do desenvolvimento nacional. O projeto utiliza uma estética *dark mode* profunda, inspirada nas lendas amazônicas, equilibrada com CSS moderno, **Bootstrap na casca** (home e páginas internas) e identidade visual alinhada ao manual da marca (evolução a partir da Etapa 2).

## Visão geral (comece por aqui)

O site mistura **HTML estático** (home, suporte, cadastro de jogo, etc.) com **duas páginas em React** (Loja e Login). Topo, menu e rodapé continuam iguais; só o **miolo** da Loja e do Login é React.

| O que | URL / arquivo | Como abrir |
| :--- | :--- | :--- |
| **Loja (React)** | `pages/loja.html` | `npm run dev` → http://localhost:5173/pages/loja.html |
| **Login (React)** | `pages/login.html` | `npm run dev` → http://localhost:5173/pages/login.html |
| **Home e demais páginas** | `index.html`, `pages/*.html` | `python3 -m http.server 8080` **ou** `npm run dev` |

**Deploy (Vercel):**

- Loja: https://iara-games-grupo-30.vercel.app/pages/loja.html  
- Login: https://iara-games-grupo-30.vercel.app/pages/login.html  

### Onde está o React

| Página | HTML (casca) | Entrada Vite | Página / app React | Componentes e dados |
| :--- | :--- | :--- | :--- | :--- |
| Loja | `pages/loja.html` | `src/main.jsx` | `src/App.jsx`, `src/pages/LojaPage.jsx`, `src/pages/JogoPage.jsx` | `src/data/jogos.js`, `src/favoritos.js` |
| Login | `pages/login.html` | `src/login-main.jsx` | `src/pages/LoginPage.jsx` | `src/components/LoginForm.jsx`, `src/components/LoginStatus.jsx`, `src/services/authService.js` |

### Rodar o React localmente

Na raiz do repositório:

```bash
npm install
npm run dev
```

Use **http://localhost:5173** (não `127.0.0.1` se o dev server não responder).  
Para gerar o build de produção: `npm run build` e depois `npm run preview`.

O `python3 -m http.server` serve a home e páginas só em HTML, mas **não** monta a Loja nem o Login em React — para essas duas, use sempre o Vite.

As seções abaixo detalham cada etapa da FIAP (4 a 7) e o restante do projeto.

## Redesign de Interação (Etapa 4)

Atividade **Redesign de Interação: da análise ao protótipo** — análise crítica da home original e protótipo reformulado no mesmo repositório.

| Versão | Arquivo | Descrição |
| :--- | :--- | :--- |
| **Home original (analisada)** | [`index.html`](index.html) | Versão Sprint 03 — base para o PDF de análise |
| **Protótipo reformulado** | [`redesign/index.html`](redesign/index.html) | Melhorias de interação (CTAs, busca, filtros, acessibilidade) |

### Como visualizar localmente

Na raiz do repositório:

```bash
python3 -m http.server 8080
```

- Home original: http://localhost:8080/index.html  
- Protótipo redesign: http://localhost:8080/redesign/

### Deploy (GitHub Pages)

1. Repositório → **Settings** → **Pages**
2. Source: branch `main`, pasta **`/ (root)`**
3. URLs após publicar:
   - Original: `https://<usuario>.github.io/Iara-Games---Grupo-30/`
   - Redesign: `https://<usuario>.github.io/Iara-Games---Grupo-30/redesign/`

### O que mudou no protótipo (`redesign/`)

- **Hero com CTAs** — “Explorar lançamentos” e “Ver ofertas” orientam o próximo passo
- **Busca + filtros por gênero** — reduz trabalho manual de rolar a página inteira
- **Feedback em tempo real** — região aria-live informa quantos jogos foram encontrados e exibe o termo pesquisado
- **Evolução da busca** — o contador agora informa também o termo pesquisado, deixando o retorno mais claro para o usuário
- **Estado vazio amigável** — mensagem clara + botão “Limpar busca” (sem culpar o usuário)
- **Cards com contexto** — gênero, preço, `alt` descritivo e “Ver detalhes”
- **Menu simplificado** — itens secundários agrupados em “Mais”; login destacado como “Entrar”

Arquivos do redesign: `redesign/index.html`, `redesign/redesign.css`, `redesign/redesign.js` (reutiliza `assets/css/style.css` e imagens da identidade).

## Interatividade com JavaScript (Etapa 5)

Na etapa anterior o grupo analisou problemas de interação e entregou o protótipo em HTML e CSS (`redesign/`, `pages/login.html`, `pages/suporte.html`). Nesta etapa o mesmo repositório foi evoluído: as páginas já existentes ganharam comportamentos dinâmicos por JavaScript externo, sem refazer o visual.

- **Home (`redesign/`)** — a busca e os filtros, que na Etapa 4 eram proposta de interação, passaram a filtrar os cards de fato.
- **Login (histórico, Etapa 5)** — validação de senha em `assets/js/login.js`. Na **Etapa 7** o Login passou para React; a mesma regra dos 8 caracteres ficou em `LoginPage.jsx`.
- **Suporte** — o contato, que era só estático, agora valida campos, conta caracteres, controla o botão de envio e confirma o feedback na tela.
- **Cadastro de jogo** — o formulário longo agora mostra campos conforme o status, valida os dados e exibe um resumo antes do envio.

O JavaScript fica em arquivos externos vinculados ao HTML.

### Busca e filtros

Permitir que o usuário encontre jogos sem precisar rolar a página inteira.

A busca e os filtros foram implementados com JavaScript externo em `redesign/redesign.js`, utilizando os eventos `input` e `click` para filtrar os cards.

- Busca por nome do jogo
- Filtro por gênero
- Contador de resultados em tempo real, incluindo o termo pesquisado
- Estado vazio + botão “Limpar busca”

**Arquivo:** `redesign/redesign.js`

### Validação de senha mínima (Etapa 5 — referência histórica)

Na Etapa 5 a validação ficou em `assets/js/login.js`. Hoje o Login é React (`src/pages/LoginPage.jsx`); o arquivo `login.js` permanece no repositório como registro da etapa anterior.

### Formulário de suporte

Permitir que o usuário saiba o que falta no contato e receba confirmação depois de enviar o feedback.

A interatividade foi implementada com JavaScript externo em `assets/js/suporte.js`, utilizando os eventos `input`, `blur`, `change` e `submit` para validar os campos e atualizar a tela.

- Contador de caracteres na descrição (mínimo 20, máximo 500).
- Validação de e-mail, tipo de feedback e descrição: mensagem de erro em vermelho ao sair do campo.
- Botão “Enviar feedback” desabilitado até o formulário ficar válido.
- Faixa verde de confirmação após o envio, sem recarregar a página.

**Arquivo:** `assets/js/suporte.js`

### Cadastro de jogo

Permitir que o desenvolvedor cadastre o jogo com mais clareza, sem preencher um formulário longo de uma vez só, e revise os dados antes de enviar.

A interatividade foi implementada com JavaScript externo em `assets/js/cadastro-jogo.js`, utilizando os eventos `change`, `click`, `input`, `blur` e `submit` para mostrar campos, validar e montar a prévia.

- Campos condicionais: “Já disponível” mostra o link do jogo; “Em desenvolvimento” mostra a previsão de lançamento.
- Contador de caracteres na descrição (mínimo 30, máximo 1000).
- Validação de e-mail, nomes, gênero, status, descrição e link ou previsão: mensagem de erro em vermelho ao sair do campo.
- Botão “Visualizar cadastro” desabilitado até o formulário ficar válido; monta o resumo antes do envio.
- “Confirmar e enviar” só libera depois da prévia; faixa verde confirma o envio, sem recarregar a página.

**Arquivo:** `assets/js/cadastro-jogo.js`

## Loja em React (Etapa 6)

- O miolo de `pages/loja.html` é React (lista, busca, filtro por gênero, favoritos no navegador, página do jogo).
- Ver **[Visão geral](#visão-geral-comece-por-aqui)** para URLs, `npm run dev` e tabela de arquivos.

## Login em React (Etapa 7)

- O miolo de `pages/login.html` é React, com **Já tenho conta** e **Criar conta** na mesma tela.
- **Entrar:** usuário + senha na API [DummyJSON](https://dummyjson.com/docs/auth) — `POST https://dummyjson.com/auth/login`. Conta de teste: `emilys` / `emilyspass`. Sucesso mostra nome e e-mail (`LoginStatus.jsx`); erro mostra mensagem sem quebrar a página.
- **Criar conta:** só interface (não grava na API). Validação de senha mínima (8 caracteres) no próprio React.
- Ver **[Visão geral](#visão-geral-comece-por-aqui)** para deploy, `npm run dev` e tabela de arquivos.

## Pesquisa de plataformas

Foram analisadas três plataformas de distribuição de jogos como referência de mercado:

### Steam

Maior plataforma de distribuição digital de jogos do mundo. Utiliza destaque visual forte para jogos em promoção e recomendações personalizadas.

### GOG

Plataforma conhecida por vender jogos sem DRM e valorizar jogos independentes. Possui interface limpa e foco em descoberta de títulos.

### Nuuvem

Plataforma brasileira de venda de jogos digitais. Inspirou a linguagem visual voltada ao público nacional.

---

## Identidade visual e design system

A escolha das cores e fontes foi estrategicamente pensada para unir **acessibilidade**, **modernidade** e **folclore**.

### Paleta de cores

| Cor | Hex | Função de design |
| :--- | :--- | :--- |
| **Texto** | `#e2e8f0` | Leitura suave e sem fadiga visual. |
| **Verde marinho** | `#67e8f9` | Destaque, títulos e estados de hover (brilho místico). |
| **Preto profundo** | `#020617` | Fundo principal (profundidade dos rios). |
| **Verde musgo** | `#22c55e` | Call to action (CTA), preços e elementos de sucesso. |
| **Diamante** | `#0c8b8b` | Gradientes e transições de profundidade. |
| **Vidro (alpha)** | `#ffffff1a` | Camada translúcida do glassmorphism (≈10%). |

### Tipografia e acessibilidade

O projeto utiliza um sistema de fontes híbrido para garantir leitura e hierarquia:

* **Títulos de impacto (`Russo One`):** marca, hero e títulos de seção — presença forte e identidade *gamer*.
* **Subtítulos e interface (`Poppins`):** navegação, subtítulos, botões e preços — geometria moderna e leitura clara em UI.
* **Corpo de texto (`Atkinson Hyperlegible`):** desenvolvida pelo *Braille Institute*, com distinção clara de caracteres para descrições e leitura prolongada.

---

## Destaques técnicos do CSS

O projeto combina **folha global** ([`assets/css/style.css`](assets/css/style.css)) — variáveis (`:root`), tokens da identidade e componentes customizados — com **Bootstrap 5.3.3** (via CDN) na **casca** da experiência:

* **Home (`body.ig-home`) e páginas internas (`body.ig-page`):** **Bootstrap** para **`navbar`**, **`container`**, **JavaScript do menu** (`bootstrap.bundle`) e utilitários de layout; o miolo específico de cada tela continua estilizado em **`style.css`** (gradientes de fundo, glass, formulários `.form-card`, botões de marca, hero e vitrines da home).
* **Home:** além da nav, Bootstrap estrutura o **grid responsivo** das vitrines (**`row`**, **`row-cols-*`**), **cards** das seções Lançamentos/Ofertas e espaçamento; efeitos de identidade (glow, painel do hero, etc.) ficam sob **`body.ig-home`** no CSS customizado.
* **Formulários e grids legados** em `style.css` usam **CSS Grid** (`auto-fit` / `minmax`) onde faz sentido, independentemente do grid Bootstrap da home.

Outros pontos:

* **Glassmorphism:** `backdrop-filter: blur(10px)` (e `-webkit-backdrop-filter` para compatibilidade), combinado a fundos translúcidos em **cards**, **cabeçalho**, **painel do hero** (home) e **rodapé**, conforme o caso.
* **Interatividade:** microinterações em `hover` com `transform`, `translateY` e `box-shadow` (*glow*) onde aplicável; **`:focus-visible`** em CTAs, links e controles para foco por teclado.
* **Responsividade:** *media queries* e valores em **rem**; a home e o shell das páginas internas aproveitam breakpoints e componentes responsivos do Bootstrap onde aplicável.

---

## Sprint 03 — páginas e formulários (protótipo)

Fluxo em **HTML e CSS**; formulários com `action="#"` (sem back-end), foco em semântica, grid e usabilidade.

| Página | Arquivo | Conteúdo |
| :--- | :--- | :--- |
| Home | `index.html` | Hero, lançamentos, ofertas, destaques |
| Loja | `pages/loja.html` | React: lista, busca, filtro, favoritos e página do jogo |
| Biblioteca | `pages/biblioteca.html` | Página mínima (stub) |
| Fórum | `pages/forum.html` | Página mínima (stub) |
| Comunidade | `pages/comunidade.html` | Salas de chat (protótipo front-end) |
| Login | `pages/login.html` | React: entrar e criar conta (dois blocos no mesmo fluxo) |
| Suporte | `pages/suporte.html` | Feedback e contato para jogadores/visitantes |
| Cadastro de jogo | `pages/cadastro-jogo.html` | Envio de dados do jogo por estúdios/desenvolvedores |

A **home** e as páginas em `pages/` (shell **`ig-page`**) usam Bootstrap na navegação e apontam para essas rotas. A Loja e o Login abrem em React. Biblioteca e Fórum seguem como páginas mínimas até a implementação completa.

> **Entrega FIAP (Etapa 3):** persona, ESG, justificativas de UX/UI e evolução do protótipo ao longo das sprints devem constar no **PDF** enviado na plataforma; este README resume o escopo técnico do repositório na **Sprint 03**.

---

## Estrutura de arquivos (raiz do projeto)

```
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos globais e design tokens
│   ├── js/
│   │   ├── login.js         # Validação de senha (etapa 5; o Login atual está em React)
│   │   ├── suporte.js       # Contador, validação e envio (suporte)
│   │   └── cadastro-jogo.js # Campos condicionais, preview e envio
│   ├── images/             # Imagens do hero, capas dos cards, etc.
│   └── videos/             # Vídeos de apoio (Fase 3); uso opcional no HTML/CSS
├── src/
│   ├── main.jsx            # Entrada do React na Loja
│   ├── login-main.jsx      # Entrada do React no Login
│   ├── App.jsx             # Rotas da lista e da página do jogo
│   ├── favoritos.js        # Favoritos salvos no navegador
│   ├── data/
│   │   └── jogos.js        # Catálogo da Loja
│   ├── components/
│   │   ├── LoginForm.jsx   # Formulário de entrar
│   │   └── LoginStatus.jsx # Mensagem de sessão ou erro
│   ├── services/
│   │   └── authService.js  # Consulta da API de login
│   ├── types/
│   │   └── auth.js         # Contratos de usuário e sessão
│   ├── styles/
│   │   └── login.css       # Estilos do Login
│   └── pages/
│       ├── LojaPage.jsx    # Lista, busca, filtro e favoritos
│       ├── JogoPage.jsx    # Capa, preço, descrição e favorito
│       └── LoginPage.jsx   # Login e criar conta
├── package.json
├── package-lock.json
├── vite.config.js
├── pages/
│   ├── loja.html           # Casca da Loja; o miolo é React
│   ├── biblioteca.html     # Stub / em evolução
│   ├── forum.html          # Stub / em evolução
│   ├── comunidade.html      # Chat por jogo / conversa aberta (protótipo)
│   ├── login.html          # Casca do Login; o miolo é React
│   ├── suporte.html        # Feedback com JS (contador, validação, envio)
│   └── cadastro-jogo.html  # Cadastro com JS (campos condicionais e preview)
├── redesign/
│   ├── index.html          # Home reformulada (Etapa 4)
│   ├── redesign.css        # Estilos específicos do redesign
│   ├── redesign.js         # Busca e filtros
│   └── README.md           # Como visualizar o protótipo
├── .gitignore
├── 1-Ideias alternativas de design/   # Explorações e materiais de apoio
├── index.html              # Página inicial original (HTML semântico)
└── README.md
```

---

## Repositório

Repositório oficial do **Grupo 3** (entrega e desenvolvimento): **[github.com/arianaarai/Iara-Games---Grupo-30](https://github.com/arianaarai/Iara-Games---Grupo-30)**.
