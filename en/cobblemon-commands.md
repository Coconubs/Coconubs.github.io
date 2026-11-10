---
title: Cobblemon commands
seo_title: "Cobblemon commands: /pokespawn, /pokegive, /pokeheal and permissions"
description: "Cobblemon 1.7.3 commands: /pokespawn spawns a Pokémon, /pokegive gives one, /pokeheal heals your party, /pc opens the PC. Permission levels and properties."
parent: English
nav_order: 4.85
permalink: /en/cobblemon-commands/
alt: /lenh-cobblemon/
last_modified_at: 2026-11-11T04:41:41+07:00
---

# Cobblemon commands

Most Cobblemon 1.7.3 commands need cheat-level permission (permission level 2, the same as Minecraft's `/give`): in single player turn on **Allow Commands**, and on a server they only work if the server owner grants them. The most used ones: `/pokespawn` spawns a Pokémon, `/pokegive` gives you one, `/pokeheal` heals your party and `/pc` opens the PC anywhere. Example, a level 50 Shiny Pikachu: `/pokespawn pikachu shiny=yes level=50`.
{: .fs-5 .fw-300 }

## Common commands

| Command | Alias | What it does | Permission |
|---|---|---|---|
| `/pokespawn <Pokémon>` | `/spawnpokemon` | Spawns a wild Pokémon where you stand | Level 2 |
| `/pokegive <Pokémon>` | `/givepokemon` | Gives you a Pokémon | Level 2 |
| `/pokeheal` | `/healpokemon` | Heals your party | Level 2 |
| `/pc` | | Opens the PC anywhere | Level 2 |
| `/openstarterscreen <player>` | | Opens the starter selection for a player who has not picked one | Level 2 |
| `/spawnallpokemon`, `/giveallpokemon` | | Spawns or gives every species | Level 4 (all commands) |

Command names and permission levels were read from `Cobblemon-fabric-1.7.3+1.21.1.jar` (the command classes and the `CobblemonPermissions` table) on 11 November 2026. Level 2 is Minecraft's "cheat commands and command blocks" level; level 4 is all commands.

## Pokémon properties

After the species name (the English name in lower case, written as one word, for example `pikachu`, `charizard`, `mrmime`) you can add properties as `key=value`:

| Property | Example | Meaning |
|---|---|---|
| `level` (or `lvl`) | `level=50` | Level |
| `shiny` | `shiny=yes` | Shiny |
| `nature` | `nature=adamant` | Nature |
| `ability` | `ability=intimidate` | Ability |
| `gender` | `gender=female` | Gender |
| `nickname` | `nickname=Pika` | Nickname |

The property keys come from the `PokemonProperties` class in the same Cobblemon 1.7.3 file. Example: `/pokegive charizard level=100 shiny=yes`.

## Turn on commands in single player

- **New world:** turn on **Allow Commands** when you create the world.
- **Existing world:** press Esc, choose **Open to LAN**, turn on **Allow Cheats**, then start. Commands stay on until you leave the world.

Without permission, the game answers **Unknown or incomplete command**.

## On the Coco Cobblemon server

Players on the Coco Cobblemon server use the server's own commands such as `/menu`, `/sethome`, `/rtp`, `/claim`, `/gts` and `/battletower`; see [How to join](/en/how-to-join/). The Cobblemon commands in the table above only work if the server owner grants them.

## Quick answers

### What is the Cobblemon spawn command?

`/pokespawn <Pokémon>`, for example `/pokespawn pikachu`. Add `shiny=yes` for a Shiny and `level=50` to set the level. It needs command permission (turn on Allow Commands in single player).

### What is the Cobblemon give command?

`/pokegive <Pokémon>`, for example `/pokegive charizard level=50`. It also needs command permission.

### Why does a Cobblemon command say "Unknown or incomplete command"?

You do not have permission yet: these commands need permission level 2. In single player turn on Allow Commands, or use Open to LAN with Allow Cheats. On a server only the owner can grant it.

**See also:** [Cobblemon recipes](/en/cobblemon-recipes/) · [Cobblemon controls](/en/cobblemon-controls/) · [What is Cobblemon](/en/what-is-cobblemon/) · [How to join](/en/how-to-join/) · [FAQ](/en/faq/)

*Updated: 11 November 2026.*
