(function () {
  var searchInput = document.getElementById('busca-jogos');
  var searchForm = document.getElementById('form-busca');
  var feedback = document.getElementById('busca-feedback');
  var emptyState = document.getElementById('empty-state');
  var chips = document.querySelectorAll('.ig-filter-chip');
  var cards = document.querySelectorAll('[data-game-card]');

  if (!searchInput || !cards.length) {
    return;
  }

  var activeGenre = 'todos';

  function normalize(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function getCardText(card) {
    return normalize(
      [
        card.dataset.title || '',
        card.dataset.genre || '',
        card.querySelector('.card-title')?.textContent || ''
      ].join(' ')
    );
  }

  function updateFeedback(visible, query) {
    if (!feedback) {
      return;
    }

    if (visible === 0) {
      feedback.textContent = query
        ? 'Nenhum jogo encontrado para "' + query + '". Tente outro termo ou limpe os filtros.'
        : 'Nenhum jogo nesta categoria. Escolha outro filtro ou veja todos.';
      if (emptyState) {
        emptyState.classList.add('is-visible');
        emptyState.hidden = false;
      }
      return;
    }

    feedback.textContent =
      visible === cards.length
        ? 'Mostrando todos os jogos.'
        : visible + ' jogo(s) encontrado(s).';

    if (emptyState) {
      emptyState.classList.remove('is-visible');
      emptyState.hidden = true;
    }
  }

  function applyFilters() {
    var query = normalize(searchInput.value.trim());
    var visible = 0;

    cards.forEach(function (card) {
      var genre = card.dataset.genre || '';
      var matchesGenre = activeGenre === 'todos' || genre === activeGenre;
      var matchesQuery = !query || getCardText(card).indexOf(query) !== -1;
      var show = matchesGenre && matchesQuery;

      card.classList.toggle('is-hidden', !show);
      card.hidden = !show;
      if (show) {
        visible += 1;
      }
    });

    updateFeedback(visible, searchInput.value.trim());
  }

  if (searchForm) {
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      applyFilters();
      searchInput.focus();
    });
  }

  searchInput.addEventListener('input', applyFilters);

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      activeGenre = chip.dataset.genre || 'todos';
      chips.forEach(function (c) {
        c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
      });
      applyFilters();
    });
  });

  var clearBtn = document.getElementById('limpar-busca');
  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      searchInput.value = '';
      activeGenre = 'todos';
      chips.forEach(function (c, i) {
        c.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
      });
      applyFilters();
      searchInput.focus();
    });
  }

  applyFilters();
})();
