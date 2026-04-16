# Iara Games — O coração dos jogos brasileiros

> **FIAP · Etapa 2 · Sprint 02**  
> **Status:** Em desenvolvimento  
> **Conceito:** Uma plataforma de e-commerce mística e moderna, focada em dar visibilidade aos jogos produzidos no Brasil.

A Iara Games não é apenas uma loja; é uma imersão nas águas do desenvolvimento nacional. O projeto utiliza uma estética *dark mode* profunda, inspirada nas lendas amazônicas, equilibrada com CSS moderno e identidade visual consolidada na Sprint 02.

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

O projeto foi construído com **CSS3 puro**, com variáveis (`:root`), grid e camadas visuais:

* **Glassmorphism:** `backdrop-filter: blur(10px)` (e `-webkit-backdrop-filter` para compatibilidade), combinado a fundos translúcidos em **cards**, **cabeçalho fixo**, **painel do hero** e **rodapé**, simulando profundidade e leitura sobre o fundo.
* **Layout responsivo:** **CSS Grid** com `auto-fit` / `minmax` para lançamentos e ofertas; **Flexbox** no cabeçalho e em blocos de ação.
* **Interatividade:** microinterações em `hover` com `transform`, `translateY` e `box-shadow` (*glow*) para feedback imediato; estados de foco visíveis para navegação por teclado.
* **Responsividade:** *media queries* ajustam padding, grid e tamanhos de título em **rem** (incluindo telas estreitas), mantendo hierarquia sem depender de valores fixos em px para títulos.

---

## Estrutura de arquivos (raiz do projeto)

```
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos globais e design tokens
│   └── images/             # Imagens do hero, capas dos cards, etc.
├── pages/                  # Loja, biblioteca, fórum, login, suporte (placeholders)
├── 1-Ideias alternativas de design/   # Explorações e materiais de apoio
├── index.html              # Página inicial (HTML semântico)
└── README.md
```

---

## Repositório

Repositório oficial do **Grupo 30** (entrega e desenvolvimento): **[github.com/arianaarai/Iara-Games---Grupo-30](https://github.com/arianaarai/Iara-Games---Grupo-30)**.
