"use strict";

// Carrito simple: solo cuenta los productos agregados.
const contador = document.getElementById("cart-count");
const botonCarrito = document.getElementById("cart-btn");
const items = [];

document.querySelectorAll(".add").forEach((boton) => {
  boton.addEventListener("click", () => {
    items.push(boton.dataset.nombre);
    contador.textContent = String(items.length);
    boton.textContent = "¡Agregado!";
    setTimeout(() => { boton.textContent = "Agregar"; }, 1000);
  });
});

botonCarrito.addEventListener("click", () => {
  const resumen = items.length ? items.join(", ") : "Tu carrito está vacío";
  window.alert(resumen);
});
