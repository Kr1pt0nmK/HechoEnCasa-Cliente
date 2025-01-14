function actualizarFechaHora() {
    const fechaBanner = document.getElementById("#fecha-banner");
    const horaBanner = document.getElementById("#hora-banner");

    const ahora = new Date();

    const opcionesFecha = { year: 'numeric', month: 'short', day: 'numeric' };
    const fechaFormateada = ahora.toLocaleDateString('es-ES', opcionesFecha);

    const opcionesHora = { hour: 'numeric', minute: 'numeric', hour12: true };
    const horaFormateada = ahora.toLocaleTimeString('es-ES', opcionesHora);

    fechaBanner.textContent = fechaFormateada;
    horaBanner.textContent = horaFormateada;
}

actualizarFechaHora();

setInterval(actualizarFechaHora, 60000);