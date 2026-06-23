# Iara Games — O coração dos jogos brasileiros

> **FIAP · Grupo 3** · Etapa 3 · Sprint 03 · **Etapa 4 · Redesign de Interação**  
> **Status:** Em desenvolvimento  
> **Conceito:** Uma plataforma de e-commerce mística e moderna, focada em dar visibilidade aos jogos produzidos no Brasil.

A Iara Games não é apenas uma loja; é uma imersão nas águas do desenvolvimento nacional. O projeto utiliza uma estética *dark mode* profunda, inspirada nas lendas amazônicas, equilibrada com CSS moderno, **Bootstrap na casca** (home e páginas internas) e identidade visual alinhada ao manual da marca (evolução a partir da Etapa 2).

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
- **Feedback em tempo real** — região `aria-live` informa quantos jogos foram encontrados
- **Estado vazio amigável** — mensagem clara + botão “Limpar busca” (sem culpar o usuário)
- **Cards com contexto** — gênero, preço, `alt` descritivo e “Ver detalhes”
- **Menu simplificado** — itens secundários agrupados em “Mais”; login destacado como “Entrar”

Arquivos do redesign: `redesign/index.html`, `redesign/redesign.css`, `redesign/redesign.js` (reutiliza `assets/css/style.css` e imagens da identidade).

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
| Loja | `pages/loja.html` | Página mínima (stub); catálogo completo na próxima evolução |
| Biblioteca | `pages/biblioteca.html` | Página mínima (stub) |
| Fórum | `pages/forum.html` | Página mínima (stub) |
| Comunidade | `pages/comunidade.html` | Salas de chat (protótipo front-end) |
| Login | `pages/login.html` | Entrar e criar conta (dois blocos no mesmo fluxo) |
| Suporte | `pages/suporte.html` | Feedback e contato para jogadores/visitantes |
| Cadastro de jogo | `pages/cadastro-jogo.html` | Envio de dados do jogo por estúdios/desenvolvedores |

A **home** e as páginas em `pages/` (shell **`ig-page`**) usam Bootstrap na navegação e apontam para essas rotas; Loja, Biblioteca e Fórum são **stubs** acessíveis para evitar links quebrados até a implementação completa.

> **Entrega FIAP (Etapa 3):** persona, ESG, justificativas de UX/UI e evolução do protótipo ao longo das sprints devem constar no **PDF** enviado na plataforma; este README resume o escopo técnico do repositório na **Sprint 03**.

---

## Estrutura de arquivos (raiz do projeto)

```
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos globais e design tokens
│   ├── images/             # Imagens do hero, capas dos cards, etc.
│   └── videos/             # Vídeos de apoio (Fase 3); uso opcional no HTML/CSS
├── pages/
│   ├── loja.html           # Stub / em evolução
│   ├── biblioteca.html     # Stub / em evolução
│   ├── forum.html          # Stub / em evolução
│   ├── comunidade.html      # Chat por jogo / conversa aberta (protótipo)
│   ├── login.html          # Entrar / criar conta
│   ├── suporte.html        # Formulário de feedback
│   └── cadastro-jogo.html  # Formulário de cadastro de jogo
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
