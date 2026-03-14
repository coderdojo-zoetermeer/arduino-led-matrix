<!-- #region all -->

<!-- #region comment -->
________________________________________________________________________________
::: read

*Voorbeeld commentaar*

@grids.grid-border gap-px grid-cols-2
@grid

```python
# Deze regels worden niet door 
# de computer gelezen omdat 
# ze met een hekje beginnen.
```

@grid

Commentaar – de computer negeert regels die met een `#`
beginnen.

@end
:::
<!-- #endregion comment -->

<!-- #region variables -->
________________________________________________________________________________
::: read

*Voorbeeld variabelen*

@grids.grid-border gap-px grid-cols-2
@grid

```python
mijn_variabele = 100
```

@grid

Geef de variabele met de naam `mijn_variabele` de waarde 100.

```scratch
maak [mijn_variabele v] (100)
```

@end
:::
<!-- #endregion variables -->

<!-- #region print -->
________________________________________________________________________________
::: read

*Voorbeeld print*

@grids.grid-border gap-px grid-cols-2
@grid

```python
print("hallo")
print(42)
print(mijn_variabele)
```

@grid

Met print kan je iets op het scherm afdrukken. Dit lijkt op het scratch-blok
`zeg`.

```scratch
zeg [hallo]
zeg (42)
zeg (mijn_variabele)
```

@end
:::
<!-- #endregion print -->

<!-- #region if_else -->
________________________________________________________________________________
::: read

*Voorbeeld if ... else ...*

@grids.grid-border gap-px grid-cols-2
@grid

```python
if mijn_variabele == 42:
  print ("mijn_variabele is 42")
else:
  print ("mijn_variabele is NIET 42")
```

@grid

Met `if` kan je ervoor zorgen dat commando's alleen worden uitgevoerd als aan een
voorwaarde is voldaan. In dit voorbeeld is de voorwaarde
`mijn_variabele == 42`.

De commando's onder `else` worden uitgevoerd als NIET aan de voorwaarde is
voldaan.

```scratch
als <(mijn_variabele) = (42)> dan
  zeg [mijn_variabele is 42]
anders
  zeg [mijn_variabele is NIET 42]
end

```

@end
:::
<!-- #endregion if_else -->

<!-- #region while -->
________________________________________________________________________________
::: read

*Voorbeeld while*

@grids.grid-border gap-px grid-cols-2
@grid

```python

while mijn_variabele == 100:
  print("mijn variabele is 100")
```

@grid

Lus (herhaal) zolang de voorwaarde `mijn_variabele == 100` klopt.

Dit lijkt op een herhaal-blok in scratch. Het verschil is dat je in scratch
de voorwaarde moet opgeven waarmee de herhaling wordt gestopt. In Python geef
je de voorwaarde om door te gaan met herhalen.

```scratch
herhaal tot <niet <(mijn_variabele) = (100)>>
  say [mijn variabele is 100]

```

@end
:::
<!-- #endregion while -->

<!-- #region break -->
________________________________________________________________________________
::: read

*Voorbeeld break*

@grids.grid-border gap-px grid-cols-2
@grid

```python

toets_ingedrukt = 'a'

while True:
  if toets_ingedrukt == 'a':
    print("toets a is ingedrukt")
    print("ik stop de lus met break")
    break
  else:
    print("ik wacht op de toets a")

print("De lus is afgebroken")
```

@grid

Met `break` kan je een lus stoppen.

@end
:::
<!-- #endregion break -->

<!-- #endregion all -->
