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
        "text": "Press M to open the Summary and select the Pokémon."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Go to the Moves tab."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Pick the move you want to replace and press Switch Move."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Pick the new move from the list. To just remove a move, use Forget Move."
      }
    ]
  }
last_modified_at: 2026-11-12T10:00:00+07:00
---

# How Pokémon learn moves in Cobblemon

In Cobblemon 1.7.3, a Pokémon picks up a new level-up move by itself if it has a free slot (max 4 moves). If it already has 4, open the **Summary** (M), go to **Moves**, pick the move to replace and press **Switch Move**. The list has every move the species learns by level up to its current level, plus evolution moves and benched moves. Plain Cobblemon has no TMs; Coco Cobblemon adds them with the TMCraft mod.
{: .fs-5 .fw-300 }

## Level-up moves

Every species has a level-up move list. When a Pokémon hits the level for a move:

- Fewer than 4 moves: the new move goes into the free slot and you see "**(Pokémon) has learned (move).**"
- 4 moves already: nothing gets replaced, but you can pick the new move any time with **Switch Move**.

(From the `Pokemon` class in `Cobblemon-fabric-1.7.3+1.21.1.jar`, 11 November 2026: the experience code only adds a move when there's room.)

## Steps to swap a move

1. Press **M** to open the Summary and select the Pokémon.
2. Go to the **Moves** tab.
3. Pick the move you want to replace and press **Switch Move**.
4. Pick the new move from the list. To just remove a move, use **Forget Move**.

The Switch Move list has 3 groups (`getAllAccessibleMoves` in 1.7.3):

| Group | What's in it |
|---|---|
| Level-up moves | Every move the species learns by level up, from level 1 to its current level |
| Evolution moves | Moves learned when it evolves, like Fairy Wind and Disarming Voice when Eevee becomes Sylveon |
| Benched moves | Moves it learned some other way (a TM, say) while all 4 slots were full |

So you never need to hunt down a Move Reminder to get back a level-up move you skipped.

## TMs in Cobblemon

**Plain Cobblemon 1.7.3 has no TMs.** There are no TM items in the mod, so a server needs an extra mod for them.

**Coco Cobblemon uses the TMCraft mod:**

- Buy TMs in **Shop Tokens** (Menu > Shop > Shop Tokens) for 40-400 Tokens (in-game Guide, 8 November 2026).
- Hover over a TM to see who in your party can use it: **ABLE**, **UNABLE** or **LEARNED** (already knows it).
- To use one, send the Pokémon out, hold the TM and right-click the Pokémon. TMs are single-use.
- With a free slot the move goes straight in. With 4 moves it goes to benched moves, ready for **Switch Move**.
- TMCraft also has items that teach Egg Moves and Tutor Moves.

## Quick answers

### How do Pokémon learn new moves in Cobblemon?

They learn level-up moves by themselves when there's a free slot. With 4 moves, press M, go to Moves, pick one to replace, press Switch Move and choose the new one.

### Does Cobblemon have TMs?

Not plain Cobblemon 1.7.3. Coco Cobblemon has them through TMCraft, sold in Shop Tokens. Hold the TM and right-click the Pokémon to teach it.

### Is there a Move Reminder in Cobblemon?

You don't need one. Switch Move in the Summary already lets you pick any move the species learns by level up to its current level.

**See also:** [How to evolve Pokémon](/en/cobblemon-evolution/) · [How to catch Pokémon](/en/cobblemon-catching/) · [Cobblemon controls](/en/cobblemon-controls/) · [Features of Coco Cobblemon](/en/features/)

*Read from `Cobblemon-fabric-1.7.3+1.21.1.jar` and TMCraft 1.4.18 on 11 November 2026. The Coco Cobblemon parts follow the in-game Guide of 8 November 2026.*

*Updated: 12 November 2026.*
