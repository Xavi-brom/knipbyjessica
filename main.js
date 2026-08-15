/* ==========================================================================
   BIJ U GEKNIPT — SCRIPT
   Twee onderdelen:
   1. Mobiel hamburgermenu open/dicht klikken
   2. Contactformulier versturen via Formspree (zonder de pagina te verlaten)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------------
     1. MOBIEL MENU
     Klapt de navigatie in/uit op kleine schermen (zie css sectie 10).
     ------------------------------------------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Menu automatisch sluiten als er op een link geklikt wordt
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }


  /* ------------------------------------------------------------------
     2. CONTACTFORMULIER
     --------------------------------------------------------------
     BELANGRIJK — dit moet je zelf instellen voor dit werkt:

     GitHub Pages kan zelf geen e-mail versturen (het is een pure
     bestanden-host, zonder server). De simpelste gratis oplossing is
     Formspree (https://formspree.io):

       1. Maak een gratis account op formspree.io
       2. Maak een nieuw formulier aan en vul jouw eigen e-mailadres in
          (het e-mailadres waar de berichten naartoe moeten)
       3. Formspree geeft je een link zoals:
          https://formspree.io/f/abc1234
       4. Plak die link in contact.html bij het formulier, in het
          "action"-attribuut (zoek naar "FORMSPREE_URL_HIER")
       5. Klaar — berichten komen nu in jouw mailbox binnen.

     Dit script zorgt er alleen voor dat de gebruiker een nette
     bevestiging op de pagina ziet, in plaats van doorgestuurd te
     worden naar een andere website.
     ------------------------------------------------------------------ */
  var form = document.getElementById('contact-form');
  var statusBox = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var actionUrl = form.getAttribute('action');

      // Waarschuwing in de console zolang de eigenaar de URL nog niet heeft aangepast
      if (!actionUrl || actionUrl.indexOf('FORMSPREE_URL_HIER') !== -1) {
        showStatus('error', 'Het formulier is nog niet gekoppeld aan een e-mailadres. Zie de instructies in js/main.js.');
        return;
      }

      var submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Bezig met versturen…';
      }

      fetch(actionUrl, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            showStatus('success', 'Bedankt! Uw bericht is verstuurd, ik neem snel contact met u op.');
            form.reset();
          } else {
            showStatus('error', 'Er ging iets mis bij het versturen. Probeer het later opnieuw of bel/mail rechtstreeks.');
          }
        })
        .catch(function () {
          showStatus('error', 'Er ging iets mis bij het versturen. Controleer uw internetverbinding en probeer opnieuw.');
        })
        .finally(function () {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Verstuur bericht';
          }
        });
    });
  }

  function showStatus(type, message) {
    if (!statusBox) return;
    statusBox.textContent = message;
    statusBox.className = 'form-status is-visible form-status--' + type;
    statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

});
