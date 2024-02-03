"use strict";

document.addEventListener("click", documentClick);
document.getElementById("year").innerHTML = new Date().getFullYear();

function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
    // determineLanguage();
  }
}

// -----------Language
setLanguageLink();
smallMenu(document.getElementById("lang"));

function setLanguageLink() {
  var lang = document.getElementById("lang");
  var value = lang.text;
  if (lang.href[lang.href.length - 1] == "#" || lang.href == "") {
    if (value == "BE" || value == "Belgian") {
      document.getElementById("lang").innerHTML = "Belgian";
      lang.href = "#belgian";
    } else if (value == "EN" || value == "English") {
      document.getElementById("lang").innerHTML = "English";
      lang.href = "#english";
    }
  }
}

function determineLanguage(lang) {
  var value = lang.text;
  if (value == "BE") {
    document.getElementById("lang").innerHTML = "Belgian";
  } else if (value == "EN") {
    document.getElementById("lang").innerHTML = "English";
  }
}

function shortLanguage(lang) {
  var value = lang.text;
  if (value == "Belgian") {
    document.getElementById("lang").innerHTML = "BE";
  } else if (value == "English") {
    document.getElementById("lang").innerHTML = "EN";
  }
}

function smallMenu(lang) {
  if (window.screen.width < 767.98) {
    determineLanguage(lang);
  } else {
    shortLanguage(lang);
  }
}

function reportWindowSize() {
  var lang = document.getElementById("lang");
  smallMenu(lang);
}
window.onresize = reportWindowSize;
