
(function () {

    const btnValidar = document.getElementById("btnValidar");
    const resultado = document.getElementById("resultado");

    const txtNombre = document.getElementById("txtNombre");
    const txtCorreo = document.getElementById("txtCorreo");
    const txtTelefono = document.getElementById("txtTelefono");

    const lblNombre = document.getElementById("lblNombre");
    const lblCorreo = document.getElementById("lblCorreo");
    const lblTelefono = document.getElementById("lblTelefono");
    const lblIntereses = document.getElementById("lblIntereses");

    const msgNombre = document.getElementById("msgNombre");
    const msgCorreo = document.getElementById("msgCorreo");
    const msgTelefono = document.getElementById("msgTelefono");
    const msgIntereses = document.getElementById("msgIntereses");


    const fsIntereses = document.querySelector("#fsIntereses");
    const intereses = document.querySelectorAll("input[name='intereses']");

    function setValido(inputEl, labelEl, msgEl, msg) {
    inputEl.style.border = "2px solid #1e8e3e";
    inputEl.style.backgroundColor = "#e9f7ef";
    if (labelEl) labelEl.style.color = "#1e8e3e";
    if (msgEl) {
        msgEl.textContent = msg || "";
        msgEl.style.color = "#1e8e3e";
    }
    }

    function setInvalido(inputEl, labelEl, msgEl, msg) {
    inputEl.style.border = "2px solid #d93025";
    inputEl.style.backgroundColor = "#fdecea";
    if (labelEl) labelEl.style.color = "#d93025";
    if (msgEl) {
        msgEl.textContent = msg || "Campo requerido.";
        msgEl.style.color = "#d93025";
    }
    }

    function limpiarResultado() {
    resultado.textContent = "";
    resultado.style.color = "#111";
    }

    function validarNombre() {
    const valor = txtNombre.value.trim();
    if (valor.length >= 3) {
        setValido(txtNombre, lblNombre, msgNombre, "Correcto.");
        return true;
    }
    setInvalido(txtNombre, lblNombre, msgNombre, "Escribe tu nombre (mínimo 3 caracteres).");
    return false;
    }

    function validarCorreo() {
    const valor = txtCorreo.value.trim();
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (patron.test(valor)) {
        setValido(txtCorreo, lblCorreo, msgCorreo, "Correo válido.");
        return true;
    }
    setInvalido(txtCorreo, lblCorreo, msgCorreo, "Escribe un correo válido (correo@dominio.com).");
    return false;
    }

    function validarTelefono() {
    const valor = txtTelefono.value.trim();
    const soloDigitos = /^\d{10}$/;
    if (soloDigitos.test(valor)) {
        setValido(txtTelefono, lblTelefono, msgTelefono, "Teléfono válido.");
        return true;
    }
    setInvalido(txtTelefono, lblTelefono, msgTelefono, "Debe tener 10 dígitos (solo números).");
    return false;
    }

    function validarIntereses() {
    let algunoMarcado = false;
    intereses.forEach(function (chk) {
        if (chk.checked) algunoMarcado = true;
    });

    if (algunoMarcado) {
        fsIntereses.style.border = "2px solid #1e8e3e";
        fsIntereses.style.backgroundColor = "#e9f7ef";
        lblIntereses.style.color = "#1e8e3e";
        msgIntereses.textContent = "Correcto.";
        msgIntereses.style.color = "#1e8e3e";
        return true;
    }

    fsIntereses.style.border = "2px solid #d93025";
    fsIntereses.style.backgroundColor = "#fdecea";
    lblIntereses.style.color = "#d93025";
    msgIntereses.textContent = "Selecciona al menos 1 opción.";
    msgIntereses.style.color = "#d93025";
    return false;
    } 

    btnValidar.addEventListener("click", function () {
    limpiarResultado();

    const okNombre = validarNombre();
    const okCorreo = validarCorreo();
    const okTelefono = validarTelefono();
    const okIntereses = validarIntereses();

    const todoOk = okNombre && okCorreo && okTelefono && okIntereses;

    if (todoOk) {
        resultado.textContent = "Registro validado correctamente.";
        resultado.style.color = "#1e8e3e";


    } else {
        resultado.textContent = "Revisa los campos marcados en rojo.";
        resultado.style.color = "#d93025";
    }
    });

})();