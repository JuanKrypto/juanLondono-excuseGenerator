/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let quien = ["pepe", "pepa", "pipe", "papi"];
  let cuando = ["mañana", "medio dia", "tarde", "noche"];
  let accion = ["pepe", "pepa", "pipe", "papi"];
  let que = ["pepe", "pepa", "pipe", "papi"];

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
