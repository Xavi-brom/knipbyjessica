# Bij U Geknipt — website template

Statische website (HTML/CSS/JS, geen build-tools nodig) voor een zzp-kapper
die bij mensen thuis knipt. 3 pagina's: **Home**, **Producten**, **Contact**.

## Bestanden

```
index.html              -> Homepage
producten.html          -> Productenpagina
contact.html            -> Contactpagina met formulier
css/style.css           -> Alle styling (met duidelijke secties/comments)
js/main.js              -> Mobiel menu + formulierverzending
images/logo.svg         -> Placeholder logo (linksboven in de header)
images/foto-placeholder-*.svg   -> Placeholder foto's op de homepage
images/producten/*.svg  -> Placeholder productafbeeldingen
```

## 1. Live zetten via GitHub Pages

1. Maak een nieuwe GitHub-repository aan (bv. `bij-u-geknipt`).
2. Upload alle bestanden uit deze map naar de root van die repository
   (dus `index.html` moet direct in de hoofdmap staan, niet in een submap).
3. Ga naar **Settings -> Pages** in je repository.
4. Kies bij "Source" de branch `main` en map `/ (root)`, klik op **Save**.
5. Na een paar minuten is de site live op:
   `https://JOUW-GEBRUIKERSNAAM.github.io/bij-u-geknipt/`

## 2. Contactformulier laten werken (mail ontvangen)

GitHub Pages host alleen statische bestanden en kan zelf geen e-mail
versturen. De eenvoudigste gratis oplossing is **Formspree**:

1. Ga naar [formspree.io](https://formspree.io) en maak een gratis account.
2. Maak een nieuw formulier en vul jouw eigen e-mailadres in.
3. Je krijgt een link zoals `https://formspree.io/f/abc1234`.
4. Open `contact.html`, zoek naar `FORMSPREE_URL_HIER` en vervang de hele
   `action="..."`-waarde door jouw eigen link.
5. Klaar — berichten komen nu rechtstreeks in je mailbox.

De gratis versie van Formspree is ruim voldoende voor een zzp-website
(50 verzendingen per maand).

## 3. Wat moet je zeker nog aanpassen?

- **Bedrijfsnaam & logo**: nu "Bij U Geknipt" — pas de naam aan in alle
  3 HTML-bestanden (header + footer) en vervang `images/logo.svg`.
- **Teksten**: alle Nederlandse teksten zijn voorbeeldteksten, geschreven
  in de stijl van een kapper-aan-huis-bedrijf. Pas gerust aan naar je
  eigen toon.
- **Contactgegevens**: telefoonnummer, e-mailadres en werkgebied in
  `contact.html`.
- **Producten & prijzen**: in `producten.html`, elk product staat in een
  los `<div class="product-card">` blokje — kopieer/plak of verwijder
  blokken om producten toe te voegen of weg te halen.
- **Foto's**: alle `.svg`-bestanden in `images/` zijn tijdelijke
  plaatsvervangers. Vervang ze door eigen foto's met dezelfde
  bestandsnaam (bv. `images/producten/placeholder-fles.svg` ->
  `images/producten/placeholder-fles.jpg`, en pas dan ook de
  bestandsnaam aan in de `<img src="...">`-tags).
- **Formspree-link** in `contact.html` (zie stap 2 hierboven).

## 4. Kleuren & lettertypes wijzigen

Alles zit centraal in `css/style.css`, bovenaan bij `:root { ... }`
(sectie 1). Verander daar bijvoorbeeld `--color-accent` en de hele site
verandert automatisch mee — je hoeft nergens anders iets aan te passen.

## 5. Aantal producten per rij wijzigen

In `css/style.css`, zoek naar `.product-grid` (sectie 7). Daar staat een
comment die uitlegt hoe je van automatisch schalend naar een vast aantal
kolommen (bv. 3) kunt wijzigen.
