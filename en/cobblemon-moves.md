---
title: Cobblemon moves
seo_title: "How Pokémon learn moves in Cobblemon: Switch Move, TMs, Move Reminder"
description: "How Pokémon learn moves in Cobblemon 1.7.3: level-up moves, Switch Move in the Summary, evolution moves, and TMs on the Coco Cobblemon server."
parent: English
nav_order: 4.895
permalink: /en/cobblemon-moves/
alt: /hoc-chieu-cobblemon/
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Pokémon learn moves in Cobblemon",
    "description": "How Pokémon learn moves in Cobblemon 1.7.3: level-up moves, Switch Move in the Summary, evolution moves, and TMs on the Coco Cobblemon server.",
    "inLanguage": "en",
    "url": "https://coconubs.github.io/en/cobblemon-moves/",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Press M to open the Summary and pick the Pokémon."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Open the Moves tab."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Pick the move to replace and press Switch Move."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Pick the new move from the list. To drop a move entirely, use Forget Move."
      }
    ]
  }
last_modified_at: 2026-11-11T06:02:04+07:00
---

# How Pokémon learn moves in Cobblemon

In Cobblemon 1.7.3 a Pokémon learns a new level-up move on its own when it has a free slot (4 moves at most). With 4 moves already, open the **Summary** (M key), go to the **Moves** tab, pick the move to replace and press **Switch Move**: the list holds every move the species learns by level up to its current level, its evolution moves and its benched moves. Plain Cobblemon has no TMs; the Coco Cobblemon server has TMs through the TMCraft mod.
{: .fs-5 .fw-300 }

## Level-up moves

Every species has a level-up move list. When a Pokémon reaches the level for a move:

- With fewer than 4 moves: the new move fills the free slot and the game says "**(Pokémon) has learned (move).**"
- With 4 moves: the new move does not replace an old one. You can still pick it at any time with **Switch Move**.

Read from the `Pokemon` class in `Cobblemon-fabric-1.7.3+1.21.1.jar` (the experience code only adds a move when the move set has room), 11 November 2026.

## Steps to swap a move

1. Press **M** to open the Summary and pick the Pokémon.
2. Open the **Moves** tab.
3. Pick the move to replace and press **Switch Move**.
4. Pick the new move from the list. To drop a move entirely, use **Forget Move**.

The Switch Move list has 3 groups (Cobblemon 1.7.3's `getAllAccessibleMoves`):

| Group | Which moves |
|---|---|
| Level-up moves | Every move the species learns by level up, from level 1 to its current level |
| Evolution moves | Moves learned at the moment of evolution, for example Fairy Wind and Disarming Voice when Eevee becomes Sylveon |
| Benched moves | Moves learned another way (a TM, for example) while the move set was already full |

So in Cobblemon there is no need to find a Move Reminder to get back a level-up move you skipped.

## TMs in Cobblemon

**Plain Cobblemon 1.7.3 has no TMs:** the mod file contains no TM items. A server needs an extra mod for TMs.

**The Coco Cobblemon server uses the TMCraft mod:**

- Buy TMs in **Shop Tokens** (Menu > Shop > Shop Tokens); 40-400 Tokens according to the in-game Guide of 8 November 2026.
- Hover over a TM to see each Pokémon in your party: **ABLE** (can learn it), **UNABLE** (cannot), **LEARNED** (already knows it).
- To use one: send the Pokémon out, hold the TM and right-click your Pokémon. Each TM is used up.
- With a free slot the move goes straight into the move set; with 4 moves it goes to the benched moves, ready for **Switch Move**.
- TMCraft also has items that teach Egg Moves and Tutor Moves.

## Quick answers

### How do Pokémon learn moves in Cobblemon?

In Cobblemon, Pokémon learn level-up moves on their own when they have a free slot. With 4 moves, press M, open the Moves tab, pick the move to replace, press Switch Move and choose the new one.

### Does Cobblemon have TMs?

Not in plain Cobblemon 1.7.3. Coco Cobblemon has TMs from the TMCraft mod, sold in Shop Tokens; hold the TM and right-click the Pokémon to teach it.

### Is there a Move Reminder in Cobblemon?

You do not need one: in Cobblemon, Switch Move in the Summary lets you pick any move the species learns by level up to its current level.

**See also:** [How to evolve Pokémon](/en/cobblemon-evolution/) · [How to catch Pokémon](/en/cobblemon-catching/) · [Cobblemon controls](/en/cobblemon-controls/) · [Features of Coco Cobblemon](/en/features/)

*Read from `Cobblemon-fabric-1.7.3+1.21.1.jar` and the TMCraft 1.4.18 mod on 11 November 2026; the Coco Cobblemon parts follow the in-game Guide of 8 November 2026.*

*Updated: 11 November 2026.*
