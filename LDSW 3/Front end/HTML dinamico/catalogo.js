(function () {
  // ====== Referencias DOM (getElementById) ======
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

    // ====== Selectores (querySelector / querySelectorAll) ======
    const fsIntereses = document.querySelector("#fsIntereses");
    const intereses = document.querySelectorAll("input[name='intereses']");
    const catalogo = document.querySelector("#catalogo");

  // ====== Contadorde registros ======
    let contador = 0;

  // ====== Estilos ======
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

  // ====== Validaciones ======
    function validarNombre() {
    const v = txtNombre.value.trim();
    if (v.length >= 3) {
        setValido(txtNombre, lblNombre, msgNombre, "Correcto.");
        return true;
    }
    setInvalido(txtNombre, lblNombre, msgNombre, "Escribe tu nombre (mínimo 3 caracteres).");
    return false;
    }

    function validarCorreo() {
    const v = txtCorreo.value.trim();
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (patron.test(v)) {
        setValido(txtCorreo, lblCorreo, msgCorreo, "Correo válido.");
        return true;
    }
    setInvalido(txtCorreo, lblCorreo, msgCorreo, "Escribe un correo válido (correo@dominio.com).");
    return false;
    }

    function validarTelefono() {
    const v = txtTelefono.value.trim();
    const soloDigitos = /^\d{10}$/;
    if (soloDigitos.test(v)) {
        setValido(txtTelefono, lblTelefono, msgTelefono, "Teléfono válido.");
        return true;
    }
    setInvalido(txtTelefono, lblTelefono, msgTelefono, "Debe tener 10 dígitos (solo números).");
    return false;
    }

    function obtenerInteresesSeleccionados() {
    const sel = [];
    intereses.forEach(function (chk) {
        if (chk.checked) sel.push(chk.value);
    });
    return sel;
    }

    function validarIntereses() {
    const sel = obtenerInteresesSeleccionados();

    if (sel.length > 0) {
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

  // ====== Creación dinámica de elementos (createElement + append/appendChild/prepend/insertBefore/before) ======
    function crearRegistroDinamico(data) {
    contador += 1;

    // 1) createElement (tarjeta contenedora)
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "12px";
    card.style.padding = "12px";
    card.style.width = "260px";
    card.style.background = "#f9fafb";
    card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";

    // 2) createElement (badge)
    const badge = document.createElement("div");
    badge.textContent = "Registro #" + contador;
    badge.style.display = "inline-block";
    badge.style.padding = "4px 10px";
    badge.style.borderRadius = "999px";
    badge.style.fontSize = "12px";
    badge.style.fontWeight = "700";
    badge.style.background = "#eef2ff";

    // 3) createElement (título)
    const h3 = document.createElement("h3");
    h3.textContent = data.nombre;
    h3.style.margin = "10px 0 6px 0";

    // 4) createElement (info)
    const pCorreo = document.createElement("p");
    pCorreo.style.margin = "6px 0";
    pCorreo.textContent = "Correo: " + data.correo;

    const pTel = document.createElement("p");
    pTel.style.margin = "6px 0";
    pTel.textContent = "Teléfono: " + data.telefono;

    const pInt = document.createElement("p");
    pInt.style.margin = "6px 0";
    pInt.textContent = "Intereses: " + data.intereses.join(", ");

    // 5) appendChild / append
    card.appendChild(badge);
    card.append(h3, pCorreo, pTel, pInt); // append permite varios a la vez

    // 6) insertBefore (insertar al inicio del catálogo)
    // Si hay un primer hijo, insertamos antes; si no, appendChild normal.
    if (catalogo.firstChild) {
        catalogo.insertBefore(card, catalogo.firstChild);
    } else {
        catalogo.appendChild(card);
    }

    // 7) before (extra: insertar un separador visual antes de la tarjeta)
    // Solo para evidenciar uso de "before" en la actividad.
    // Lo hacemos con una línea pequeña cuando ya hay al menos 2 tarjetas.
    if (catalogo.children.length === 2) {
        const nota = document.createElement("div");
        nota.textContent = "— Aqui se estan agragando los registros—";
        nota.style.width = "100%";
        nota.style.color = "#555";
        nota.style.fontStyle = "italic";
        nota.style.margin = "6px 0 0 0";
      // Insertamos la nota ANTES del primer card actual
        catalogo.firstChild.before(nota);
    }
    }

  // ====== Limpieza para no dejar señalado nada ======
    function limpiarFormulario() {
    txtNombre.value = "";
    txtCorreo.value = "";
    txtTelefono.value = "";
    intereses.forEach(chk => chk.checked = false);

    // Regresar estilos a como estaban originalmente
    const neutro = (el, lbl, msgEl) => {
        el.style.border = "1px solid #bbb";
        el.style.backgroundColor = "#fff";
        if (lbl) lbl.style.color = "#111";
        if (msgEl) msgEl.textContent = "";
    };

    neutro(txtNombre, lblNombre, msgNombre);
    neutro(txtCorreo, lblCorreo, msgCorreo);
    neutro(txtTelefono, lblTelefono, msgTelefono);

    fsIntereses.style.border = "1px solid #ddd";
    fsIntereses.style.backgroundColor = "#fff";
    lblIntereses.style.color = "#111";
    msgIntereses.textContent = "";
    }

  // ====== AQUI INICIA !!! ======
    btnValidar.addEventListener("click", function () {
    limpiarResultado();

    const okNombre = validarNombre();
    const okCorreo = validarCorreo();
    const okTelefono = validarTelefono();
    const okIntereses = validarIntereses();

    const todoOk = okNombre && okCorreo && okTelefono && okIntereses;

    if (!todoOk) {
        resultado.textContent = "Revisa los campos marcados en rojo.";
        resultado.style.color = "#d93025";
        return;
    }

    // Captura de datos (DOM)
    const data = {
        nombre: txtNombre.value.trim(),
        correo: txtCorreo.value.trim(),
        telefono: txtTelefono.value.trim(),
        intereses: obtenerInteresesSeleccionados()
    };

    // Crear registro dinámico
    crearRegistroDinamico(data);

    resultado.textContent = "Registro agregado al catálogo sin recargar la página.";
    resultado.style.color = "#1e8e3e";

    // Limpieza para siguiente registro
    limpiarFormulario();
    });

})();