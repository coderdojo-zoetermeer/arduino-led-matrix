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
van ![cat =12x](./assets/cat.svg).

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

De gebeurtenis [wanneer op ![flag =12x](./assets/flag.svg) wordt geklikt] wordt
door de computer herkend als je met je muis op de groene vlag klikt. De acties
onder het blok [wanneer op ![flag =12x](./assets/flag.svg) wordt geklikt] worden
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

![wait-for-release-space-key =300x](./assets/wait-for-release-spacekey.svg){.float-right}
Om te voorkomen dat je makkelijk aan de overkant komt, willen we wachten nadat
de spatiebalk is ingedrukt, dat hij eerst weer is los gelaten.

Pas de code van ![cat =12x](./assets/cat.svg) aan zoals hiernaast is in de
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

![stop-at-finish =300x](./assets/stop-at-finish.svg){.float-right}
Als de kat nu bij de finish lijn komt moet ons spel stoppen. Dit kan je met de
volgende code blokken doen.

Voeg deze codeblokken toe aan ![cat =12x](./assets/cat.svg)

Dit zorgt ervoor dat ![cat =12x](./assets/cat.svg) hallo zegt als hij
<code>Sprite 2</code> raakt. <code>Sprite 2</code> is de sprite voor de
finishlijn.

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
*Maken variabele voor het bijhouden van de tijd*

Dit is een Race! dus moeten we de tijd bij gaan houden hoelang de kat erover
doet.

We hebben hiervoor een variabele nodig met de naam <code>tijd</code>. In de
uitleg over variabelen staat hoe dit moet.

Maak nu zelf een variabele met de naam tijd.

![variabele tijd =x150](./assets/variabele-tijd.svg)

:::

________________________________________________________________________________

::: program

![cat =50x ](./assets/cat.svg){.float-right}
*De tijd bijhouden*

Nu moeten we er eerst voor zorgen dat de tijd op nul wordt gezet als je het
programma start.

![reset time =x150](./assets/reset-time.svg)

Zorg er nu voor dat de variable <code>tijd</code> elke seconde met 1 wordt
verhoogt.

![count seconds =x150](./assets/count-seconds.svg)

:::

________________________________________________________________________________

::: program

![cat =50x ](./assets/cat.svg){.float-right}
*Score en tijd laten zien*

![say score =300x](./assets/say-score.svg){.float-right}
We gaan er nu voor zorgen dat je de score ziet als ![cat =12x](./assets/cat.svg)
bij de finish komt.

De tijd meten in hele seconden is misschien niet zo leuk. Laten we de tijd
in 1/10 van een seconde gaan meten.

We willen dus de variabele tijd niet 1x per seconde verhogen, maar 10x
per seconden

Pas de code aan zoals hiernaast is weergegeven.

:::

________________________________________________________________________________

::: program

![cat =50x ](./assets/cat.svg){.float-right}
*Hindernissen 1*

Laten we het wat moeilijker maken en een hindernis op de weg van de kat zetten.

Dit kan je doen door Kies een sprite. Kies een leuk plaatje uit en
maak het plaatje ook weer wat kleiner, bijvoorbeeld weer grootte 50

![banaan =400x](./assets/banaan.svg)

Nu moeten we ervoor zorgen dat als ![cat =12x](./assets/cat.svg) de hindernis
aanraakt (de bananen) dat de kat weer terug word gezet aan het begin van het
spel. Dat kan je met de volgende commando blokken doen

![banaan =300x](./assets/hit-banannas.svg)

:::

________________________________________________________________________________

::: read

*Uitleg y-as*

![y-as =150x ](./assets/y-as.drawio.svg){.float-right}
Y wijst de plek van boven naar beneden op het scherm.

- Helemaal boven is 170
- Het midden is 0
- Helemaal onder is -170

:::

________________________________________________________________________________

::: program

![cat =50x ](./assets/cat.svg){.float-right}
*Omhoog bewegen*

Nu moeten we het wel mogelijk maken voor de kat om de hindernis te ontwijken.
Dit kunnen we doen door de kat omhoog en omlaag te laten gaan. Gebruik pijltje
omhoog om de kat om hoog te laten gaan. De Y Positie van de kat bepaald hoe
hoog de kat staat.

![banaan =300x](./assets/move-up.svg)

:::

________________________________________________________________________________

::: program

![cat =50x ](./assets/cat.svg){.float-right}
*Omlaag bewegen*

Maak zelf een block om de kat omlaag te laten bewegen als op pijltje omlaag
wordt gedrukt.

:::

________________________________________________________________________________

::: program

![cat =50x ](./assets/cat.svg){.float-right}
*Y positie op 0 zetten bij het begin*

Als het spel begint moet ![cat =12x](./assets/cat.svg) op y-positie 0 staan.

Voeg het onderstaande blok toe aan je programma. Je moet zelf bepalen waar hij
moet komen.

![reset y =150x](./assets/reset-y.svg)

:::

________________________________________________________________________________

::: challenge 1

*Extra hindernissen*

![meer hindernissen =200x](./assets/meer-hindernissen.png){.float-right}
Maak meerdere hindernissen door rotsen toe te voegen.

Zorg er voor dat als de kat tegen
de hindernissen aanloopt hij altijd
weer terug links word geplaatst!

:::

________________________________________________________________________________

::: challenge 1

*Langzamer lopen*

Laat de kat langzamer lopen, dus dat je nog veel vaker op de spatiebalk moet
drukken om bij de finish te komen.

- Met hoeveel stappen per keer loopt de kat nu?
- Moet je het aantal stappen hoger of lager maken om de kat langzamer
  te laten lopen?

:::

________________________________________________________________________________

::: challenge 1

*Twee spelers*

Kan je dit een 2-speler spel maken?

- Maak naast de kat een andere speler in je spel
- Kopieer de code van de kat naar de andere speler

Verander de toetsen voor de spelers

- Kat (Speler 1)

  - Vooruit : Z
  - Omhoog: S
  - Omlaag: X

- Speler 2
  - Vooruit: N
  - Omhoog: K
  - Omlaag: M

- Als de 2 spelers elkaar aanraken, zet dan beide spelers terug aan het begin!

:::

________________________________________________________________________________

::: read

*Voorbeeld spel programma*

[Download](./assets/cat-race.sb3)

![result =700x ](./assets/example-result.png)

:::
