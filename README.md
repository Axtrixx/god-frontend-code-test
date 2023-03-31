## Kodtest för react

Detta är en parprogrammerings-övning så ställa gärna frågor och google är din vän. Det är också bra att tänka högt och diskutera vad som ska göras.
Co-pilot är ej tillåtet.


### Uppgiften
Byggarebob jobbar på sin nya webbplats och vill kunna visa upp all sin otroliga personal för sina kunder.
Målet är att kunna presentera företagets personal i en lista innehållande bilder, namn och yrke
Exempel på hur det kan se ut.
![image (10)](https://user-images.githubusercontent.com/8349939/227497747-3fa1c49e-cbac-4c1f-bf3d-e85845f97c57.png)

Vi behöver i våran POC inte designa allt utan det viktigaste är att visa för Byggarebob att react är rätt verktyg
för att lösa detta problem.

Informationen som behövs för att hämta personalen finns en json fil (employees.json) som ska representera utdata ifrån 
ett api, detta bör hämtas via ett "get" anrop till http://localhost:3000/api/employees.json.
Utdatan ser ut som exemplet nedan:
```json
[
  {
      "id": 1,
      "name": "Torbjörn",
      "profession": "Designer",
      "imageUrl": "/images/Designer.svg"
    }
]
```

Tips för starta miljö:
npm run dev


### Bonuspoäng:
 - En mui component (se resurser för länk)
 - En react component
 - En custom hook (förslagsvis bryta ut api-anropet)

### Extra bonusuppgifter
- https://bigfrontend.dev/react
- https://bigfrontend.dev/react/useArray


### Resurser:
https://react.dev/learn
https://mui.com/
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
