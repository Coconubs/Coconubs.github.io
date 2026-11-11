---
title: Pokédex
seo_title: "Cobblemon Pokédex: Pokémon, abilities, drops, natures, type chart"
description: "The Coco Cobblemon Pokédex: look up 1,025 Pokémon, abilities, items, natures, the type chart and Pokémon drops. Read straight from the server's mods and datapacks."
parent: English
nav_order: 4.84
permalink: /en/pokedex/
alt: /pokedex/
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Coco Cobblemon Pokédex",
    "description": "Pokémon data on the Coco Cobblemon server: types, base stats, abilities, evolutions, spawns and drops, plus abilities, items, natures and the type chart. Read from Cobblemon 1.7.3, Mega Showdown 1.8.4, COBBLEVERSE and the server's datapacks.",
    "url": "https://coconubs.github.io/en/pokedex/",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "dateModified": "2026-11-11",
    "keywords": ["Cobblemon", "Pokédex", "Pokémon", "abilities", "drops", "type chart"],
    "creator": {
      "@type": "Organization",
      "name": "Coconubs",
      "url": "https://github.com/Coconubs"
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "Coco Cobblemon",
      "url": "https://coconubs.github.io/"
    },
    "distribution": [
      {
        "@type": "DataDownload",
        "encodingFormat": "application/json",
        "contentUrl": "https://coconubs.github.io/assets/pokedex/mon.json"
      }
    ]
  }
last_modified_at: 2026-11-11T22:00:00+07:00
---

# Pokédex

Look up Pokémon, abilities, items, natures and type matchups as they are on the Coco Cobblemon server. Tap a row for details. The **Drops** tab works both ways: type a Pokémon to see what it drops, or an item to see which Pokémon drop it.
{: .fs-5 .fw-300 }

{% include pokedex_app.html lang="en" %}

## Where the data comes from

Read straight from the mod and datapack files the server ran on 11 November 2026, not copied from a wiki. All 1,025 species are in the game on Coco: plain Cobblemon finishes 851, and COBBLEVERSE and Mega Showdown turn on the other 174.

Sources:

- Cobblemon 1.7.3, Mega Showdown 1.8.4, ZA Mega 1.7.3 (Megas and new forms);
- COBBLEVERSE DP v31 and Coco's own datapacks (move changes, riding fixes, extra Megas);
- the type chart, natures and ability text from the battle engine (Showdown) on the server.

What is different on Coco:

- **Drops:** the server removes held items, vitamins, mochi, feathers, mints, IV candies, bottle caps and ability changers from Pokémon drops. The Pokédex still lists them, struck through. Chances are the numbers in the species data; each defeat drops only some entries from the list.
- **Legendaries** (77 species) are not in the normal spawn table. The server rolls its own chance; see [Features](/en/features/).
- **Mythicals** (23 species) never spawn naturally and cannot be summoned.
- Wild Pokémon on Coco are never shiny by chance.

More on evolving: [Evolution](/en/cobblemon-evolution/). Mega Evolution: [Mega](/en/cobblemon-mega/).
