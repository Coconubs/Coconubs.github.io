---
title: Cobblemon commands
seo_title: "Cobblemon commands: /pokespawn, /pokegive, /pokeheal and permissions"
description: "Cobblemon 1.7.3 commands: /pokespawn spawns a Pokémon, /pokegive gives you one, /pokeheal heals your party, /pc opens the PC. Permission levels and properties."
parent: English
nav_order: 4.85
permalink: /en/cobblemon-commands/
alt: /lenh-cobblemon/
last_modified_at: 2026-11-12T10:00:00+07:00
---

# Cobblemon commands

Most Cobblemon 1.7.3 commands need cheats (permission level 2, same as Minecraft's `/give`). In single player that means turning on **Allow Commands**; on a server, only the owner can give you access. The ones people use most: `/pokespawn` spawns a Pokémon, `/pokegive` gives you one, `/pokeheal` heals your party and `/pc` opens the PC from anywhere. For a level 50 Shiny Pikachu: `/pokespawn pikachu shiny=yes level=50`.
{: .fs-5 .fw-300 }

## Common commands

| Command | Alias | What it does | Permission |
|---|---|---|---|
| `/pokespawn <Pokémon>` | `/spawnpokemon` | Spawns a wild Pokémon where you're standing | Level 2 |
| `/pokegive <Pokémon>` | `/givepokemon` | Gives you a Pokémon | Level 2 |
| `/pokeheal` | `/healpokemon` | Heals your party | Level 2 |
| `/pc` | | Opens the PC anywhere | Level 2 |
| `/openstarterscreen <player>` | | Opens starter selection for a player who hasn't picked yet | Level 2 |
| `/spawnallpokemon`, `/giveallpokemon` | | Spawns or gives every species | Level 4 (all commands) |

Command names and permission levels come from `Cobblemon-fabric-1.7.3+1.21.1.jar` (the command classes and `CobblemonPermissions`), checked 11 November 2026. Level 2 is Minecraft's "cheats and command blocks" level; level 4 is everything.

## Pokémon properties

After the species name (English, lower case, no spaces: `pikachu`, `charizard`, `mrmime`) you can add properties as `key=value`:

| Property | Example | Meaning |
|---|---|---|
| `level` (or `lvl`) | `level=50` | Level |
| `shiny` | `shiny=yes` | Shiny |
| `nature` | `nature=adamant` | Nature |
| `ability` | `ability=intimidate` | Ability |
| `gender` | `gender=female` | Gender |
| `nickname` | `nickname=Pika` | Nickname |

These keys come from the `PokemonProperties` class in the same file. Example: `/pokegive charizard level=100 shiny=yes`.

## Turning on commands in single player

- **New world:** switch on **Allow Commands** when you create it.
- **Existing world:** press Esc, pick **Open to LAN**, turn on **Allow Cheats** and start. Commands stay on until you leave the world.

If you don't have permission, the game says **Unknown or incomplete command**.

## On the Coco Cobblemon server

On Coco Cobblemon you use the server's own commands, like `/menu`, `/sethome`, `/rtp`, `/claim`, `/gts` and `/battletower` (see [How to join](/en/how-to-join/)). The Cobblemon commands above only work if the owner gives you access.

## Quick answers

### What's the Cobblemon spawn command?

`/pokespawn <Pokémon>`, like `/pokespawn pikachu`. Add `shiny=yes` for a Shiny or `level=50` to set the level. You need cheats on.

### What's the Cobblemon give command?

`/pokegive <Pokémon>`, like `/pokegive charizard level=50`. Also needs cheats.

### Why does it say "Unknown or incomplete command"?

You don't have permission. These commands need level 2: turn on Allow Commands in single player, or use Open to LAN with Allow Cheats. On a server, only the owner can give it to you.

**See also:** [Cobblemon recipes](/en/cobblemon-recipes/) · [Cobblemon evolution](/en/cobblemon-evolution/) · [Cobblemon controls](/en/cobblemon-controls/) · [What is Cobblemon](/en/what-is-cobblemon/) · [How to join](/en/how-to-join/) · [FAQ](/en/faq/)

*Updated: 12 November 2026.*
