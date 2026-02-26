(function () {
  // ====== Referencias DOM ======
    const btnValidar = document.getElementById("btnValidar");
    const btnVaciar = document.getElementById("btnVaciar");
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
    const catalogo = document.querySelector("#catalogo");

  // ====== Contador de registros ======
    let contador = 0;

  // ====== Estilos validación (mismo comportamiento que el tuyo) ======
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

  // ====== Crear tarjeta con EVENTO dinámico de eliminar ======
    function crearRegistroDinamico(data) {
    contador += 1;

    // Card
    const card = document.createElement("div");
    card.className = "card";

    // Badge
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = "Registro #" + contador;

    // Título
    const h3 = document.createElement("h3");
    h3.textContent = data.nombre;

    // Info
    const pCorreo = document.createElement("p");
    pCorreo.textContent = "Correo: " + data.correo;

    const pTel = document.createElement("p");
    pTel.textContent = "Teléfono: " + data.telefono;

    const pInt = document.createElement("p");
    pInt.textContent = "Intereses: " + data.intereses.join(", ");

    // Botón eliminar (por tarjeta)
    const acciones = document.createElement("div");
    acciones.className = "card-actions";

    const btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.className = "btn-delete";
    btnEliminar.textContent = "Eliminar";

    // ✅ EVENTO DINÁMICO: se asigna cuando se crea el elemento
    btnEliminar.addEventListener("click", function () {
      card.remove(); // elimina el elemento completo con hijos

      // Mensaje UX
        resultado.textContent = "Registro eliminado.";
        resultado.style.color = "#d93025";

      // Si quieres, también puedes borrar la nota si ya no hay tarjetas:
      // (opcional)
        if (catalogo.children.length === 0) {
        limpiarResultado();
        }
    });

    acciones.appendChild(btnEliminar);

    // Ensamble
    card.appendChild(badge);
    card.append(h3, pCorreo, pTel, pInt, acciones);

    // Insertar al inicio
    if (catalogo.firstChild) {
        catalogo.insertBefore(card, catalogo.firstChild);
    } else {
        catalogo.appendChild(card);
    }

    // Nota (como tu ejemplo de before)
    if (catalogo.children.length === 2) {
        const nota = document.createElement("div");
        nota.className = "nota";
        nota.textContent = "— Aquí se están agregando los registros —";
        catalogo.firstChild.before(nota);
    }
    }

  // ====== Limpiar formulario ======
    function limpiarFormulario() {
    txtNombre.value = "";
    txtCorreo.value = "";
    txtTelefono.value = "";
    intereses.forEach(chk => chk.checked = false);

    const neutro = (el, lbl, msgEl) => {
        el.style.border = "1px solid #bbb";
        el.style.backgroundColor = "#fff";
        if (lbl) lbl.style.color = "#111";
        if (msgEl) msgEl.textContent = "";
    };

    neutro(txtNombre, lblNombre, msgNombre);
    neutro(txtCorreo, lblCorreo, msgCorreo);
    neutro(txtTelefono, lblTelefono, msgTelefono);

    fsIntereses.style.border = "1px solid #d6dbe1";
    fsIntereses.style.backgroundColor = "#fff";
    lblIntereses.style.color = "#111";
    msgIntereses.textContent = "";
    }

  // ====== Evento: Validar y agregar ======
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

    const data = {
        nombre: txtNombre.value.trim(),
        correo: txtCorreo.value.trim(),
        telefono: txtTelefono.value.trim(),
        intereses: obtenerInteresesSeleccionados()
    };

    crearRegistroDinamico(data);

    resultado.textContent = "Registro agregado al catálogo sin recargar la página.";
    resultado.style.color = "#1e8e3e";

    limpiarFormulario();
    });

  // ====== Evento: Vaciar catálogo (botón al inicio del listado) ======
    btnVaciar.addEventListener("click", function () {
    catalogo.innerHTML = ""; // elimina todo el contenido del catálogo

    resultado.textContent = "Catálogo vaciado. Puedes agregar nuevos registros.";
    resultado.style.color = "#d93025";
    });

})();