---
title: Cobblemon evolution
seo_title: "How to evolve Pokémon in Cobblemon: stones, trading, Link Cable, Eevee"
description: "How evolution works in Cobblemon 1.7.3: level up then press Evolve, evolution stones, the Link Cable for trade evolutions, special conditions and all 8 Eeveelutions."
parent: English
nav_order: 4.88
permalink: /en/cobblemon-evolution/
alt: /tien-hoa-cobblemon/
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to evolve Pokémon in Cobblemon",
    "description": "How evolution works in Cobblemon 1.7.3: level up then press Evolve, evolution stones, the Link Cable for trade evolutions, special conditions and all 8 Eeveelutions.",
    "inLanguage": "en",
    "url": "https://coconubs.github.io/en/cobblemon-evolution/",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Level the Pokémon up and meet any extra condition its species needs (see Special conditions)."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Wait for the message \"(Pokémon) seems ready to evolve!\"."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Press M to open the Summary and select that Pokémon."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Press Evolve. If it can evolve into more than one thing, pick the one you want."
      }
    ]
  }
last_modified_at: 2026-11-12T10:00:00+07:00
---

# How to evolve Pokémon in Cobblemon

In Cobblemon 1.7.3, a Pokémon that's ready to evolve by level doesn't change on its own. You get the message "**(Pokémon) seems ready to evolve!**", then you open the **Summary** (M), select it and press **Evolve**. Most species evolve by level. The rest need an evolution stone (hold it and right-click your Pokémon while it's out), a trade or a **Link Cable**, friendship of 160+, a certain time of day, or a held item.
{: .fs-5 .fw-300 }

## Evolution methods in Cobblemon 1.7.3

Counted on 11 November 2026 from `Cobblemon-fabric-1.7.3+1.21.1.jar` (`data/cobblemon/species`): the 851 playable species have 574 evolutions between them.

| Method | Evolutions | Example | How |
|---|---|---|---|
| Level up | 492 | Bulbasaur to Ivysaur at level 16 | Level it up, then press **Evolve** in the Summary. Some need an extra condition, see below |
| Use an item | 56 | Eevee + Thunder Stone to Jolteon | Send the Pokémon out (R), hold the item, right-click the Pokémon |
| Trade | 26 | Kadabra to Alakazam | Trade with another player, or use a Link Cable |

Evolution items only work on your own Pokémon. If a Pokémon can go more than one way at once (Eevee, for example), the Evolve screen lets you choose.

## Steps to evolve on level up

1. Level the Pokémon up and meet any extra condition its species needs (see Special conditions).
2. Wait for the message "**(Pokémon) seems ready to evolve!**".
3. Press **M** to open the Summary and select that Pokémon.
4. Press **Evolve**. If it can evolve into more than one thing, pick the one you want.

## Evolution stones

There are 10 stones in 1.7.3: Fire, Water, Thunder, Leaf, Ice, Moon, Sun, Dusk, Dawn and Shiny Stone. Thunder Stone and Leaf Stone get the most use (7 evolutions each), then Water Stone (6).

Each stone has its own ore, like Thunder Stone Ore. Mine the ore and you get the stone.

## Special conditions

| Condition | Examples in Cobblemon 1.7.3 |
|---|---|
| Friendship 160+ | Pichu to Pikachu, Golbat to Crobat, Chansey to Blissey, Munchlax to Snorlax |
| Friendship + time of day | Riolu to Lucario (day), Budew to Roselia (day), Eevee to Espeon (day) or Umbreon (night) |
| Held item + time of day | Gligar holding a Razor Fang at night to Gliscor; Sneasel holding a Razor Claw at night to Weavile; Happiny holding an Oval Stone during the day to Chansey |
| Knows a move | Lickitung with Rollout to Lickilicky; Tangela with Ancient Power to Tangrowth; Aipom with Double Hit to Ambipom |
| Gender + stone | Male Kirlia + Dawn Stone to Gallade; female Snorunt + Dawn Stone to Froslass |
| Another Pokémon in the party | Mantyke with a Remoraid in the party to Mantine; Pancham at level 32+ with a Dark-type in the party to Pangoro |
| Weather | Sliggoo at level 50+, levelling up in the rain, to Goodra |
| Distance | Pawmo, Bramblin and Rellor after walking 1,000 blocks to Pawmot, Brambleghast and Rabsca |
| Using a move a lot | Primeape after using Rage Fist 20 times to Annihilape |
| Defeating Pokémon | Bisharp that beats 3 Bisharp to Kingambit (ordinary Bisharp, no held item needed) |
| Full moon | Ursaring with a Peat Block at night during a full moon to Ursaluna |

Friendship goes up to 255 in Cobblemon; the species above need 160 or more.

## Trade evolutions and the Link Cable

26 evolutions need a trade. For 8 species the trade alone is enough: Kadabra, Machoke, Graveler, Haunter, Boldore, Gurdurr, Phantump and Pumpkaboo. 16 also need a held item during the trade, for example Onix with a Metal Coat to Steelix, Scyther with a Metal Coat to Scizor, Seadra with a Dragon Scale to Kingdra, Porygon with an Upgrade to Porygon2. Karrablast and Shelmet evolve when traded for each other.

**Trading with a player:** look at them, press R and pick **Trade** on the interaction wheel. On Coco Cobblemon you both need to be within 10 blocks (the server's `tradeMaxDistance`, checked 10 November 2026).

**Playing solo? Use a Link Cable.** It's a normal Cobblemon item ("Evolves pokemon that require trading"). Hold it and right-click your Pokémon while it's out. Any other condition still applies, so Onix still needs to hold a Metal Coat. Karrablast needs a real trade with a Shelmet; Shelmet can use a Link Cable if you have a Karrablast in your party.

Link Cable recipe (crafting table, 3x3, from the 1.7.3 mod file):

| Column 1 | Column 2 | Column 3 |
|---|---|---|
| | | Nether Quartz |
| Copper Ingot | Ender Pearl | Copper Ingot |
| Nether Quartz | | |

That's 2 Nether Quartz, 2 Copper Ingots and 1 Ender Pearl. More recipes on [Cobblemon recipes](/en/cobblemon-recipes/).

## How to evolve Eevee in Cobblemon

Eevee has 8 evolutions in 1.7.3. Five use a stone (hold it and right-click Eevee). The other three need friendship of 160+ and a level up. Getting all 8 unlocks the advancement **Valued Veevees**.

| Evolution | How |
|---|---|
| Vaporeon | Water Stone |
| Jolteon | Thunder Stone |
| Flareon | Fire Stone |
| Leafeon | Leaf Stone |
| Glaceon | Ice Stone |
| Espeon | Friendship 160+, level up during the day |
| Umbreon | Friendship 160+, level up at night |
| Sylveon | Friendship 160+, knows at least 1 Fairy-type move, level up |

There's no Moss Rock or Ice Rock in Cobblemon. Leafeon and Glaceon just use the stones.

## Mega Evolution

Plain Cobblemon 1.7.3 can't Mega Evolve. The mod has Mega form data but no Mega Bracelet and no Mega Stones. Coco Cobblemon has Mega through the Mega Showdown mod; how it works, Mega Rayquaza and the full list are on [How to Mega Evolve in Cobblemon](/en/cobblemon-mega/).

## On the Coco Cobblemon server

Open the Menu (`/menu`) and pick **POKÉDEX** in the top bar to see how each species evolves and where it spawns, with a 3D model, types, stats and moves. If a Pokémon wearing a costume evolves into something that can't wear it, the costume goes back to your wardrobe.

## Quick answers

### Why isn't my Pokémon evolving at the right level?

In Cobblemon it only gets marked as ready. Open the Summary (M), select it and press **Evolve**. If there's no button, it needs something else too, like friendship, a time of day or a held item.

### How do I do trade evolutions in single player?

Use a Link Cable (2 Nether Quartz, 2 Copper Ingots, 1 Ender Pearl). Hold it and right-click the Pokémon. If the evolution needs a held item, like Onix with a Metal Coat, it still has to hold it.

### How do I get Sylveon in Cobblemon?

Eevee needs friendship of 160+ and at least one Fairy-type move. Level it up, then press Evolve in the Summary.

### How do you trade Pokémon in Cobblemon?

Look at the other player, press R and pick **Trade**. Once they accept, the trade screen opens and you each pick a Pokémon. On Coco Cobblemon you need to be within 10 blocks; to sell to anyone on the server, use the GTS (`/gts`).

### Does Cobblemon have Mega Evolution?

Not on its own. Coco Cobblemon adds it with the Mega Showdown mod: wear a Mega Bracelet, give the Pokémon its Mega Stone and press the Mega button in battle. See [How to Mega Evolve](/en/cobblemon-mega/).

**See also:** [How to catch Pokémon](/en/cobblemon-catching/) · [Learning moves](/en/cobblemon-moves/) · [What is Cobblemon](/en/what-is-cobblemon/) · [Cobblemon riding](/en/cobblemon-riding/) · [Cobblemon recipes](/en/cobblemon-recipes/) · [Cobblemon controls](/en/cobblemon-controls/) · [Cobblemon commands](/en/cobblemon-commands/) · [Vietnam Cobblemon server](/en/vietnam-cobblemon-server/)

*Counts taken from `Cobblemon-fabric-1.7.3+1.21.1.jar` on 11 November 2026. The Mega section follows Mega Showdown and the in-game Guide of 8 November 2026. Other Cobblemon versions, or servers with extra data packs, can differ.*

*Updated: 12 November 2026.*
