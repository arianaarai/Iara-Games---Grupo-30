# Iara Games - O Coração dos jogos Brasileiro

> **Status:** Em deselvolvimento  
> **Conceito:** Uma plataforma de e-commerce mística e moderna, focada em dar visibilidade aos jogos produzidos no Brasil.

A Iara Games não é apenas uma loja; é uma imersão nas águas do desenvolvimento nacional. O projeto utiliza uma estética "Dark Mode" profunda, inspirada nas lendas amazônicas, equilibrada com tecnologias modernas de estilização.

## Pesquisa de plataformas

Foram analisadas três plataformas de distribuição de jogos como referência de mercado:

### Steam

Maior plataforma de distribuição digital de jogos do mundo. Utiliza destaque visual forte para jogos em promoção e recomendações personalizadas.

### GOG

Plataforma conhecida por vender jogos sem DRM e valorizar jogos independentes. Possui interface limpa e foco em descoberta de títulos.

### Nuuvem

Plataforma brasileira de venda de jogos digitais. Inspirou a linguagem visual voltada ao público nacional.

---

## Identidade Visual e Design System

A escolha das cores e fontes foi estrategicamente pensada para unir **acessibilidade**, **modernidade** e **folclore**.

### Paleta de Cores

| Cor | Hex | Função de Design |
| :--- | :--- | :--- |
| **Texto** | `#e2e8f0` | Leitura suave e sem fadiga visual. |
| **Verde Marinho** | `#67e8f9` | Destaque, títulos e estados de hover (brilho místico). |
| **Preto Profundo** | `#020617` | Fundo principal (profundidade dos rios). |
| **Verde Musgo** | `#22c55e` | Call to Action (CTA), preços e elementos de sucesso. |
| **Diamante** | `#0c8b8b` | Gradientes e transições de profundidade. |
| **Vidro (Alpha)** | `#ffffff1a` | Efeito de Glassmorphism (transparência de 10%). |

### Tipografia e Acessibilidade

O projeto utiliza um sistema de fontes híbrido para garantir que a loja seja inclusiva:

* **Títulos (`Poppins`):** Uma fonte geométrica e vibrante que traz o peso "Gamer" e moderno para a marca.
* **Corpo de Texto (`Atkinson Hyperlegible`):** Desenvolvida pelo *Braille Institute*, esta fonte foca na distinção clara de caracteres, garantindo que descrições de jogos e preços sejam lidos com perfeição por qualquer usuário.

---

## Destaques Técnicos do CSS

O projeto foi construído com **CSS3 Puro**, utilizando técnicas avançadas para performance e estética:

* **Glassmorphism:** Uso de `backdrop-filter: blur(10px)` nos cards para simular elementos flutuando sobre a água.
* **Layout Responsivo:** Implementação de **CSS Grid** (`auto-fit`) que organiza os jogos automaticamente conforme o tamanho da tela.
* **Interatividade:** Microinterações de `hover` com `transform: scale` e `box-shadow` que dão feedback imediato ao usuário.
* **Mobile-First ready:** Media queries configuradas para adaptar títulos gigantes (80px) em telas de smartphones, mantendo a hierarquia visual.

---

## Estrutura de Arquivos

```
├── assets/
│   └── css/
│       └── style.css
├── images/
│   └── lagoa mistica.png   # Background principal do Hero
├── videos
├── pages/
│   ├── biblioteca.html
│   ├── forum.html
│   ├── login.html
│   ├── loja.html
│   └── suporte.html
├── index.html              # Estrutura semântica do site
├── style.css               # Estilização modular com Variáveis CSS
└── README.md               # Documentação do projeto

```