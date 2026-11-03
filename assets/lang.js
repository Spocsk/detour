// Sélecteur de langue : mémorise le choix (lu par le script de l'accueil) et ferme le menu.
(function () {
  var menu = document.querySelector("details.lang");
  if (!menu) return;
  menu.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-lang]");
    if (!a) return;
    try { localStorage.setItem("detour-lang", a.getAttribute("data-lang")); } catch (err) {}
  });
  document.addEventListener("click", function (e) { if (!menu.contains(e.target)) menu.open = false; });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.open) { menu.open = false; menu.querySelector("summary").focus(); }
  });
})();
