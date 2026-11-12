---
title: Cobblemon riding
seo_title: "How to ride Pokémon in Cobblemon: which Pokémon are rideable"
description: "How to ride Pokémon in Cobblemon 1.7.3: send it out, hold Shift, right-click, choose Ride. 84 rideable species: 74 on land, 38 flying, 17 swimming."
parent: English
nav_order: 4.89
permalink: /en/cobblemon-riding/
alt: /cuoi-pokemon-cobblemon/
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to ride Pokémon in Cobblemon",
    "description": "How to ride Pokémon in Cobblemon 1.7.3: send it out, hold Shift, right-click, choose Ride. 84 rideable species: 74 on land, 38 flying, 17 swimming.",
    "inLanguage": "en",
    "url": "https://coconubs.github.io/en/cobblemon-riding/",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Have a rideable Pokémon in your party (list below)."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Select it with the Up and Down arrow keys and press R to send it out."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Stand next to it, hold Shift (Sneak) and right-click it to open the interaction wheel."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Choose Ride."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "text": "Move with your normal movement keys. Hold Left Alt to look around. Press R to get off."
      }
    ]
  }
last_modified_at: 2026-11-12T10:00:00+07:00
---

# How to ride Pokémon in Cobblemon

Riding was added in Cobblemon 1.7. Send the Pokémon out with R, stand next to it, hold **Shift** and **right-click** it to open the interaction wheel, then pick **Ride**. Press R to get off. In 1.7.3 there are 84 rideable species: 74 can go on land, 38 can fly and 17 can swim, and plenty can do more than one.
{: .fs-5 .fw-300 }

## Steps to ride a Pokémon

1. Have a rideable Pokémon in your party (list below).
2. Select it with the Up and Down arrow keys and press **R** to send it out.
3. Stand next to it, hold **Shift** (Sneak) and **right-click** it to open the interaction wheel.
4. Choose **Ride**.
5. Move with your normal movement keys. Hold **Left Alt** to look around. Press **R** to get off.

No **Ride** option? Either the species can't be ridden, the Pokémon is in a Pasture, or you're in a battle.

## Which Pokémon can you ride in Cobblemon 1.7.3

Counted on 11 November 2026 from the `riding` data in `Cobblemon-fabric-1.7.3+1.21.1.jar`. A species counts as rideable if it has a riding style and at least one seat. That's 84 species, 38 of which have two or more styles.

**Flying (38):** Aerodactyl, Altaria, Articuno, Blastoise, Braviary, Bronzong, Charizard, Claydol, Corviknight, Dragapult, Dragonite, Drifblim, Dusknoir, Flygon, Forretress, Garchomp, Golurk, Gyarados, Heracross, Ho-Oh, Honchkrow, Hydreigon, Kilowattrel, Klinklang, Latias, Latios, Lugia, Magnezone, Mantine, Metagross, Moltres, Noivern, Salamence, Staraptor, Togekiss, Tropius, Volcarona, Zapdos.

**Swimming (17):** Blastoise, Dewgong, Dhelmise, Dondozo, Dragapult, Dragonite, Garchomp, Gyarados, Lapras, Lugia, Mantine, Relicanth, Seaking, Sharpedo, Tauros (Paldean Aqua Breed only), Wailmer, Wailord.

**Land only (36):** Arcanine, Ariados, Bastiodon, Bouffalant, Camerupt, Crustle, Cyclizar, Darmanitan, Dudunsparce, Espathra, Farigiraf, Gastrodon, Girafarig, Gogoat, Lickilicky, Mamoswine, Mr. Mime, Mudsdale, Orthworm, Parasect, Piloswine, Revavroom, Rhydon, Rhyhorn, Rhyperior, Scolipede, Serperior, Skiddo, Slaking, Sneasler, Tyrantrum, Ursaluna, Ursaring, Venusaur, Wyrdeer, Zebstrika.

Most of the flyers and swimmers can walk on land too. Rideable Legendaries in the base mod: Articuno, Zapdos, Moltres, Lugia, Ho-Oh, Latias and Latios. A few species, like Rapidash and Snorlax, have riding stats in the files but no seat, so you can't ride them in plain 1.7.3.

## Riding styles and seats

| Where | Riding style (species) |
|---|---|
| Land | Standard (74) |
| Air | Bird (21), Hover (8), Jet (7), Rocket (2) |
| Water | Submarine (7), Dolphin (7), Boat (3, including Paldean Aqua Breed Tauros) |

Most have 1 seat. Some carry passengers: Wailord 19, Dondozo 7, Camerupt 6, Metagross and Crustle 4, Mamoswine and Golurk 3. The Pokédex shows **Ride Stats** and the number of **Seats**.

## Ride stats and Aprijuice

Rideable Pokémon have 5 ride stats: **Speed**, **Accel.** (acceleration), **Skill** (handling), **Jump** and **Stamina**. Feed them **Aprijuice** to raise these. Going by the `apricornStatEffects` table in the 1.7.3 mod file, the juice colour decides which stat goes up and which goes down:

| Aprijuice | Raises | Lowers |
|---|---|---|
| Red | Accel. +2 | Stamina −1 |
| Blue | Skill +2 | Jump −1 |
| Green | Jump +2 | Speed −1 |
| Pink | Speed +2 | Accel. −1 |
| Yellow | Stamina +2 | Skill −1 |
| White | nothing | all 5 stats −2 |
| Black | nothing | nothing |

## Riding on the Coco Cobblemon server

- **No stamina limit:** Infinite Ride Stamina is on, so the Stamina stat doesn't matter (server Cobblemon config, checked 10 November 2026).
- **You can't jump off mid-air:** In-Flight Dismounting is off, so land first, then press R.
- **The list is a bit different:** the server's data packs add or change riding for some species. Zacian, Zamazenta and Rayquaza, for example, can be ridden here. The easy check: send it out, hold Shift and right-click. If **Ride** shows up, you can ride it.
- **Really big or really small Pokémon:** the server has a size-variation mod, and a Pokémon much bigger or smaller than normal might not be rideable. The game tells you when you try.

## Riding on a phone

Cobblemon is a Java Edition mod, so it's not on Pocket Edition or Bedrock (see [Cobblemon on Bedrock](/en/cobblemon-bedrock/)). On Android, Coco Cobblemon through CocoLauncher Android rides the same as on PC, using the on-screen controls. See [Play Cobblemon on Android](/en/cobblemon-android/).

## Quick answers

### How do you ride a Pokémon in Cobblemon?

Send it out with R, hold Shift, right-click it and choose **Ride**. R gets you off again. You need Cobblemon 1.7 or newer.

### Which Pokémon can you ride?

84 species in 1.7.3, including Charizard, Dragonite, Gyarados, Lapras, Wailord, Arcanine, Mudsdale, Garchomp, Salamence and Togekiss. Servers with their own data packs can add more.

### How do you fly in Cobblemon?

Ride a flying Pokémon such as Charizard, Dragonite, Salamence or Corviknight, the same way as any other mount. On Coco Cobblemon you can't get off in the air, so land first.

**See also:** [Cobblemon controls](/en/cobblemon-controls/) · [How to catch Pokémon](/en/cobblemon-catching/) · [How to evolve Pokémon](/en/cobblemon-evolution/) · [What is Cobblemon](/en/what-is-cobblemon/) · [Play Cobblemon on Android](/en/cobblemon-android/) · [Vietnam Cobblemon server](/en/vietnam-cobblemon-server/)

*Counts taken from `Cobblemon-fabric-1.7.3+1.21.1.jar` on 11 November 2026. The Coco Cobblemon section follows the server config checked on 10 November 2026. Other Cobblemon versions, or servers with their own data packs, can differ.*

*Updated: 12 November 2026.*
