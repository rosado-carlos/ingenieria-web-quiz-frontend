# Ejercicio tipo quiz

Vas a construir una mini página que practique lo que hemos visto en clase.

## Restricciones

- Archivos obligatorios: index.html, styles.css, app.js/main.js, README.md.
- Debe funcionar abriendo index.html.

## Requisitos

1. Título exacto: el <h1> debe decir Pre-Quiz Web.
1.2 Navegación que permita llegar a las secciones mediante click
2. Sección Registro con formulario que tenga:
- Nombre (required, minlength 3)
- Email (required, type email)
- Rol (select required)
- Checkbox términos (required)
- Botón “Enviar registro”
3. No debe recargar al enviar. Debe usar:
- Validación nativa (checkValidity() / reportValidity())
- preventDefault()
- Mensaje en UI (no solo alert)
4. Botón en el hero con texto exacto Inscribirme que NO envía el form, solo hace focus al input de nombre.
- Trampa: si olvidas type="button" y está dentro de un form, se vuelve submit.
5. Sección Lista de ítems:
- Input con placeholder exacto: Escribe un ítem y presiona Enter
- Enter agrega ítem y también el botón “Agregar”
- Click en un ítem alterna hecho/pendiente
- Botón “Eliminar” por ítem
- Botón “Limpiar hechos”
6. Persistencia con localStorage usando clave exacta: web3_prequiz
7. Footer exacto:
Entrega: WEB-QUIZ | Fecha: ___ | CC: ___

## Clave localStorage
`web_prequiz`
