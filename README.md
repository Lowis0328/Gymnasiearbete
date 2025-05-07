# Hälsokompassen

Hälsokompassen är en webbaserad applikation utvecklad med Flask som syftar till att hjälpa användare att förbättra sin hälsa och sitt välmående. Genom att erbjuda råd inom områden som kost, träning, sömn och stress samt praktiska verktyg som en BMR-kalkylator och AI-driven rådgivning, vill projektet guida användare mot en hälsosammare livsstil.

---

## Funktioner

- **Råd:** Omfattande hälsoråd inom kost, träning, sömn och stress, presenterade på separata sidor för enkel navigering.
- **Verktyg:** Praktiska verktyg för att stödja hälsosamma vanor, inklusive en BMR-kalkylator som hjälper användare att uppskatta sin basalmetabolism baserat på ålder, vikt, längd, aktivitetsnivå och kön.
- **AI Rådgivning:** En AI-driven chattfunktion som använder Cohere API för att ge personliga hälsorekommendationer och svara på frågor på användarens språk.
- **Källor:** En samling av referenser och resurser som ligger till grund för råd och verktyg i applikationen.

---

## Installation och krav

För att köra Hälsokompassen lokalt behöver du ha Python installerat samt följande beroenden:

- Flask
- cohere
- python-dotenv
- gunicorn
- och andra beroenden listade i `requirements.txt`

Installera beroenden med:

```bash
pip install -r requirements.txt
```

---

## Användning

1. Klona eller ladda ner projektet.
2. Skapa en `.env`-fil i projektets rotkatalog och lägg till din Cohere API-nyckel:

```
API_KEY=din_cohere_api_nyckel
```

3. Starta applikationen med:

```bash
python backend.py
```

4. Öppna webbläsaren och navigera till `http://localhost:5000` för att använda Hälsokompassen.

---

## Teknologier som används

- **Flask:** Python-baserat webbframework för backend.
- **Cohere API:** AI-tjänst för naturlig språkbehandling och chattfunktionalitet.
- **Bootstrap:** CSS-ramverk för responsiv och modern design.
- **JavaScript:** För interaktivitet, inklusive BMR-kalkylator och AI-chatt.
- **Python-paket:** Bland annat `python-dotenv` för miljövariabler och `gunicorn` för produktion.

---

## Projektstruktur

- `backend.py` – Flask-applikationens backend och API-rutter.
- `templates/` – HTML-mallar för olika sidor som råd, verktyg, AI-chatt och kalkylator.
- `static/` – Statisk innehåll som CSS och JavaScript-filer.
- `requirements.txt` – Lista över Python-beroenden.
- `råd.txt` – Textfil med hälsoråd (kan användas för innehåll).
- `Meta/` – Metadata och bilder relaterade till projektet.

---

## Licens

Projektet innehåller en licensfil i `Meta/LICENSE`. Kontrollera denna för detaljer om användning och distribution.

---

## Kontakt

För frågor eller feedback, vänligen kontakta projektets skapare.

---

Tack för att du använder Hälsokompassen – din guide till bättre hälsa och välmående!
