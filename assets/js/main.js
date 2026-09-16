/* CGI PARTNERS — site behavior: mobile nav, dropdowns, scroll reveal, form handling */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });

    menu.querySelectorAll(".has-dropdown > a").forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 960) {
          e.preventDefault();
          link.parentElement.classList.toggle("is-open");
        }
      });
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 960 && !link.parentElement.classList.contains("has-dropdown")) {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    });
  }

  /* Mark current nav link */
  var current = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  document.querySelectorAll(".nav-menu a[href]").forEach(function (a) {
    var href = a.getAttribute("href").replace(/\/index\.html$/, "/").replace(/\.html$/, "");
    if (href && (current === href || (href !== "/" && current.endsWith(href)))) {
      a.setAttribute("aria-current", "page");
    }
  });

  /* Scroll reveal */
  var animated = document.querySelectorAll("[data-animate]");
  if ("IntersectionObserver" in window && animated.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    animated.forEach(function (el) { observer.observe(el); });
  } else {
    animated.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Contact form (client-side validation; wire to backend/email service later) */
  var form = document.querySelector("#contact-form");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var data = new FormData(form);
      var subject = encodeURIComponent("Solicitud de contacto — " + (data.get("nombre") || ""));
      var bodyLines = [
        "Nombre: " + data.get("nombre"),
        "Correo: " + data.get("correo"),
        "Teléfono: " + data.get("telefono"),
        "Servicio de interés: " + data.get("servicio"),
        "",
        data.get("mensaje")
      ];
      var body = encodeURIComponent(bodyLines.join("\n"));
      var mailTo = form.getAttribute("data-mailto") || "info@cgipartners.com";
      window.location.href = "mailto:" + mailTo + "?subject=" + subject + "&body=" + body;
      if (status) {
        status.textContent = "Abriendo tu cliente de correo para enviar el mensaje…";
        status.hidden = false;
      }
    });
  }

  /* Footer year */
  var yearEl = document.querySelector("#current-year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
