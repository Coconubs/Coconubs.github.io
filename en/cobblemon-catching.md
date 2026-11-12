---
title: Cobblemon catching
seo_title: "How to catch Pokémon in Cobblemon: catch rate, balls, Legendaries"
description: "How to catch Pokémon in Cobblemon 1.7.3: battle first, lower its HP, put it to sleep, use the right ball. How the catch rate works and how to get Legendaries."
parent: English
nav_order: 4.86
permalink: /en/cobblemon-catching/
alt: /cach-bat-pokemon-cobblemon/
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to catch Pokémon in Cobblemon",
    "description": "How to catch Pokémon in Cobblemon 1.7.3: battle first, lower its HP, put it to sleep, use the right ball. How the catch rate works and how to get Legendaries.",
    "inLanguage": "en",
    "url": "https://coconubs.github.io/en/cobblemon-catching/",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Use the Up and Down arrow keys to pick the Pokémon you want to fight with."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Look at a wild Pokémon close by and press R to start the battle."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Wear its HP down without knocking it out. If you have a sleep or freeze move, use it."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Press R to shrink the battle screen, hold a Poké Ball and right-click to throw it. If the ball shakes and clicks shut, it's yours. If it breaks out, throw another."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "text": "The new Pokémon goes into your party, or into the PC if you already have 6."
      }
    ]
  }
last_modified_at: 2026-11-12T10:00:00+07:00
---

# How to catch Pokémon in Cobblemon

Look at a wild Pokémon and press **R** to start a battle, wear its HP down (putting it to sleep helps a lot), press R to shrink the battle screen, then hold a Poké Ball and **right-click** to throw it. A ball thrown during a battle has double the chance of one thrown at a Pokémon just wandering around. Better balls, lower HP and species that are easy to catch all help.
{: .fs-5 .fw-300 }

## Steps to catch a Pokémon

1. Use the Up and Down arrow keys to pick the Pokémon you want to fight with.
2. Look at a wild Pokémon close by and press **R** to start the battle.
3. Wear its HP down without knocking it out. If you have a sleep or freeze move, use it.
4. Press **R** to shrink the battle screen, hold a Poké Ball and **right-click** to throw it. If the ball shakes and clicks shut, it's yours. If it breaks out, throw another.
5. The new Pokémon goes into your party, or into the PC if you already have 6.

You craft Poké Balls from Apricorns and metal ingots, see [Cobblemon recipes](/en/cobblemon-recipes/).

## How the catch rate works

These come from the default catch calculator (`CobblemonCaptureCalculator`, config `captureCalculator: cobblemon`) in `Cobblemon-fabric-1.7.3+1.21.1.jar`:

| Factor | Effect |
|---|---|
| Battle or not | Throwing at a Pokémon that isn't in a battle: chance x0.5 |
| HP left | Less HP, better chance (the formula uses 3 × max HP minus 2 × current HP) |
| Status | Sleep or Freeze x2.5; Paralysis, Burn, Poison x1.5 |
| Ball | Poké Ball x1, Great Ball x1.5, Ultra Ball x2, Master Ball never fails |
| Low level | Under level 13 is easier: levels 1-3 x3, levels 4-8 x2 |
| Big level gap | Wild Pokémon 50+ levels above your highest-level Pokémon in the battle (with a level cap of 100): x0.1 |
| Species catch rate | 3 to 255. Caterpie and Magikarp 255; Pikachu 190; Bulbasaur, Eevee, Charizard, Dragonite 45; Mewtwo, Lugia, Rayquaza, Articuno 3 |

There are 48 kinds of ball in 1.7.3, 16 of them Ancient (Hisui-style). Special balls like the Net Ball, Dusk Ball and Quick Ball get stronger when their condition is met.

## Where Pokémon spawn and how rare they are

Each species spawns in certain biomes, at certain times and in certain weather. Every time something spawns, Cobblemon first rolls a rarity bucket. With the default 1.7.3 config the weights are **common** 94.3%, **uncommon** 5%, **rare** 0.5% and **ultra-rare** 0.2%. The mod has 2,852 spawn entries covering 824 species: 1,657 common, 679 uncommon and 516 rare. Servers can tweak all of this.

On Coco Cobblemon, open the Menu (`/menu`) and pick **POKÉDEX** in the top bar to see where each species spawns and how it evolves.

## How to catch Legendary Pokémon in Cobblemon

**Plain Cobblemon 1.7.3 doesn't spawn Legendaries or Mythicals in the wild.** The mod tags 71 species as Legendary and 23 as Mythical, but none of them are in `spawn_pool_world`. In single player you can get one with `/pokespawn` (cheats on, see [Cobblemon commands](/en/cobblemon-commands/)) or through another mod.

**On Coco Cobblemon there are a few ways:** a wild spawn chance that builds up over time (doubled during the weekend Legendary Golden Hours, see [Features](/en/features/)), summoning at Altars, shrines and Legendary Monuments (costs CobbleDollars), World Raids, Legendary Eggs and Guild Bosses. Mythicals (Mew, Celebi, Arceus...) don't spawn in the wild on the server.

Legendaries are really hard to catch (60 of the 71 have a catch rate of 3, compared with 255 for Caterpie), so battle them, get the HP very low, put them to sleep and bring Ultra Balls.

## Quick answers

### How do you catch Pokémon in Cobblemon?

Start a battle with R, get its HP low, press R again to shrink the battle screen, then right-click with a Poké Ball in your hand.

### Can you catch Pokémon without battling?

Yes, but the chance is cut in half compared with throwing during a battle (x0.5 in 1.7.3).

### Which ball is best?

The Master Ball always works. Of the normal ones, Ultra Ball is x2, Great Ball x1.5 and Poké Ball x1.

### How do you get Legendary Pokémon in Cobblemon?

They don't spawn in plain Cobblemon 1.7.3. On Coco Cobblemon they have a build-up spawn chance, can be summoned at Altars, and show up in Raids and Legendary Eggs. Most have a catch rate of 3, so lower the HP, put them to sleep and use Ultra Balls.

**See also:** [How to evolve Pokémon](/en/cobblemon-evolution/) · [How to ride Pokémon](/en/cobblemon-riding/) · [Cobblemon recipes](/en/cobblemon-recipes/) · [Cobblemon controls](/en/cobblemon-controls/) · [Features of Coco Cobblemon](/en/features/)

*Numbers read from `Cobblemon-fabric-1.7.3+1.21.1.jar` on 11 November 2026 (catch calculator, balls, species and spawn data). Servers can change the config or add data packs, so their numbers may differ.*

*Updated: 12 November 2026.*
