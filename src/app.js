/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let quien = ["pepe", "pepa", "pipe", "popi"];
  let cuando = ["en la mañana", "a medio dia", "en la tarde", "en la noche"];
  let accion = ["se comio", "prendio fuego a", "boto a la basura", "mojo"];
  let que = ["mi pantalon", "mi tarea", "mi desayuno", "mi telefono"];

  var palabraQuien = quien[Math.floor(Math.random() * quien.length)];
  var palabraCuando = cuando[Math.floor(Math.random() * cuando.length)];
  var palabraAccion = accion[Math.floor(Math.random() * accion.length)];
  var palabraQue = que[Math.floor(Math.random() * que.length)];

  let unirPalabras =
    palabraQuien + " " + palabraCuando + " " + palabraAccion + " " + palabraQue;

  let parrafo = document.querySelector("#excusas");
  parrafo.textContent = unirPalabras;

  console.log(unirPalabras);
};
