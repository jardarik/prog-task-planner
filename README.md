# Programming Planning App

Aplikace pro plánování projektů a správu týmu programátorů. Postaveno v Reactu, stylováno pomocí Bootstrapu.

## Funkce

- Přidávání programátorů do týmu (junior/senior)
- Mazání programátorů ze seznamu
- Plánování projektu: zadání počtu řádků kódu a časového limitu, výpočet splnitelnosti
- Přehledný seznam týmu v tabulce
- Moderní responzivní design

## Struktura projektu

- `src/App.jsx` – hlavní komponenta, navigace mezi záložkami, správa stavu týmu
- `src/components/FormAdd.jsx` – formulář pro přidání programátora
- `src/components/TeamList.jsx` – tabulka se seznamem programátorů
- `src/components/FormProject.jsx` – plánování projektu, výpočet splnitelnosti
- `src/team_data.json` – výchozí data týmu
- `src/main.jsx` – vstupní bod aplikace, načítá Bootstrap a FontAwesome

## Použité technologie

- React (funkcionální komponenty, hooks)
- Bootstrap 5
- FontAwesome
- Vite

## Jak spustit

1. Nainstaluj závislosti:
   ```bash
   npm install
   ```
2. Spusť vývojový server:
   ```bash
   npm run dev
   ```
3. Otevři aplikaci v prohlížeči na adrese [http://localhost:5173](http://localhost:5173)

## Poznámky k rozšíření

- Pro větší projekty doporučuji rozdělit logiku do více komponent
- Data lze načítat z API místo statického JSON
- Bootstrap grid používej jednotně pro layout

## Autor

Jardarik
