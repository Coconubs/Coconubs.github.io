---
title: Cobblemon catching
seo_title: "How to catch Pokémon in Cobblemon: catch rate, balls, Legendaries"
description: "How to catch Pokémon in Cobblemon 1.7.3: battle first, lower its HP, put it to sleep, pick the right ball. How the catch rate works, how to get Legendaries."
parent: English
nav_order: 4.86
permalink: /en/cobblemon-catching/
alt: /cach-bat-pokemon-cobblemon/
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to catch Pokémon in Cobblemon",
    "description": "How to catch Pokémon in Cobblemon 1.7.3: battle first, lower its HP, put it to sleep, pick the right ball. How the catch rate works, how to get Legendaries.",
    "inLanguage": "en",
    "url": "https://coconubs.github.io/en/cobblemon-catching/",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Pick the Pokémon that will fight with the up and down arrow keys."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Look at a nearby wild Pokémon and press R to start the battle."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Bring the wild Pokémon's HP down without knocking it out. Put it to sleep or freeze it if you have a move for that."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Press R to shrink the battle screen, hold a Poké Ball and right-click to throw it at the Pokémon. If the ball shakes and clicks shut, you caught it; if the Pokémon breaks free, throw again."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "text": "The caught Pokémon joins your party, or goes to the PC if you already have 6."
      }
    ]
  }
last_modified_at: 2026-11-11T05:24:28+07:00
---

# How to catch Pokémon in Cobblemon

How to catch a Pokémon in Cobblemon 1.7.3: look at a nearby wild Pokémon and press **R** to start a battle, bring its HP down (putting it to sleep helps), press R to shrink the battle screen, then hold a Poké Ball and **right-click** to throw it. A ball thrown during a battle has twice the chance of a ball thrown at a Pokémon roaming outside a battle. A better ball, lower HP and an easy-to-catch species (high catch rate) all raise the chance.
{: .fs-5 .fw-300 }

## Steps to catch a Pokémon

1. Pick the Pokémon that will fight with the up and down arrow keys.
2. Look at a nearby wild Pokémon and press **R** to start the battle.
3. Bring the wild Pokémon's HP down without knocking it out. Put it to sleep or freeze it if you have a move for that.
4. Press **R** to shrink the battle screen, hold a Poké Ball and **right-click** to throw it at the Pokémon. If the ball shakes and clicks shut, you caught it; if the Pokémon breaks free, throw again.
5. The caught Pokémon joins your party, or goes to the PC if you already have 6.

Poké Balls are crafted from Apricorns and metal ingots, see [Cobblemon recipes](/en/cobblemon-recipes/).

## How Cobblemon calculates the catch rate

Read on 11 November 2026 from the `CobblemonCaptureCalculator` class (the default calculator, config `captureCalculator: cobblemon`) in `Cobblemon-fabric-1.7.3+1.21.1.jar`:

| Factor | Effect |
|---|---|
| In a battle or not | Throwing at a Pokémon that is not in a battle: chance x0.5 |
| HP left | The less HP, the easier (the formula uses 3 times max HP minus 2 times current HP) |
| Status | Sleep or Freeze x2.5; Paralysis, Burn, Poison x1.5 |
| Ball | Poké Ball x1, Great Ball x1.5, Ultra Ball x2, Master Ball always catches |
| Low-level Pokémon | Below level 13 is easier: levels 1-3 x3, levels 4-8 x2 |
| Huge level gap | Wild Pokémon 50 or more levels above your highest-level Pokémon in the battle (with a level cap of 100): x0.1 |
| Species catch rate | From 3 to 255: Caterpie and Magikarp 255; Pikachu 190; Bulbasaur, Eevee, Charizard, Dragonite 45; Mewtwo, Lugia, Rayquaza, Articuno 3 |

Cobblemon 1.7.3 has 48 kinds of ball, including 16 Ancient (Hisui-style) balls. Special balls such as the Net Ball, Dusk Ball and Quick Ball are stronger under their own conditions.

## Where Pokémon spawn and how rare they are

Wild Pokémon spawn according to each species' biomes, time of day and weather. For every spawn, Cobblemon first picks a rarity bucket; in the default 1.7.3 config the weights are **common** 94.3%, **uncommon** 5%, **rare** 0.5% and **ultra-rare** 0.2%. The mod file has 2,852 spawn entries for 824 species: 1,657 common, 679 uncommon and 516 rare. Servers can change these numbers.

On the Coco Cobblemon server, open the Menu (`/menu`) and choose **POKÉDEX** in the top bar to see where each species spawns and how it evolves.

## How to catch Legendary Pokémon in Cobblemon

**In plain Cobblemon 1.7.3, Legendary and Mythical Pokémon do not spawn naturally:** the mod file labels 71 species Legendary and 23 Mythical, but none of them has a spawn entry in `spawn_pool_world`. In single player you get one with the `/pokespawn` command (cheats must be on, see [Cobblemon commands](/en/cobblemon-commands/)) or with another mod.

**On the Coco Cobblemon server, Legendaries come from several places:** a natural spawn chance that builds up over time (doubled during the weekend Legendary Golden Hours, see [Features](/en/features/)), summoning with Altars, shrines and Legendary Monuments (costs CobbleDollars), World Raids, Legendary Eggs and Guild Bosses. Mythicals (Mew, Celebi, Arceus...) do not spawn naturally on the server.

Legendaries have a very low catch rate (60 of the 71 Legendary species have 3, Caterpie has 255), so battle first, bring the HP very low, put it to sleep and use Ultra Balls.

## Quick answers

### How do you catch Pokémon in Cobblemon?

Press R while looking at a wild Pokémon to start a battle, lower its HP, press R to shrink the battle screen, then hold a Poké Ball and right-click to throw it.

### Can you catch Pokémon without battling?

Yes, but the chance is halved compared with throwing during a battle (Cobblemon 1.7.3 applies x0.5 when the Pokémon is not in a battle).

### Which ball is best?

The Master Ball always catches. Among regular balls: Ultra Ball x2, Great Ball x1.5, Poké Ball x1.

### How do you get Legendary Pokémon in Cobblemon?

Plain Cobblemon 1.7.3 does not spawn Legendaries naturally. On Coco Cobblemon they spawn with a build-up chance, can be summoned at Altars, and appear in Raids and Legendary Eggs; once you find one, lower its HP, put it to sleep and use Ultra Balls, since most Legendaries have a catch rate of 3.

**See also:** [How to evolve Pokémon](/en/cobblemon-evolution/) · [How to ride Pokémon](/en/cobblemon-riding/) · [Cobblemon recipes](/en/cobblemon-recipes/) · [Cobblemon controls](/en/cobblemon-controls/) · [Features of Coco Cobblemon](/en/features/)

*Numbers read from `Cobblemon-fabric-1.7.3+1.21.1.jar` on 11 November 2026 (catch calculator, ball table, species and spawn data). Servers can change the config or add data packs, so a server's numbers can differ.*

*Updated: 11 November 2026.*
