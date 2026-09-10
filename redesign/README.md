# Redesign de Interação — Etapa 4

Protótipo HTML da home reformulada. A **home original** (analisada no PDF) está em [`../index.html`](../index.html).

## Arquivos

| Arquivo | Função |
| :--- | :--- |
| `index.html` | Home reformulada |
| `redesign.css` | Estilos extras (banner, busca, mobile) |
| `redesign.js` | Busca e filtros por gênero |

Reutiliza `../assets/css/style.css` e imagens em `../assets/images/`.

## Interatividade com JavaScript — Busca e filtros

A home reformulada possui recursos de interatividade desenvolvidos em JavaScript para facilitar a descoberta de jogos.

### Funcionalidades implementadas

- Busca de jogos por nome ou gênero em tempo real
- Filtro por gênero: Todos, Aventura, RPG e Corrida
- Contador de jogos encontrados
- Mensagem de estado vazio quando nenhum jogo corresponde à busca
- Botão para limpar a busca e os filtros
- Feedback da pesquisa mostrando o termo pesquisado

### Como funciona

O JavaScript utiliza o evento `input` para atualizar os resultados enquanto o usuário digita e o evento `click` para os filtros e para o botão de limpar.

Os elementos da página são selecionados com métodos como `querySelectorAll`. As classes dos cards são alteradas com `classList` para mostrar ou esconder os jogos, e `textContent` é utilizado para atualizar o contador e as mensagens de feedback.

Exemplo: ao pesquisar por "RPG", a página mostra apenas os jogos correspondentes e informa quantos resultados foram encontrados.
## Visualizar localmente

Na **raiz** do repositório:

```bash
python3 -m http.server 8080
```

- Original: http://localhost:8080/index.html  
- Redesign: http://localhost:8080/redesign/

## GitHub Pages

Com Pages ativo na raiz do repo:

- Protótipo: `https://<usuario>.github.io/Iara-Games---Grupo-30/redesign/`
