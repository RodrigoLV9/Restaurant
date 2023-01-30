"use strict";
const menu = document.getElementById("menu-logo");
const nav = document.getElementById("nav");
menu === null || menu === void 0 ? void 0 : menu.addEventListener("click", () => {
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle("nav-nuevo");
});
