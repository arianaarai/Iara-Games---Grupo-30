(function () {
  var form = document.getElementById('form-suporte');
  var email = document.getElementById('email-feedback');
  var tipoFeedback = document.getElementById('tipo-feedback');
  var descricao = document.getElementById('descricao-feedback');
  var submitBtn = document.getElementById('btn-enviar-feedback');
  var counter = document.getElementById('contador-caracteres');
  var success = document.getElementById('feedback-sucesso');
  var hintEnvio = document.getElementById('hint-envio');

  if (!form || !email || !tipoFeedback || !descricao || !submitBtn) {
    return;
  }

  var MIN_DESCRICAO = 20;
  var MAX_DESCRICAO = 500;
  var keepSuccessAfterReset = false;
  var touched = {
    email: false,
    tipo: false,
    descricao: false
  };

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function setFieldState(field, messageId, message) {
    var errorEl = document.getElementById(messageId);

    if (message) {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
      field.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = message;
      }
      return;
    }

    field.classList.remove('is-invalid');
    field.setAttribute('aria-invalid', 'false');
    if (errorEl) {
      errorEl.textContent = '';
    }

    if (field.value.trim()) {
      field.classList.add('is-valid');
    } else {
      field.classList.remove('is-valid');
    }
  }

  function validateEmail(showError) {
    var value = email.value.trim();
    var message = '';

    if (!value) {
      message = 'Informe um e-mail para identificação.';
    } else if (!isValidEmail(value)) {
      message = 'Digite um e-mail válido, como nome@dominio.com.';
    }

    setFieldState(email, 'erro-email-feedback', showError ? message : '');
    return !message;
  }

  function validateTipo(showError) {
    var message = tipoFeedback.value ? '' : 'Selecione o tipo de feedback.';
    setFieldState(tipoFeedback, 'erro-tipo-feedback', showError ? message : '');
    return !message;
  }

  function validateDescricao(showError) {
    var length = descricao.value.trim().length;
    var message = '';

    if (!length) {
      message = 'Descreva seu feedback para a equipe.';
    } else if (length < MIN_DESCRICAO) {
      message = 'Escreva pelo menos ' + MIN_DESCRICAO + ' caracteres.';
    }

    setFieldState(descricao, 'erro-descricao-feedback', showError ? message : '');
    return !message;
  }

  function updateCounter() {
    if (!counter) {
      return;
    }

    var length = descricao.value.length;
    counter.textContent = length + ' / ' + MAX_DESCRICAO;
    counter.classList.toggle('is-warn', length > 0 && length < MIN_DESCRICAO);
    counter.classList.toggle('is-ok', length >= MIN_DESCRICAO && length < MAX_DESCRICAO);
    counter.classList.toggle('is-limit', length >= MAX_DESCRICAO);
  }

  function updateSubmitState() {
    var formIsValid =
      isValidEmail(email.value) &&
      Boolean(tipoFeedback.value) &&
      descricao.value.trim().length >= MIN_DESCRICAO;

    submitBtn.disabled = !formIsValid;

    if (hintEnvio) {
      hintEnvio.hidden = formIsValid;
    }
  }

  function hideSuccess() {
    if (!success) {
      return;
    }

    success.hidden = true;
    success.classList.remove('is-visible');
  }

  function showSuccess() {
    if (!success) {
      return;
    }

    success.hidden = false;
    success.classList.add('is-visible');
  }

  function clearFieldLooks() {
    [email, tipoFeedback, descricao].forEach(function (field) {
      field.classList.remove('is-invalid', 'is-valid');
      field.setAttribute('aria-invalid', 'false');
    });

    ['erro-email-feedback', 'erro-tipo-feedback', 'erro-descricao-feedback'].forEach(function (id) {
      var errorEl = document.getElementById(id);
      if (errorEl) {
        errorEl.textContent = '';
      }
    });
  }

  email.addEventListener('input', function () {
    if (touched.email) {
      validateEmail(true);
    }
    hideSuccess();
    updateSubmitState();
  });

  email.addEventListener('blur', function () {
    touched.email = true;
    validateEmail(true);
    updateSubmitState();
  });

  tipoFeedback.addEventListener('change', function () {
    touched.tipo = true;
    validateTipo(true);
    hideSuccess();
    updateSubmitState();
  });

  descricao.addEventListener('input', function () {
    updateCounter();
    if (touched.descricao) {
      validateDescricao(true);
    }
    hideSuccess();
    updateSubmitState();
  });

  descricao.addEventListener('blur', function () {
    touched.descricao = true;
    validateDescricao(true);
    updateSubmitState();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var emailOk = validateEmail(true);
    var tipoOk = validateTipo(true);
    var descricaoOk = validateDescricao(true);

    if (!emailOk || !tipoOk || !descricaoOk) {
      updateSubmitState();
      return;
    }

    showSuccess();
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  form.addEventListener('reset', function () {
    window.setTimeout(function () {
      if (!keepSuccessAfterReset) {
        hideSuccess();
      }
      keepSuccessAfterReset = false;
      touched.email = false;
      touched.tipo = false;
      touched.descricao = false;
      clearFieldLooks();
      updateCounter();
      updateSubmitState();
    }, 0);
  });

  updateCounter();
  updateSubmitState();
})();
