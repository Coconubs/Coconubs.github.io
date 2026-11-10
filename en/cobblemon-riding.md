---
title: Cobblemon riding
seo_title: "How to ride Pokémon in Cobblemon: which Pokémon are rideable"
description: "How to ride Pokémon in Cobblemon 1.7.3: send it out, hold Shift, right-click, choose Ride. 84 rideable species: 74 land, 38 flying, 17 swimming."
parent: English
nav_order: 4.89
permalink: /en/cobblemon-riding/
alt: /cuoi-pokemon-cobblemon/
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to ride Pokémon in Cobblemon",
    "description": "How to ride Pokémon in Cobblemon 1.7.3: send it out, hold Shift, right-click, choose Ride. 84 rideable species: 74 land, 38 flying, 17 swimming.",
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
        "text": "Select it with the up and down arrow keys, then press R to send it out."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Stand next to it, hold Shift (the Sneak key) and right-click the Pokémon. The interaction wheel opens."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Choose Ride."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "text": "Move with the normal movement keys. Hold Left Alt to look around. Press R to get off."
      }
    ]
  }
last_modified_at: 2026-11-11T05:22:15+07:00
---

# How to ride Pokémon in Cobblemon

Riding arrived in Cobblemon 1.7. To ride: send the Pokémon out with the R key, stand next to it, hold **Shift** and **right-click** it to open the interaction wheel, then choose **Ride**. Press R to get off. Cobblemon 1.7.3 has 84 rideable species: 74 walk on land, 38 fly and 17 swim; many can do two or three of these.
{: .fs-5 .fw-300 }

## Steps to ride a Pokémon

1. Have a rideable Pokémon in your party (list below).
2. Select it with the up and down arrow keys, then press **R** to send it out.
3. Stand next to it, hold **Shift** (the Sneak key) and **right-click** the Pokémon. The interaction wheel opens.
4. Choose **Ride**.
5. Move with the normal movement keys. Hold **Left Alt** to look around. Press **R** to get off.

If there is no **Ride** option: the species cannot be ridden, the Pokémon is in a Pasture, or you are in a battle.

## Which Pokémon can you ride in Cobblemon 1.7.3

Counted on 11 November 2026 from the `riding` data in `Cobblemon-fabric-1.7.3+1.21.1.jar`: a species is rideable when it has a riding style and at least one seat. That gives 84 species, 38 of them with two or more styles.

**Flying (38):** Aerodactyl, Altaria, Articuno, Blastoise, Braviary, Bronzong, Charizard, Claydol, Corviknight, Dragapult, Dragonite, Drifblim, Dusknoir, Flygon, Forretress, Garchomp, Golurk, Gyarados, Heracross, Ho-Oh, Honchkrow, Hydreigon, Kilowattrel, Klinklang, Latias, Latios, Lugia, Magnezone, Mantine, Metagross, Moltres, Noivern, Salamence, Staraptor, Togekiss, Tropius, Volcarona, Zapdos.

**Swimming (17):** Blastoise, Dewgong, Dhelmise, Dondozo, Dragapult, Dragonite, Garchomp, Gyarados, Lapras, Lugia, Mantine, Relicanth, Seaking, Sharpedo, Tauros, Wailmer, Wailord.

**Land only (36):** Arcanine, Ariados, Bastiodon, Bouffalant, Camerupt, Crustle, Cyclizar, Darmanitan, Dudunsparce, Espathra, Farigiraf, Gastrodon, Girafarig, Gogoat, Lickilicky, Mamoswine, Mr. Mime, Mudsdale, Orthworm, Parasect, Piloswine, Revavroom, Rhydon, Rhyhorn, Rhyperior, Scolipede, Serperior, Skiddo, Slaking, Sneasler, Tyrantrum, Ursaluna, Ursaring, Venusaur, Wyrdeer, Zebstrika.

Most flying and swimming species can also walk on land. Rideable Legendaries in the base mod: Articuno, Zapdos, Moltres, Lugia, Ho-Oh, Latias, Latios. Some species, such as Rapidash and Snorlax, have riding stats in the file but no seat, so they cannot be ridden in plain Cobblemon 1.7.3.

## Riding styles and seats

| Environment | Riding style (species) |
|---|---|
| Land | Standard (74) |
| Air | Bird (21), Hover (8), Jet (7), Rocket (2) |
| Water | Submarine (7), Dolphin (7), Boat (2) |

Most species have 1 seat. Species with more seats carry extra riders: Wailord 19, Dondozo 7, Camerupt 6, Metagross and Crustle 4, Mamoswine and Golurk 3. The Pokédex shows **Ride Stats** and the number of **Seats**.

## Ride stats and Aprijuice

A rideable Pokémon has 5 ride stats: **Speed**, **Accel.** (acceleration), **Skill** (handling), **Jump** and **Stamina**. Feed it **Aprijuice** to raise them. According to the `apricornStatEffects` table in the 1.7.3 mod file, the colour of the Aprijuice decides which stat goes up and which goes down:

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

- **No stamina limit:** the server turns on Infinite Ride Stamina (server Cobblemon config, checked 10 November 2026).
- **No dismounting in mid-air:** the server turns off In-Flight Dismounting, so land first, then press R to get off.
- **The list differs a little from the base mod:** the server's own data packs add or adjust riding for some species; for example Zacian, Zamazenta and Rayquaza can be ridden on Coco Cobblemon. The sure way to check: send the Pokémon out, hold Shift and right-click; if **Ride** shows up, you can ride it.
- **Very large or very small Pokémon:** the server has a size-variation mod; a Pokémon much bigger or smaller than normal may not be rideable, and the game tells you when you try.

## Riding on a phone

Cobblemon is a Minecraft Java mod; it is not available on Minecraft Pocket Edition or Bedrock (see [Cobblemon on Bedrock](/en/cobblemon-bedrock/)). On Android, playing Coco Cobblemon through CocoLauncher Android works the same way as on a computer, using the on-screen controls. See [Play Cobblemon on Android](/en/cobblemon-android/).

## Quick answers

### How do you ride a Pokémon in Cobblemon?

Send it out with R, hold Shift and right-click it, then choose **Ride**. Press R to get off. Riding exists since Cobblemon 1.7.

### Which Pokémon can you ride in Cobblemon?

Cobblemon 1.7.3 has 84 rideable species, for example Charizard, Dragonite, Gyarados, Lapras, Wailord, Arcanine, Mudsdale, Garchomp, Salamence and Togekiss. The full list is above. Servers with their own data packs can add more.

### How do you fly on a Pokémon in Cobblemon?

Flying Pokémon such as Charizard, Dragonite, Salamence and Corviknight are ridden like any other: hold Shift, right-click, choose **Ride**. On Coco Cobblemon you cannot get off in mid-air, so land first.

**See also:** [Cobblemon controls](/en/cobblemon-controls/) · [How to catch Pokémon](/en/cobblemon-catching/) · [How to evolve Pokémon](/en/cobblemon-evolution/) · [What is Cobblemon](/en/what-is-cobblemon/) · [Play Cobblemon on Android](/en/cobblemon-android/) · [Vietnam Cobblemon server](/en/vietnam-cobblemon-server/)

*Counts taken from `Cobblemon-fabric-1.7.3+1.21.1.jar` on 11 November 2026; the Coco Cobblemon section follows the server config checked on 10 November 2026. Other Cobblemon versions, or servers with their own data packs, can differ.*

*Updated: 11 November 2026.*
