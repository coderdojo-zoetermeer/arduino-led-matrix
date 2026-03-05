---
title: Kat Race
acknowledgements:
level: 2
template: default
progLang: scratch3
theme: scratch
description: |
    Kat Race
infoBlocks:
  - title: Voorkennis
    content: | 
        Deze opdracht is gemaakt voor beginners
      
  - title: Leerdoelen
    content: |
      - x-as
      - gebeurtenissen
      - variabelen
      
---

********************************************************************************

::: read

*Introductie*

In deze opdracht ga je een spel maken die als doel heeft de kat zo snel mogelijk
naar de overkant te laten lopen.

:::
________________________________________________________________________________
::: program

![cat =50x ](./assets/cat.svg){.float-right}
*begin van de opdracht*

Ga naar de Kat-sprite en maak de kat kleiner. Zet de grootte op 50.

![size-to-50 =400x ](./assets/size-to-50.svg)

:::

________________________________________________________________________________

::: program

![cat =50x ](./assets/cat.svg){.float-right}
*Zet kat links*

Als het spelletje start (Groene vlag) moet de kat links van het scherm staan.
Gebruik de onderstaande code blokken om dit mogelijk te maken.

![cat-to-left =300x ](./assets/cat-to-left200.svg)

:::

________________________________________________________________________________

::: read

*Uitleg x-as*

X wijst de plek van links naar recht op het scherm.

- Helemaal links is -220
- Het midden is 0
- Helemaal rechts is 220

![x-as =600x ](./assets/x-as.drawio.svg)

:::

________________________________________________________________________________

::: program

![cat =50x ](./assets/cat.svg){.float-right}
*De kat laten bewegen*

We willen de kat iedere keer een stukje naar voren laten bewegen als we op de
spatiebalk drukken, dit kunnen we met de volgende extra code blokken.

Voeg de code die in het rode rechthoek staat toe aan de code
van ![cat =30x](./assets/cat.svg).

![take-10-steps =400x ](./assets/take-10-steps.svg)

![start-flag =400x](./assets/start-flag.svg){.float-right}
Probeer het uit:

- Start het programma door op de groene vlag te klikken.
- Druk een paar keer op de spatiebalk.
- Start het programma opnieuw door op de groene vlag te klikken.
- Houd de spatiebalk ingedrukt.

Snap je hoe het werkt?

:::

________________________________________________________________________________

::: read

![events =200x](./assets/events.svg){.float-right}
*Uitleg gebeurtenissen*

Een gebeurtenis is iets dat door de computer wordt herkend en waarmee je een
blok in je programma kan starten.

De gebeurtenis [wanneer op ![flag =20x](./assets/flag.svg) wordt geklikt] wordt
door de computer herkend als je met je muis op de groene vlag klikt. De acties
onder het blok [wanneer op ![flag =20x](./assets/flag.svg) wordt geklikt] worden
dan uitgevoerd.

De gebeurtenis [wanneer spatiebalk is ingedrukt] wordt herkend als de spatiebalk
wordt ingedrukt. De acties onder deze gebeurtenis worden dan uitgevoerd.

Er zijn nog veel meer gebeurtenissen die je kan gebruiken. Deze vind bij
gebeurtenissen in de balk links.

:::

________________________________________________________________________________

::: program

![cat =50x ](./assets/cat.svg){.float-right}
*Niet vals spelen!*

![wait-for-release-space-key =200x](./assets/wait-for-release-spacekey.svg){.float-right}
Om te voorkomen dat je makkelijk aan de overkant komt, willen we wachten nadat
de spatiebalk is ingedrukt, dat hij eerst weer is los gelaten.

Pas de code van ![cat =30x](./assets/cat.svg) aan zoals hiernaast is in de
rode rechthoek is weergegeven.

Kijk goed naar de kleuren!

- Het blok ![wacht =x12](./assets/wacht.svg) (donker oranje) vind je in de Besturen lijst
- Het blok ![niet =x12](./assets/niet.svg) (groen) vind je in de Functies lijst
- Het blok ![space =x12](./assets/toets-space.svg) (licht blauwe) vind je in de Waarnemen lijst

Je moet de blokken dus in elkaar schuiven!

:::

________________________________________________________________________________

::: program

![cat =50x ](./assets/cat.svg){.float-right}
*Een finishlijn toevoegen*

Maak een nieuwe Sprite (plaatje) aan en teken hier een finishlijn in.

![draw-sprite =200x](./assets/draw-sprite.svg)
![finish-line =200x](./assets/finishline.png)

:::

________________________________________________________________________________

::: program

![cat =50x ](./assets/cat.svg){.float-right}
*Spel laten stoppen als kat bij de finish is*

Als de kat nu bij de finish lijn komt moet ons spel stoppen. Dit kan je met de
volgende code blokken doen. Voeg deze codeblokken toe
aan ![cat =30x](./assets/cat.svg)

![stop-at-finish =200x](./assets/stop-at-finish.svg)

:::

________________________________________________________________________________

::: read

*uitleg variabelen*

Met variabelen kan je je programma vertellen om dingen te onthouden. Een
variabele is een plekje in het geheugen van de computer waarin je een waarde kan
bewaren. Bijvoorbeeld de score of de uitkomst van een som.

## Maken van een variabele

Om een variabele te kunnen gebruiken, moet je hem eerst maken. Dit doe je door
op maak variabele te klikken.

![maak variabele =200x](./assets/maak-variabele.svg)

Je krijgt nu een formulier waarin je de variabele een naam kan geven. In dit
voorbeeld score.

![maak variabele1 =200x](./assets/maak-variabele1.svg)

## Gebruiken van een variabele

Je krijgt nu een nieuwe bouwsteen die je kan gebruiken in je programma.

![maak variabele =x75](./assets/maak-variabele2.svg)
![gebruik variabele =x100](./assets/gebruik-variabele.svg)

:::

________________________________________________________________________________

::: program

![cat =50x ](./assets/cat.svg){.float-right}
*De tijd bijhouden*

Dit is een Race! dus moeten we de tijd bij gaan houden hoelang de kat erover
doet.

We hebben hiervoor een variabele nodig met de naam <code>tijd</code>. In de
uitleg over variabelen staat hoe dit moet.

Maak nu zelf een variabele met de naam tijd.

![variabele tijd =x150](./assets/variabele-tijd.svg)

:::
