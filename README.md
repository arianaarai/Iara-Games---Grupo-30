# Iara Games — O coração dos jogos brasileiros

> **FIAP · Etapa 3 · Sprint 03**  
> **Status:** Em desenvolvimento  
> **Conceito:** Uma plataforma de e-commerce mística e moderna, focada em dar visibilidade aos jogos produzidos no Brasil.

A Iara Games não é apenas uma loja; é uma imersão nas águas do desenvolvimento nacional. O projeto utiliza uma estética *dark mode* profunda, inspirada nas lendas amazônicas, equilibrada com CSS moderno, Bootstrap na casca da home e identidade visual alinhada ao manual da marca (evolução a partir da Etapa 2).

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

O projeto combina **folha global** ([`assets/css/style.css`](assets/css/style.css)) com **Bootstrap 5.3.3** (via CDN) na **página inicial**:

* **Home (`index.html`):** **Bootstrap** para `navbar`, `container`, sistema de **grid responsivo** das vitrines (`row`, `row-cols-*`), **cards**, **botões** e espaçamento; identidade visual e efeitos (glass, glow, gradiente de fundo) ficam sob **`body.ig-home`** no CSS customizado.
* **Demais telas e blocos:** continuam usando **CSS3** com variáveis (`:root`); onde faz sentido, **CSS Grid** com `auto-fit` / `minmax` (ex.: formulários e layouts em `style.css` — não é o grid principal das seções Lançamentos/Ofertas da home).

Outros pontos:

* **Glassmorphism:** `backdrop-filter: blur(10px)` (e `-webkit-backdrop-filter` para compatibilidade), combinado a fundos translúcidos em **cards**, **cabeçalho**, **painel do hero** (home) e **rodapé**, conforme o caso.
* **Interatividade:** microinterações em `hover` com `transform`, `translateY` e `box-shadow` (*glow*) onde aplicável; **`:focus-visible`** em CTAs e botões da home para foco por teclado.
* **Responsividade:** *media queries* e valores em **rem**; a home aproveita breakpoints e componentes responsivos do Bootstrap.

---

## Sprint 03 — páginas e formulários (protótipo)

Fluxo em **HTML e CSS**; formulários com `action="#"` (sem back-end), foco em semântica, grid e usabilidade.

| Página | Arquivo | Conteúdo |
| :--- | :--- | :--- |
| Home | `index.html` | Hero, lançamentos, ofertas, destaques |
| Loja | `pages/loja.html` | Página mínima (stub); catálogo completo na próxima evolução |
| Biblioteca | `pages/biblioteca.html` | Página mínima (stub) |
| Fórum | `pages/forum.html` | Página mínima (stub) |
| Login | `pages/login.html` | Entrar e criar conta (dois blocos no mesmo fluxo) |
| Suporte | `pages/suporte.html` | Feedback e contato para jogadores/visitantes |
| Cadastro de jogo | `pages/cadastro-jogo.html` | Envio de dados do jogo por estúdios/desenvolvedores |

A **home** usa Bootstrap e aponta para essas rotas; Loja, Biblioteca e Fórum são **stubs** acessíveis para evitar links quebrados até a implementação completa.

> **Entrega FIAP (Etapa 3):** persona, ESG, justificativas de UX/UI e evolução do protótipo ao longo das sprints devem constar no **PDF** enviado na plataforma; este README resume o escopo técnico do repositório na **Sprint 03**.

---

## Estrutura de arquivos (raiz do projeto)

```
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos globais e design tokens
│   └── images/             # Imagens do hero, capas dos cards, etc.
├── pages/
│   ├── loja.html           # Stub / em evolução
│   ├── biblioteca.html     # Stub / em evolução
│   ├── forum.html          # Stub / em evolução
│   ├── login.html          # Entrar / criar conta
│   ├── suporte.html        # Formulário de feedback
│   └── cadastro-jogo.html  # Formulário de cadastro de jogo
├── 1-Ideias alternativas de design/   # Explorações e materiais de apoio
├── index.html              # Página inicial (HTML semântico)
└── README.md
```

---

## Repositório

Repositório oficial do **Grupo 30** (entrega e desenvolvimento): **[github.com/arianaarai/Iara-Games---Grupo-30](https://github.com/arianaarai/Iara-Games---Grupo-30)**.
