# Close-to-yatzy
## En studie kring model, objekt/instanser
Vi bygger ett simpelt spel med fem tärningar. 
1. En användare rullar alla tärningar.
2. Varje tärning kan låsas. Olåsta tärningar kan rullas igen.
3. Efter detta kollar vi om det finns någon av följande poänggivande krav är uppfyllda.
- Total tärningssumma över 22. (ger oss 2 poäng)
- En stege (1-2-3-4-5 eller 2-3-4-5-6) (ger oss 3 poäng)
- Alla tärningar udda (ger oss 1 poäng)
4. Vi bokför eventuell poäng och upprepar steg 3 max 3 gånger och returnerar då en totalpoäng.

### Att göra
1. Skapa tärning .
- vad är en tärning? Vilka egenskaper har den?
2. Skapa ett objekt .
- Vad händer när jag skapar två objekt av samma model?
- Vad händer om jag förändrar det ena objektet?
3. Skapa ett objekt som kan innehålla ett annat objekt .  
4. Skapa funktioner som rullar en tärning .
5. Skapa något där vi kan bokföra poäng.
6. Vad behöver vi spara?
- Hur länge finns data? 
- Hur lång är en request?
7. Skriv funktioner som kontrollerar om ett poängmål är uppfyllt
8. Hur "styr" vi detta program? Med URL-requests.
    - Nytt spel
    - Rulla (alla eller någon tärning)
    
9. Hur och var kontrollerar vi villkor för att något är slut/klart?

### Varför funkar det inte?
- undefined
- [] eller {}
- .xyz() is not a method...
