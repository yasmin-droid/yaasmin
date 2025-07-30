// fondo-colores.js

let hue = 0;

setInterval(() => {
  document.body.style.backgroundColor = `hsl(${hue}, 80%, 90%)`;
  hue = (hue + 1) % 360;
}, 50);
