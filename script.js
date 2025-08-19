/*
* @author Zakaria Eddini
* @version 0.1
* @since 19.08.2025
* */

"use strict";

let compteur = 0;
const compteurEl = document.getElementById("compteur-el");
const sauvegardeEl = document.getElementById("sauvegarde-el");
const capturerBtn = document.getElementById("capturer-btn");
const sauvegarderBtn = document.getElementById("sauvegarder-btn");
capturerBtn.addEventListener("click", capturer);
sauvegarderBtn.addEventListener("click", sauvegarder);
capturerBtn.addEventListener("click", capturer);

function capturer(){
    compteur+= 5;
    compteurEl.textContent = compteur;

    if(compteur < 5){
        compteurEl.style.color = "red";
    } else if(compteur < 20){
        compteurEl.style.color = "green";
    } else if(compteur > 30){
        compteurEl.style.color = "yellow";
    }
}

function sauvegarder() {
    let compteurStr = "<li>" + compteur + " Pokémons</li>";
    sauvegardeEl.innerHTML += compteurStr; // Ajouter la valeur actuelle du compteur
    compteur = 0;
    localStorage.setItem("captures", sauvegardeEl.innerHTML);
    compteurEl.textContent = compteur;
}
window.addEventListener("load", () => {
    sauvegardeEl.innerHTML = localStorage.getItem("captures") || "";});