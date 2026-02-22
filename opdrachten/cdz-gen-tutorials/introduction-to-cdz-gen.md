---
title: Maken van coderdojo opdrachten met de cdz-assignment-generator
author: Ben Mens
level: 5
template: default
theme: generic
description: |
    Maken van coderdojo opdrachten met de cdz-assignment-generator
infoBlocks:
  - title: Voorkennis
    content: | 
      markdown

  - title: Leerdoelen
    content: |
     - Maken van een opdracht voor CoderDojo
      
---

********************************************************************************

::: read

*Introductie*

In deze opdracht wordt uitgelegd hoe je met de cdz-assignment-generator
CoderDojo opdrachten kan maken.

:::

________________________________________________________________________________

::: read

*Over markdown*

Markdown is een eenvoudige opmaaktaal waarmee je tekst kunt structureren en
opmaken met simpele tekens. Het wordt veel gebruikt voor documentatie,
README-bestanden (bijvoorbeeld op GitHub), forums en notities.

Het idee: je schrijft gewone tekst met een paar speciale symbolen, en die
worden omgezet naar mooi opgemaakte tekst (vaak HTML).

Zie ook [Markdown Guide](https://www.markdownguide.org/){target=_blank}

(bron: ChatGPT, prompt: "Wat is markdown?")

:::

________________________________________________________________________________

::: read

*Over cdz-assignment-generator*

De CDZ assignment generator is een tool waarmee markdown bestanden eenvoudig
kunnen worden omgezet naar CoderDojo opdrachten in HTML.

Vaak voorkomende blokken kunnen in een bibliotheek worden gezet zodat ze in
meerdere opdrachten kunnen worden gebruikt.

Deze gegenereerde
HTML bestanden zijn geschikt op te kunnen printen over meerdere pagina's. Met
de text \*pagebreak\* kan je ervoor zorgen dat de volgende sectie op een nieuwe
pagina begint.

## voorbeeld

- [markdown](https://raw.githubusercontent.com/coderdojo-zoetermeer/cdz-assignment-generator/refs/heads/main/opdrachten/scratch/scratch.md){target=_blank}
- [HTML](https://coderdojo-zoetermeer.github.io/cdz-assignment-generator/scratch/scratch.html){target=_blank}

:::

________________________________________________________________________________

::: read

*Over blokken*

Hieronder worden de blokken verder uitgelegd
:::

________________________________________________________________________________

::::: read

*read-blok uitleg*

Een read-blok is een blokje text waarin uitleg wordt aan de leerling. Probeer
deze blokjes klein te houden en begin elk blokje met een kopje waaruit
duidelijk wordt wat er wordt uitgelegd, zodat de leerling kan bepalen of
leerling het blokje moet lezen of hen het wil lezen.

:::: demo

::: read

*Titel read blok*

Tekst Read blok.

:::

::::

:::::

________________________________________________________________________________

::::: read

*programmeer-blok uitleg*

Een programmeer-blok wordt gebruik om aan te duiden dat de leerling iets moet
programmeren. In programmeerblokken kan je stukjes code toevoegen. Deze worden
automatisch opgemaakt met syntax highlights.

:::: demo

::: program

*Titel programmeer blok*

Tekst programmeerblok.

``` py

print('Hello world!')

```

:::

::::

:::::

________________________________________________________________________________

::::: read

*build-blok uitleg*

Een build wordt gebruikt om aan te duiden dat de leering iets moet doen. Dit
is met name van toepassing voor Arduino opdrachten. bijvoorbeeld voor het
bouwen van een elektronische schakeling.

:::: demo

::: build

*Titel build blok*

Tekst build-blok.

:::

::::

:::::
