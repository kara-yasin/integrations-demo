# Integrations Demo – REST JSON Transformer

Detta projekt är ett enkelt REST API som tar emot ett JSON-meddelande, transformerar dess fält och returnerar resultatet. Syftet är att demonstrera grundläggande kunskap inom integrationsutveckling, REST API:er och datahantering.

## Funktioner
- Tar emot ett JSON-objekt via en POST-endpoint (`/transform`).
- Mapperar fält till nya namn (t.ex. `name` → `fullName`, `age` → `yearsOld`).
- Returnerar transformerad data i JSON-format.

## Teknologier
- Node.js
- Express.js
- JSON

## Kom igång

### Krav
- Node.js installerat

### Installation
1. Klona repot:
   ```bash
   git clone https://github.com/kara-yasin/integrations-demo.git
   cd integrations-demo

2. Installera beroenden: 
    ```bash
    npm install

3. Starta Servern:
    ```bash
    npm start

## Testa API:et
Skicka en POST-förfrågan till http://localhost:3000/transform med följande JSON-data:

    
    {
  "name": "Anna",
  "age": 30,
  "city": "Landskrona"
}

    Förväntat svar:

    
    {
  "fullName": "Anna",
  "yearsOld": 30,
  "location": "Landskrona"
}

    Exempel med curl:

    
    curl -X POST http://localhost:3000/transform \
  -H "Content-Type: application/json" \
  -d '{"name":"Anna","age":30,"city":"Landskrona"}'

## Möjliga Utökningar
Lägg till stöd för XML-input.
Implementera omvandling via en konfigurationsfil.
Lägg till validering och felhantering.
