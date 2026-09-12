(function () {
  var form = document.getElementById('form-cadastro-jogo');
  var submitBtn = document.getElementById('btn-enviar-cadastro');
  var previewBtn = document.getElementById('btn-visualizar-cadastro');
  var hintEnvio = document.getElementById('hint-cadastro');
  var success = document.getElementById('cadastro-sucesso');
  var preview = document.getElementById('preview-cadastro');
  var descricao = document.getElementById('descricao-jogo');
  var counter = document.getElementById('contador-descricao-jogo');
  var fields = {
    email: document.getElementById('email-estudio'),
    estudio: document.getElementById('nome-estudio'),
    jogo: document.getElementById('nome-jogo'),
    genero: document.getElementById('genero-jogo'),
    status: document.getElementById('status-jogo'),
    descricao: descricao,
    link: document.getElementById('link-jogo'),
    previsao: document.getElementById('previsao-jogo')
  };
  var touched = {};
  var previewReady = false;

  if (!form || !submitBtn || !previewBtn || !preview || Object.values(fields).some(function (field) { return !field; })) {
    return;
  }

  function setFieldState(field, messageId, message) {
    var errorEl = document.getElementById(messageId);

    field.classList.toggle('is-invalid', Boolean(message));
    field.classList.toggle('is-valid', !message && field.value.trim().length > 0);
    field.setAttribute('aria-invalid', message ? 'true' : 'false');

    if (errorEl) {
      errorEl.textContent = message;
    }
  }

  function validateEmail(showError) {
    var message = '';
    var value = fields.email.value.trim();

    if (!value) {
      message = 'Informe o e-mail do responsável.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      message = 'Digite um e-mail válido, como nome@dominio.com.';
    }

    if (showError) {
      setFieldState(fields.email, 'erro-email-estudio', message);
    }
    return !message;
  }

  function validateText(fieldName, messageId, label, minLength, showError) {
    var value = fields[fieldName].value.trim();
    var message = '';

    if (!value) {
      message = 'Informe ' + label + '.';
    } else if (value.length < minLength) {
      message = label.charAt(0).toUpperCase() + label.slice(1) + ' deve ter pelo menos ' + minLength + ' caracteres.';
    }

    if (showError) {
      setFieldState(fields[fieldName], messageId, message);
    }
    return !message;
  }

  function validateDescription(showError) {
    var length = fields.descricao.value.trim().length;
    var message = '';

    if (!length) {
      message = 'Descreva o jogo para a equipe.';
    } else if (length < 30) {
      message = 'A descrição deve ter pelo menos 30 caracteres.';
    }

    if (showError) {
      setFieldState(fields.descricao, 'erro-descricao-jogo', message);
    }
    return !message;
  }

  function validateStatus(showError) {
    var message = fields.status.value ? '' : 'Selecione o status do jogo.';

    if (showError) {
      setFieldState(fields.status, 'erro-status-jogo', message);
    }
    return !message;
  }

  function validateLink(showError) {
    if (fields.status.value === 'desenvolvimento') {
      return true;
    }

    var message = '';
    var value = fields.link.value.trim();

    if (!value) {
      message = 'Informe um link para o jogo.';
    } else {
      try {
        var url = new URL(value);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') {
          message = 'Use um link iniciado por http:// ou https://.';
        }
      } catch (error) {
        message = 'Digite uma URL válida, como https://seusite.com/jogo.';
      }
    }

    if (showError) {
      setFieldState(fields.link, 'erro-link-jogo', message);
    }
    return !message;
  }

  function validateForecast(showError) {
    if (fields.status.value !== 'desenvolvimento') {
      return true;
    }

    var message = fields.previsao.value.trim() ? '' : 'Informe uma previsão de lançamento.';

    if (showError) {
      setFieldState(fields.previsao, 'erro-previsao-jogo', message);
    }
    return !message;
  }

  function validateAll(showError) {
    var formIsValid = true;
    formIsValid = validateEmail(showError) && formIsValid;
    formIsValid = validateText('estudio', 'erro-nome-estudio', 'o nome do estúdio ou autoria', 2, showError) && formIsValid;
    formIsValid = validateText('jogo', 'erro-nome-jogo', 'o nome do jogo', 2, showError) && formIsValid;
    formIsValid = validateText('genero', 'erro-genero-jogo', 'o gênero do jogo', 2, showError) && formIsValid;
    formIsValid = validateStatus(showError) && formIsValid;
    formIsValid = validateDescription(showError) && formIsValid;
    formIsValid = validateLink(showError) && formIsValid;
    formIsValid = validateForecast(showError) && formIsValid;
    return formIsValid;
  }

  function updateConditionalFields() {
    var isAvailable = fields.status.value === 'disponivel';
    var isInDevelopment = fields.status.value === 'desenvolvimento';
    var linkField = document.getElementById('campo-link-jogo');
    var forecastField = document.getElementById('campo-previsao-jogo');

    linkField.hidden = !isAvailable;
    forecastField.hidden = !isInDevelopment;
    fields.link.required = isAvailable;
    fields.previsao.required = isInDevelopment;
    linkField.setAttribute('aria-hidden', String(!isAvailable));
    forecastField.setAttribute('aria-hidden', String(!isInDevelopment));
  }

  function updateCounter() {
    counter.textContent = descricao.value.length + ' / 1000';
    counter.classList.toggle('is-warn', descricao.value.length > 0 && descricao.value.trim().length < 30);
    counter.classList.toggle('is-ok', descricao.value.trim().length >= 30 && descricao.value.length < 1000);
    counter.classList.toggle('is-limit', descricao.value.length >= 1000);
  }

  function updateSubmitState() {
    var formIsValid = validateAll(false);
    previewBtn.disabled = !formIsValid;
    submitBtn.disabled = !formIsValid || !previewReady;
    hintEnvio.hidden = formIsValid && previewReady;
    if (!formIsValid) {
      previewReady = false;
      preview.hidden = true;
    }
  }

  function hideSuccess() {
    success.hidden = true;
    success.classList.remove('is-visible');
  }

  function invalidatePreview() {
    previewReady = false;
    preview.hidden = true;
    submitBtn.disabled = true;
    hintEnvio.hidden = false;
    hintEnvio.textContent = 'Visualize o cadastro novamente antes de enviar.';
  }

  function showPreview() {
    if (!validateAll(true)) {
      updateSubmitState();
      return;
    }

    document.getElementById('preview-estudio').textContent = fields.estudio.value.trim();
    document.getElementById('preview-email').textContent = fields.email.value.trim();
    document.getElementById('preview-jogo').textContent = fields.jogo.value.trim();
    document.getElementById('preview-genero').textContent = fields.genero.value.trim();
    document.getElementById('preview-status').textContent = fields.status.options[fields.status.selectedIndex].text;
    document.getElementById('preview-descricao').textContent = fields.descricao.value.trim();
    var link = document.getElementById('preview-link');
    var previewForecast = document.getElementById('preview-previsao');
    var referenceLabel = document.getElementById('preview-referencia-label');

    if (fields.status.value === 'disponivel') {
      link.hidden = false;
      link.href = fields.link.value.trim();
      link.textContent = fields.link.value.trim();
      previewForecast.hidden = true;
      referenceLabel.textContent = 'Link do jogo';
    } else {
      link.hidden = true;
      link.removeAttribute('href');
      link.textContent = '';
      previewForecast.hidden = false;
      previewForecast.textContent = fields.previsao.value.trim();
      referenceLabel.textContent = 'Previsão de lançamento';
    }

    previewReady = true;
    preview.hidden = false;
    submitBtn.disabled = false;
    hintEnvio.hidden = true;
    preview.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  Object.keys(fields).forEach(function (fieldName) {
    var field = fields[fieldName];

    field.addEventListener('input', function () {
      invalidatePreview();
      if (touched[fieldName]) {
        validateAll(true);
      }
      if (fieldName === 'descricao') {
        updateCounter();
      }
      hideSuccess();
      updateSubmitState();
    });

    field.addEventListener('blur', function () {
      invalidatePreview();
      touched[fieldName] = true;
      validateAll(true);
      updateSubmitState();
    });
  });

  fields.status.addEventListener('change', function () {
    updateConditionalFields();
    invalidatePreview();
    touched.status = true;
    validateAll(true);
    hideSuccess();
    updateSubmitState();
  });

  previewBtn.addEventListener('click', showPreview);

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    Object.keys(fields).forEach(function (fieldName) {
      touched[fieldName] = true;
    });

    if (!previewReady || !validateAll(true)) {
      updateSubmitState();
      return;
    }

    success.hidden = false;
    success.classList.add('is-visible');
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  form.addEventListener('reset', function () {
    window.setTimeout(function () {
      Object.keys(fields).forEach(function (fieldName) {
        touched[fieldName] = false;
        fields[fieldName].classList.remove('is-invalid', 'is-valid');
        fields[fieldName].setAttribute('aria-invalid', 'false');
      });
      previewReady = false;
      preview.hidden = true;
      updateConditionalFields();
      document.querySelectorAll('#form-cadastro-jogo .form-field__message').forEach(function (message) {
        message.textContent = '';
      });
      hideSuccess();
      updateCounter();
      updateSubmitState();
      hintEnvio.textContent = 'Preencha os campos obrigatórios para visualizar o cadastro.';
    }, 0);
  });

  updateConditionalFields();
  updateCounter();
  updateSubmitState();
})();
