// 1. Configuración centralizada del negocio (Cambias el teléfono aquí y se actualiza en toda la web)
const TELEFONO_BARBERIA = "56996096931"; // Reemplazar por el número real en formato 569...

// 2. Detectar clic en cualquier botón de servicio y armar mensaje personalizado
const botonesServicio = document.querySelectorAll(".btn-card");

botonesServicio.forEach((boton) => {
  boton.addEventListener("click", () => {
    const servicioElegido = boton.getAttribute("data-servicio");
    const mensaje = `Hola Barbería Don Benja, vi su web y me gustaría agendar el servicio: *${servicioElegido}*. ¿Qué horas tienen disponibles?`;
    
    // Codifica el mensaje para que funcione perfecto en URLs
    const urlWhatsApp = `https://wa.me/${TELEFONO_BARBERIA}?text=${encodeURIComponent(mensaje)}`;
    
    // Abre WhatsApp en una pestaña nueva o en la app del teléfono
    window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
  });
});

// 3. Actualizar el año automáticamente en el pie de página
document.getElementById("anio-actual").textContent = new Date().getFullYear();