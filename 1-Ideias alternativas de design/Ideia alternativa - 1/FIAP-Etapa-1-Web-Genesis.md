# FIAP Etapa 1 | Web Genesis

Conteúdo da Fase 1 do curso FIAP - Web Genesis. Documento de referência para desenvolvimento do projeto **Iara Games**.

---

## Índice

1. [Capítulo 1 - Uma nova jornada](#capítulo-1---uma-nova-jornada)
2. [Capítulo 4 - Hello, site (HTML)](#capítulo-4---hello-site)
3. [Capítulo 5 - O mundo do Design](#capítulo-5---o-mundo-do-design)
4. [Capítulo 6 - Paleta dos sonhos](#capítulo-6---paleta-dos-sonhos)
5. [Capítulo 7 - Site com estilo (CSS)](#capítulo-7---site-com-estilo)
6. [Capítulo 8 - Uma jornada impactante (UX)](#capítulo-8---uma-jornada-impactante)
7. [Capítulo 9 - Impactante e funcional (Usabilidade)](#capítulo-9---impactante-e-funcional)
8. [Capítulo 10 - Internet para todos (Acessibilidade)](#capítulo-10---internet-para-todos)
9. [Capítulo 11 - Desenvolvimento compartilhado (Git/GitHub)](#capítulo-11---desenvolvimento-compartilhado)
10. [Sprint 01 - Atividade em grupo](#sprint-01---atividade-em-grupo)
11. [Guia rápido para o projeto Iara Games](#guia-rápido-para-o-projeto-iara-games)

---

## Capítulo 1 - Uma nova jornada

### Contexto do projeto

- **Cliente:** Iara Silva, 28 anos – ilustradora, apaixonada por games e design.
- **Parceira:** Master3 – desenvolvimento full stack.
- **Nome:** Iara Games (referência à entidade do folclore brasileiro).
- **Proposta:** Plataforma exclusiva para compra e venda de jogos de desenvolvedores brasileiros.
- **Restrições da versão piloto:**
  - Apenas jogos brasileiros.
  - Sem cloud gaming ou servidores online.
  - Jogos para download e instalação local.

### Requisitos funcionais da versão piloto

| Área | Funcionalidades obrigatórias |
|------|------------------------------|
| **Área do usuário** | Criar login, Fazer login, Privacidade, Segurança, Histórico de compras, Encerrar sessão |
| **Loja** | Ordem alfabética, Mais comprados, Maior avaliação, Por categoria/gênero |
| **Jogos do usuário** | Por data de compra, Ordem alfabética, Nota mais alta |
| **Fórum** | Por data, Mais comentados, Itens do usuário logado em primeiro |
| **Suporte** | Contatos, Lista de tickets |

### Orientações para o projeto

- Linguagem visual e textos adaptados a jogadores brasileiros.
- Pequenas empresas / desenvolvedores independentes.
- Identidade com “brasilidades”.
- Pode evoluir: novas features e expansão de áreas são esperadas.

### Estrutura de páginas sugerida (Sprint 01)

Para a home da versão piloto, prevê-se acesso às áreas:

- Loja  
- Biblioteca (Jogos do usuário)  
- Fórum  
- Suporte  
- Área do usuário (Login / Criar conta)

---

## Capítulo 4 - Hello, site

### HTML – conceitos

- **HTML** = HyperText Markup Language (linguagem de marcação).
- Não é linguagem de programação: define estrutura e conteúdo.
- **Tags** marcam o tipo de conteúdo; o navegador interpreta e exibe.
- **Can I Use:** https://caniuse.com – compatibilidade de tags/recursos.

### Estrutura básica de documento

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iara Games - Jogos brasileiros</title>
</head>
<body>
    <!-- Conteúdo da página -->
</body>
</html>
```

- `lang="pt-BR"` – idioma para acessibilidade e SEO.
- `viewport` – responsividade em mobile.
- `charset="UTF-8"` – acentuação correta.

### Tags e semântica (relevante para Iara Games)

| Tag | Uso no projeto |
|-----|----------------|
| `<header>` | Cabeçalho com logo, menu, busca |
| `<nav>` | Menu de navegação principal |
| `<main>` | Conteúdo principal da página |
| `<section>` | Blocos de conteúdo (ex.: destaque, categorias) |
| `<article>` | Cards de jogos, postagens do fórum |
| `<aside>` | Sidebar, promoções |
| `<footer>` | Rodapé com links, contato |
| `<h1>` | Título principal (1 por página) |
| `<h2>`, `<h3>` | Subtítulos e seções |

### Links e navegação

```html
<!-- Links internos para as seções do piloto -->
<nav>
    <a href="./index.html">Home</a>
    <a href="./pages/loja.html">Loja</a>
    <a href="./pages/biblioteca.html">Biblioteca</a>
    <a href="./pages/forum.html">Fórum</a>
    <a href="./pages/suporte.html">Suporte</a>
    <a href="./pages/login.html">Entrar</a>
</nav>

<!-- Links com nova aba (externos) -->
<a href="https://..." target="_blank" rel="noopener">Site externo</a>
```

### Estrutura de pastas recomendada

```
iara-games/
├── index.html          # Página inicial
├── css/
│   └── style.css       # Estilos principais
├── images/             # Imagens, ícones, logo
├── pages/
│   ├── loja.html
│   ├── biblioteca.html
│   ├── forum.html
│   ├── suporte.html
│   └── login.html
└── README.md
```

### Boas práticas

- Um único `<h1>` por página.
- Use `alt` em todas as imagens.
- Prefira elementos semânticos em vez de `<div>` genérico quando fizer sentido.

---

## Capítulo 5 - O mundo do Design

### Elementos do design

- **Ponto** – foco de atenção.
- **Linha** – fluxo, conexão.
- **Forma** – blocos visuais (geométrico, orgânico).
- **Espaço** – hierarquia e organização.
- **Cor** – emoção, contraste.
- **Textura** – sensação tátil/visual.
- **Tipografia** – hierarquia e legibilidade.

### Princípios aplicáveis ao Iara Games

| Princípio | Aplicação no site |
|----------|-------------------|
| **Alinhamento** | Grid consistente, menus alinhados |
| **Contraste** | Botões, links, CTAs visíveis |
| **Proximidade** | Itens relacionados agrupados |
| **Hierarquia** | Destaque para jogos, promoções, CTAs |
| **Repetição** | Padrões em cards, botões, seções |
| **Equilíbrio** | Layout equilibrado (simétrico ou assimétrico) |

### Layout e composição

- **Grade modular** – organização em colunas.
- **Regra dos terços** – pontos focais.
- **Espaço negativo** – respiro visual.
- **Fluxo visual** – ordem natural de leitura (leitura em Z no Ocidente).
- **Design responsivo** – adaptação a mobile, tablet e desktop.
- **Media queries** – ajuste de layout por largura de tela.

### UX e usabilidade

- Facilidade de uso.
- Eficiência nas tarefas.
- Memorabilidade da interface.
- Menor taxa de erros.
- Satisfação do usuário.

### Inspirações (Iara Games)

- Brasilidades e folclore.
- Plataformas de games: Steam, GOG, Epic, Nuuvem.
- Cores ligadas à natureza e cultura brasileira.

---

## Capítulo 6 - Paleta dos sonhos

### Conceitos

- **Círculo cromático** – relações entre cores.
- **Cores quentes** – vermelho, laranja, amarelo (energia, urgência).
- **Cores frias** – azul, verde, roxo (calma, confiança).
- **Contraste** – diferença entre cores (legibilidade).
- **Saturação** – intensidade/pureza da cor.
- **Valor** – luminosidade (claro/escuro).

### Tipos de paleta

| Tipo | Descrição | Exemplo para Iara Games |
|------|-----------|--------------------------|
| **Monocromática** | Variações de uma cor | Tons de verde (natureza, Brasil) |
| **Análoga** | Cores vizinhas no círculo | Verde + azul + turquesa |
| **Complementar** | Cores opostas | Verde + vermelho (com cuidado no contraste) |
| **Tríade** | Três cores equidistantes | Verde + laranja + roxo |

### Acessibilidade

- Contraste texto/fundo conforme WCAG (mínimo 4.5:1 para texto normal).
- Não transmitir informação apenas por cor.
- Complementar com ícones e formas.
- Considerar daltonismo (protanopia, deuteranopia, tritanopia).
- Ferramentas: Adobe Color, Coolors, WebAIM Contrast Checker.

### Sugestão de paleta para Iara Games

- Cor primária ligada ao folclore/natureza brasileira.
- Cor secundária para contraste.
- Cor neutra para fundos e textos.
- Cor de destaque para botões e CTAs (ex.: “Comprar”, “Baixar”).

Documentar no README: códigos hex/RGB e onde cada cor é usada.

---

## Capítulo 7 - Site com estilo

### Tipos de CSS

| Tipo | Exemplo | Uso no projeto |
|------|---------|-----------------|
| **Externo** | `style.css` linkado | ✅ Recomendado |
| Interno | `<style>` no `<head>` | Evitar |
| Inline | `style="..."` na tag | Evitar |

**Especificidade:** Inline > Interno > Externo.

### Vínculo CSS no HTML

```html
<head>
    <link rel="stylesheet" href="./css/style.css">
</head>
```

### Seletores úteis para o projeto

```css
/* Elementos */
body { font-family: 'Open Sans', sans-serif; }
h1, h2, h3 { font-family: 'Poppins', sans-serif; }

/* Classes */
.card-jogo { border-radius: 8px; }
.botao-primario { background: #2e7d32; color: white; }

/* IDs (para âncoras) */
#loja { scroll-margin-top: 80px; }
```

### Propriedades de texto

```css
font-family: 'Poppins', sans-serif;
font-size: 16px;           /* base para body */
font-weight: 400;          /* normal, 700 = bold */
font-style: normal;        /* italic se necessário */
text-align: left;          /* left, center, right, justify */
line-height: 1.5;          /* espaçamento entre linhas */
letter-spacing: 0.5px;     /* opcional */
```

### Google Fonts

```html
<!-- No <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

```css
/* No CSS */
body { font-family: 'Open Sans', sans-serif; }
h1, h2, .nav-link { font-family: 'Poppins', sans-serif; }
```

### Layout responsivo básico

```css
/* Mobile first */
.container { width: 100%; padding: 1rem; }

@media (min-width: 768px) {
    .container { max-width: 720px; margin: 0 auto; }
}

@media (min-width: 1024px) {
    .container { max-width: 960px; }
}
```

### Variáveis CSS (para paleta)

```css
:root {
    --cor-primaria: #1a5f2a;
    --cor-secundaria: #f4a261;
    --cor-fundo: #f8f9fa;
    --cor-texto: #212529;
    --espacamento: 1rem;
}
```

### Estilização de componentes

- **Botões:** padding, border-radius, hover.
- **Cards:** box-shadow, border-radius, padding.
- **Imagens:** `max-width: 100%`, `height: auto`, `border-radius`.
- **Links:** cor, hover, `text-decoration`.

---

## Capítulo 8 - Uma jornada impactante

### UX e Usabilidade

- **Usabilidade:** cumprir objetivos com eficácia e eficiência.
- **UX:** experiência completa, prazer e valor percebido.

### Diagrama da experiência

1. **Utilidade** – o site resolve o problema do usuário.
2. **Usabilidade** – é fácil de usar.
3. **Desejo** – usuário quer voltar.
4. **Experiência de marca** – associação positiva à Iara Games.

### Comportamento do usuário (Steve Krug)

1. Não leem tudo, apenas escaneiam.
2. Escolhem o “suficiente”, não o “ideal”.
3. Avançam sem explorar a fundo.

### Implicações para o Iara Games

- Hierarquia visual clara (o que é mais importante).
- CTAs visíveis (Comprar, Ver mais, Entrar).
- Navegação previsível e consistente.
- Rótulos claros (sem jargões).
- Feedback visual em ações (hover, foco, etc.).

### Leitura em Z

- Canto superior esquerdo – logo e início da navegação.
- Pontos focais bem definidos.
- Área terminal – onde termina a leitura inicial.

---

## Capítulo 9 - Impactante e funcional

### Processo criativo

1. **Conhecimento** – cliente, público, contexto.
2. **Definição** – objetivos e escopo.
3. **Associações** – conectar ideias.
4. **Brainstorm** – gerar alternativas.
5. **Seleção** – escolher o caminho.
6. **Interpretação** – detalhar a solução.
7. **Comprovação** – testar e validar.

### Heurísticas de Nielsen – checklist para Iara Games

| # | Heurística | Aplicação |
|---|------------|-----------|
| 1 | Visibilidade do status | Usuário sabe onde está e o que está acontecendo |
| 2 | Compatibilidade com o mundo real | Linguagem de jogos e termos conhecidos |
| 3 | Liberdade e controle | Navegar, voltar, cancelar ações |
| 4 | Consistência | Mesmos padrões em todas as páginas |
| 5 | Prevenção de erros | Validação, mensagens claras |
| 6 | Reconhecimento em vez de memorização | Menus e ações visíveis |
| 7 | Flexibilidade | Mais de uma forma de chegar às seções |
| 8 | Design minimalista | Só o necessário na tela |
| 9 | Ajuda com erros | Mensagens claras e acionáveis |
| 10 | Ajuda e documentação | Fácil encontrar suporte/FAQ |

### Gestalt no layout

- **Semelhança** – elementos parecidos são percebidos como grupo.
- **Proximidade** – itens próximos formam blocos.
- **Segregação** – contraste e separação entre seções.

---

## Capítulo 10 - Internet para todos

### W3C e acessibilidade

Acessibilidade = possibilidade de alcance, percepção e entendimento com segurança e autonomia.

### Checklist para Iara Games

| Necessidade | Ações no projeto |
|-------------|------------------|
| **Deficiência visual** | `alt` em imagens, estrutura semântica, contraste adequado |
| **Daltonismo** | Ícones além de cores, contraste forte, não depender só de cor |
| **Baixa visão** | Fontes legíveis, zoom sem quebrar layout |
| **Navegação por teclado** | `tabindex`, ordem lógica, foco visível |
| **Leitores de tela** | HTML semântico, headings em ordem, `aria-label` quando necessário |
| **Texto** | Linguagem simples, frases curtas |

### Boas práticas HTML

```html
<!-- Imagens -->
<img src="logo.png" alt="Iara Games - Logo da plataforma">

<!-- Links descritivos -->
<a href="loja.html">Ir para Loja</a>

<!-- Headings em ordem -->
<h1>Iara Games</h1>
<h2>Jogos em destaque</h2>
<h3>Nome do jogo</h3>
```

### WCAG 2.1 – princípios

1. **Perceptível** – informação presente e legível.
2. **Operável** – interface utilizável com teclado/mouse.
3. **Compreensível** – conteúdo e interface compreensíveis.
4. **Robusto** – compatível com diferentes tecnologias.

---

## Capítulo 11 - Desenvolvimento compartilhado

### Fluxo Git para o projeto

```bash
# 1. Inicializar repositório
git init

# 2. Configurar usuário (primeira vez)
git config user.name "Seu Nome"
git config user.email "seu@email.com"

# 3. Adicionar e commitar
git add .
git commit -m "feat: estrutura inicial da home Iara Games"

# 4. Conectar ao GitHub
git remote add origin https://github.com/usuario/iara-games.git
git branch -M main
git push -u origin main
```

### Comandos úteis

```bash
git status          # Ver estado dos arquivos
git add .           # Adicionar todos os arquivos
git add arquivo.html # Adicionar arquivo específico
git commit -m "mensagem descritiva"
git log             # Ver histórico
git pull origin main # Atualizar do remoto
git push origin main # Enviar para o remoto
```

### Boas práticas de commit

- Mensagens em português, em imperativo.
- Exemplos: `feat: adiciona seção de jogos em destaque`, `fix: corrige link do menu`.

---

## Sprint 01 - Atividade em grupo

### Objetivo

Apresentar a primeira versão conceitual e visual da Iara Games: proposta, design, UX/acessibilidade, home estática e repositório no GitHub.

### Entregas detalhadas

#### 1. Pesquisa e entendimento

- **Proposta da Iara Games** (1 parágrafo): o que é, para quem, diferencial.
- **3 plataformas de referência** (ex.: Steam, GOG, Nuuvem, Epic, itch.io):
  - Nome
  - Pontos positivos de design/UX
  - O que pode inspirar o Iara Games

#### 2. Design (GDW)

- **Paleta de cores:**
  - 1 cor primária
  - 1 cor secundária
  - 1 cor de destaque (CTA)
  - Cores neutras (fundo, texto)
  - Justificativa para cada uma

- **Tipografia:**
  - Fonte para títulos
  - Fonte para texto
  - Justificativa

- **Pelo menos 3 decisões visuais**, com justificativa, por exemplo:
  - Estilo do logo/identidade
  - Uso de bordas arredondadas ou retas
  - Padrão de cards/seções
  - Uso de ícones
  - Espaçamentos predominantes

#### 3. UX e acessibilidade

- **Usabilidade:** 2–3 cuidados aplicados (ex.: menu claro, CTAs visíveis, hierarquia).
- **Acessibilidade:** 2–3 cuidados (ex.: contraste, `alt`, semântica, contraste para daltônicos).

#### 4. Página inicial (HTML + CSS)

- Home estática com:
  - Cabeçalho (logo, menu)
  - Área de apresentação da plataforma
  - Links para: Loja, Biblioteca, Fórum, Suporte, Login/Criar conta
  - Rodapé (opcional)
- Sem JavaScript ou back-end.
- Responsiva (pelo menos mobile e desktop).

#### 5. Git e GitHub

- Repositório público.
- README com: contexto, proposta, justificativas de design, UX e acessibilidade.

### Formato de entrega

- **GitHub:** código + README.
- **PDF na FIAP ON:** contexto, justificativas, link do repositório.

### Observações

- Até 5 integrantes por grupo.
- Usar a ferramenta de grupos da plataforma antes de enviar.

---

## Guia rápido para o projeto Iara Games

### Estrutura mínima de arquivos

```
iara-games/
├── index.html
├── css/
│   └── style.css
├── images/
│   ├── logo.png
│   └── (outras imagens)
├── pages/
│   ├── loja.html        # placeholder ou link
│   ├── biblioteca.html
│   ├── forum.html
│   ├── suporte.html
│   └── login.html
└── README.md
```

### Conteúdo sugerido do README

```markdown
# Iara Games

## Contexto e proposta
[Descrição do projeto e do público]

## Referências
- [Plataforma 1] - [por que foi referência]
- [Plataforma 2] - [por que foi referência]
- [Plataforma 3] - [por que foi referência]

## Design
### Paleta de cores
- Primária: #xxxxxx - [justificativa]
- Secundária: #xxxxxx - [justificativa]
- ...

### Tipografia
- Títulos: [fonte] - [justificativa]
- Texto: [fonte] - [justificativa]

### Decisões visuais
1. [Decisão] - [justificativa]
2. [Decisão] - [justificativa]
3. [Decisão] - [justificativa]

## UX e Acessibilidade
[Explicação dos cuidados aplicados]

## Como executar
[Instruções para abrir o projeto localmente]
```

### Checklist antes de entregar

- [ ] Home estática em HTML + CSS
- [ ] Links para as 5 áreas do piloto (ou placeholders)
- [ ] Paleta de cores aplicada
- [ ] Tipografia definida e aplicada
- [ ] Justificativas no README
- [ ] Contraste adequado (texto legível)
- [ ] `alt` em imagens
- [ ] Estrutura semântica (header, nav, main, footer)
- [ ] Repositório público no GitHub
- [ ] PDF enviado na FIAP ON com link do repositório

---

*Conteúdo consolidado da FIAP Etapa 1 - Web Genesis*
