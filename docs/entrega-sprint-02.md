# Sprint 02 — Iara Games (conteúdo para PDF)

**Link do repositório público:**  
https://github.com/arianaarai/Iara-Games---Grupo-30  

O README do repositório foi atualizado com o mapa das páginas da Sprint 02 e a estrutura de pastas, alinhado a este documento.

---

## Persona — Iara Games

**Nome:** Mariana Souza  
**Idade:** 22 anos  
**Profissão:** Estudante de Design Digital  
**Localização:** São Paulo – SP  

**Perfil comportamental:**  
Mariana é uma usuária digital ativa, acostumada a plataformas visuais e dinâmicas. Seu consumo de conteúdo é rápido, baseado em estética e experiência. Ela valoriza interfaces modernas, imersivas, intuitivas e com identidade forte.  
Além disso, demonstra interesse por jogos independentes e nacionais, buscando experiências diferentes das plataformas tradicionais.

**Objetivos:**

- Descobrir jogos brasileiros de forma prática e envolvente  
- Consumir conteúdo visual e dinâmico sobre games  
- Sentir-se imersa em uma plataforma com identidade única  
- Apoiar desenvolvedores independentes  

**Necessidades:**

- Interface moderna com identidade visual marcante  
- Navegação fluida e intuitiva (sem esforço cognitivo)  
- Leitura confortável (principalmente em ambientes escuros)  
- Feedback visual claro nas interações  

**Dores:**

- Plataformas genéricas, sem identidade  
- Poluição visual ou excesso de informação  
- Interfaces cansativas  
- Falta de valorização de jogos nacionais  

**Motivação emocional:**  
Mariana busca mais do que funcionalidade: ela quer imersão. A estética inspirada nas águas amazônicas e no *dark mode* cria uma conexão emocional, transformando o uso da plataforma em uma experiência sensorial.

---

## ESG — Iara Games

**Ambiental (E):**  
A Iara Games promove o consumo digital de jogos, reduzindo a necessidade de mídias físicas e logística de distribuição, diminuindo impactos ambientais.  
Além disso, a interface em *dark mode* contribui para menor emissão de luz em telas OLED, podendo reduzir consumo energético.

**Social (S):**  
O projeto tem forte impacto social ao:

- Valorizar e dar visibilidade a desenvolvedores nacionais e independentes.  
- Garantir acessibilidade digital, com uso da fonte Atkinson Hyperlegible, que melhora a leitura para pessoas com dificuldades visuais.  
- Criar uma experiência inclusiva, com navegação simples e intuitiva para diferentes perfis de usuários.  

**Governança (G):**  
A Iara Games demonstra boas práticas ao:

- Utilizar um Design System consistente (cores, tipografia, componentes).  
- Garantir organização e padronização no código (HTML semântico + CSS estruturado).  
- Priorizar a experiência do usuário com decisões baseadas em usabilidade e acessibilidade.  

---

## Páginas, fluxos e formulários (Sprint 02)

Além da **home** (`index.html`), o protótipo inclui páginas internas com propósitos distintos, evitando misturar públicos diferentes (jogadora vs. desenvolvedora):

| Página | Arquivo | Função |
|--------|---------|--------|
| Login / conta | `pages/login.html` | Entrar com e-mail e senha **e** criar conta de usuário (dois blocos no mesmo fluxo). |
| Suporte | `pages/suporte.html` | Feedback, sugestões e contato para **jogadores e visitantes**. |
| Cadastro de jogo | `pages/cadastro-jogo.html` | Dados do jogo e do estúdio para **desenvolvedores** enviarem à plataforma. |

**Formulários:** implementados apenas no front-end (`action="#"`, sem back-end), com `fieldset`/`legend`, labels associados aos campos e validação básica do navegador, atendendo usabilidade e acessibilidade da sprint.

**Escopo:** os itens do menu Loja, Biblioteca e Fórum apontam para páginas ainda não implementadas nesta entrega; o foco da Sprint 02 foi home, identidade, grids e os fluxos acima.

---

## Evolução de UI (Interface do Usuário)

A interface foi desenvolvida com base no conceito de:  
**“Imersão nas profundezas das águas amazônicas com tecnologia moderna”.**  
Isso se traduz em:

- *Dark mode* profundo  
- Elementos translúcidos  
- Sensação de camadas e profundidade  
- Destaques luminosos (*glow*)  

### Paleta de cores (Design System)

| Cor | Hex | Aplicação |
|-----|-----|-----------|
| Preto profundo | `#020617` | Fundo principal (imersão e profundidade) |
| Texto claro | `#e2e8f0` | Leitura confortável (baixo cansaço visual) |
| Verde marinho (ciano) | `#67e8f9` | Destaques, *hover*, elementos interativos |
| Verde musgo | `#22c55e` | Botões (CTA), preços, ações positivas |
| Diamante | `#0c8b8b` | Gradientes e transições |
| Branco translúcido | `#ffffff1a` | Glassmorphism (efeito vidro) |

Na Sprint 02, a interface evoluiu de uma estrutura básica para um sistema visual coeso e imersivo.

### Tipografia (sistema completo)

**Títulos — Russo One Regular**

- Estilo forte, robusto e marcante  
- Sensação: tecnologia + universo *gamer*  
- Reforça a identidade da plataforma como algo impactante e moderno  

**Subtítulos — Poppins**

- Estilo geométrico e moderno  
- Remete ao universo *gamer*  
- Utilizada para hierarquia visual forte  

**Texto — Atkinson Hyperlegible**

- Desenvolvida pelo Braille Institute  
- Alta legibilidade  
- Ideal para leitura prolongada  
- Foco em acessibilidade  

### Elementos visuais avançados

**Glassmorphism**

- Uso de `backdrop-filter: blur(10px)`  
- Transparência (`#ffffff1a`)  
- Simula elementos flutuando sobre água  
- Aplicado nos cards, cabeçalho fixo, painel do *hero* e rodapé  
- **Objetivo:** profundidade e sofisticação  

**Efeito *glow***

- Aplicado em botões e *hover*  
- **Objetivo:** guiar a atenção do usuário  

**Cards**

- Estrutura modular  
- Fundo translúcido  
- Sombra suave  
- **Objetivo:** organização e escaneabilidade  

### Interatividade (microinterações)

- *Hover* com `transform: scale`  
- `box-shadow` dinâmico  
- Transições suaves  
- **Impacto:** feedback imediato e sensação de fluidez  

### Responsividade

- Estrutura com CSS Grid (`auto-fit`)  
- Adaptação automática de layout  
- Tipografia e espaçamentos ajustados em *breakpoints*  
- **Impacto:** experiência consistente em diferentes dispositivos  

### Estrutura visual (layout)

- Organização por blocos  
- Hierarquia clara: título → conteúdo → ação  
- Espaçamento equilibrado entre introdução e formulários nas páginas internas  
- **Impacto:** leitura rápida e intuitiva  

---

## UX — Experiência do Usuário (evolução)

1. **Navegação intuitiva**  
   Estrutura simples; fluxo natural; menu global com acesso a Login, Suporte e Cadastro de jogo. Foi adicionado o atalho **“Ir para o conteúdo”** (*skip link*) para quem navega por teclado, indo direto ao `<main>`.

2. **Redução de esforço cognitivo**  
   Menos poluição visual; contraste e espaçamento; conteúdo escaneável. Na home, evitamos repetir os mesmos links do menu em um bloco extra de CTAs, para não duplicar destinos.

3. **Feedback visual**  
   Elementos interativos claros; *hover* indica ação; botões destacados.

4. **Layout responsivo com *breakpoints***  
   Interface pensada para diferentes larguras; prioridade de leitura e toque em telas menores.

5. **Acessibilidade**  
   Tipografia legível; contraste adequado; HTML semântico (`header`, `main`, `footer`, `nav`, `section`, `fieldset`); `aria-label`, `aria-labelledby` onde faz sentido; *skip link*.

6. **Fluxo do usuário**  
   Separação explícita: **login/cadastro de pessoa usuária** (página de login), **feedback** (Suporte) e **cadastro de jogo** (desenvolvedores), cada qual em página própria — reduz confusão entre públicos e tarefas.  
   **Exemplo de jornada:** entrada pela home → exploração de lançamentos/ofertas → Login ou Suporte ou Cadastro de jogo, conforme a necessidade.

---

## Evolução geral (Sprint 01 → Sprint 02)

| Sprint 01 | Sprint 02 |
|-----------|-----------|
| Interface básica | Interface imersiva |
| Sem identidade forte | Identidade visual consolidada |
| Layout simples | Grid responsivo |
| Sem sistema definido | Design System completo |
| UX básica | UX centrada no usuário |
| Poucas páginas | Home + páginas internas (login, suporte, cadastro de jogo) com formulários |

---

## Conclusão

A Sprint 02 transforma a Iara Games em uma plataforma mais madura, com foco no usuário e forte identidade visual. O projeto evolui de uma estrutura inicial para uma experiência digital mais completa, combinando:

- Estética imersiva  
- Acessibilidade  
- Organização estrutural  
- Interatividade  
- Formulários e fluxos claros, alinhados a diferentes perfis (jogadora e desenvolvedora)  

Resultando em uma plataforma que não apenas funciona, mas engaja e envolve a usuária persona e comunica valor também aos criadores de jogos nacionais.
