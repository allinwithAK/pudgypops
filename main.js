(function () {
  var cfg = window.PUDGY_CONFIG || {};

  // Theme toggle (dark is the brand default; remembered per browser when possible)
  var root = document.documentElement;
  try { var saved = localStorage.getItem("pp-theme"); if (saved) root.setAttribute("data-theme", saved); } catch (e) {}
  var btn = document.querySelector(".theme-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("pp-theme", next); } catch (e) {}
    });
  }

  // Footer year + contact email + social links
  document.querySelectorAll("[data-year]").forEach(function (n) { n.textContent = new Date().getFullYear(); });
  document.querySelectorAll("[data-email]").forEach(function (n) {
    n.textContent = cfg.contactEmail || "";
    n.setAttribute("href", "mailto:" + (cfg.contactEmail || ""));
  });
  document.querySelectorAll("[data-social]").forEach(function (n) {
    var url = cfg.social && cfg.social[n.getAttribute("data-social")];
    if (url) n.setAttribute("href", url); else n.style.display = "none";
  });

  // Join forms: Mailchimp if configured, otherwise email fallback
  document.querySelectorAll(".join-form").forEach(function (form) {
    var msg = form.parentNode.querySelector(".form-msg");
    var hp = form.querySelector(".hp");
    if (cfg.mailchimpAction) {
      form.setAttribute("action", cfg.mailchimpAction);
      form.setAttribute("method", "post");
      form.setAttribute("target", "_blank");
      var email = form.querySelector('input[type="email"]');
      email.setAttribute("name", "EMAIL");
      if (hp && cfg.mailchimpHoneypotName) { hp.setAttribute("name", cfg.mailchimpHoneypotName); }
      form.addEventListener("submit", function () {
        if (msg) msg.textContent = "Almost there! Finish confirming in the new tab. 🍦";
      });
    } else {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var v = form.querySelector('input[type="email"]').value.trim();
        if (v.indexOf("@") < 1) { if (msg) msg.textContent = "Please enter a valid email."; return; }
        var subject = encodeURIComponent("Add me to the PUDGY POPS list");
        var body = encodeURIComponent("Hi! Please add this email to the early access list: " + v);
        window.location.href = "mailto:" + cfg.contactEmail + "?subject=" + subject + "&body=" + body;
        if (msg) msg.textContent = "Your email app should open. Just hit send! 🍦";
      });
    }
  });

  // Popsicle Family gallery
  var gal = document.getElementById("family-grid");
  if (gal) {
    var fam = window.PUDGY_FAMILY || [];
    var empty = document.getElementById("family-empty");
    if (!fam.length) { if (empty) empty.hidden = false; return; }
    if (empty) empty.hidden = true;
    fam.forEach(function (m) {
      var c = document.createElement("article");
      c.className = "card family-card";
      var img = document.createElement("img");
      img.src = m.image; img.alt = (m.name || "Popsicle Pudgy") + (m.note ? ", " + m.note : "");
      img.loading = "lazy";
      var d = document.createElement("div");
      var h = document.createElement("h3"); h.textContent = m.name || "Popsicle Pudgy";
      var s = document.createElement("small"); s.textContent = (m.note ? m.note + " · " : "") + (m.credit ? "Art/holder: " + m.credit : "");
      d.appendChild(h); d.appendChild(s); c.appendChild(img); c.appendChild(d); gal.appendChild(c);
    });
  }
})();
