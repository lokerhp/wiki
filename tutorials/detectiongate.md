# Detectiepoortjes setup

Met detectiepoortjes kan je zien of iemand illegale items bij zich heeft, zoals bijvoorbeeld wapens. Je kunt detectiepoortjes goed gebruiken bij bijvoorbeeld een politiebureau, legerbasis of gevangenis.

## Hoe maak je een detectiepoortje?

Plaats een iron block op de grond en zet daar een golden pressure plate op. Zet daarboven of daarnaast 1 of meerdere zwarte wol blokken.

![Detectiongate setup](./detectiongate_setup.gif)

## Config

```yml
DetectionGate:
  Items:
  - SUGAR
  - IRON_HOE
  - STICK
  - WOODEN_SWORD
  - SPIDER_EYE
  - FERMENTED_SPIDER_EYE
  - SNOWBALL
  - ARROW
  - BOW
  - ROTTEN_FLESH
  - STONE_HOE
  - POISONOUS_POTATO
  ToggleGateRange: 3
  WoolblockChangeRadius: 4
```
Bij ``Items`` kan je instellen bij welke materialen de poortjes af moeten gaan, bij ``ToggleGateRange`` kan je instellen in welke radius er poortjes open moeten springen en bij ``WoolblockChangeRadius`` kan je instellen in welke radius de wol blokken van kleur moeten veranderen.
