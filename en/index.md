---
title: English
seo_title: "Coco Cobblemon: Cobblemon server in Vietnam, CocoLauncher and guides"
description: "Coco Cobblemon: a Vietnamese community Minecraft Java 1.21.1 Cobblemon server, IP coco.ultramc.co. Download CocoLauncher, how to join, features, FAQ."
nav_order: 99
has_children: true
has_toc: false
permalink: /en/
alt: /
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "GameServer",
    "@id": "https://coconubs.github.io/#server",
    "name": "Coco Cobblemon",
    "alternateName": ["Coco's Hyper Space", "Coco Cobbleverse"],
    "image": "https://coconubs.github.io/assets/images/coco-cobblemon-logo.png",
    "identifier": {
      "@type": "PropertyValue",
      "name": "Server address",
      "value": "coco.ultramc.co"
    },
    "url": "https://coconubs.github.io/",
    "description": "A Vietnamese community Minecraft Java server running the Cobblemon mod, played through its own launcher, CocoLauncher.",
    "serverStatus": "https://schema.org/Online",
    "game": {
      "@type": "VideoGame",
      "name": "Minecraft: Java Edition"
    },
    "sameAs": [
      "https://github.com/Coconubs/coco-cobblemon",
      "https://discord.gg/hyspace"
    ]
  }
last_modified_at: 2026-11-11T07:21:59+07:00
---

{% include coco_icons.html %}
<div class="coco-hero">
<div class="coco-hero__text">
<h1 id="coco-cobblemon-a-cobblemon-server-in-vietnam">Coco Cobblemon: a Cobblemon server in Vietnam</h1>
<p class="coco-hero__lead">Coco Cobblemon is a Vietnamese community Minecraft Java server running the Cobblemon mod, played through its own launcher, CocoLauncher. Server address: <code>coco.ultramc.co</code>, Minecraft Java 1.21.1, Cobblemon 1.7.3.</p>
<div class="coco-ip"><span class="coco-ip__label">Server address</span> <code class="coco-ip__addr">coco.ultramc.co</code> <button type="button" class="coco-copy" data-copy="coco.ultramc.co" data-done="Copied"><svg aria-hidden="true"><use href="#ci-content-copy"/></svg><span aria-live="polite">Copy</span></button></div>
<div class="coco-cta">
<a class="coco-btn coco-btn--green" href="/en/cocolauncher/"><svg aria-hidden="true"><use href="#ci-download"/></svg>Download CocoLauncher</a>
<a class="coco-btn coco-btn--purple" href="https://discord.gg/hyspace"><svg aria-hidden="true"><use href="#ci-forum"/></svg>Join Discord</a>
<a class="coco-btn coco-btn--ghost" href="/en/how-to-join/"><svg aria-hidden="true"><use href="#ci-login"/></svg>How to join</a>
<a class="coco-btn coco-btn--ghost" href="/" hreflang="vi" lang="vi">Tiếng Việt</a>
</div>
<p class="coco-hero__platforms">CocoLauncher for Windows, macOS, <a href="/en/cobblemon-android/">Android</a> and <a href="/en/cobblemon-ios/">iPhone</a> (Android and iPhone builds are experimental).</p>
</div>
<div class="coco-hero__art"><img src="/assets/images/coco-cobblemon-logo-256.webp" srcset="/assets/images/coco-cobblemon-logo-176.webp 176w, /assets/images/coco-cobblemon-logo-256.webp 256w" sizes="(min-width: 50rem) 176px, 64px" width="256" height="256" alt="Coco Cobblemon server logo" fetchpriority="high"></div>
</div>
<script>
document.addEventListener('click', function (e) {
  var b = e.target.closest ? e.target.closest('.coco-copy') : null;
  if (!b) { return; }
  var s = b.querySelector('span'), old = s.textContent, t = b.getAttribute('data-copy');
  var ok = function () {
    b.classList.add('is-done'); s.textContent = b.getAttribute('data-done');
    setTimeout(function () { b.classList.remove('is-done'); s.textContent = old; }, 2000);
  };
  if (navigator.clipboard) { navigator.clipboard.writeText(t).then(ok); return; }
  var r = document.createRange(); r.selectNodeContents(b.parentNode.querySelector('code'));
  var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
  try { document.execCommand('copy'); ok(); } catch (x) {}
});
</script>

| Item | Details |
|---|---|
| **Server address** | `coco.ultramc.co` |
| **Version** | Minecraft Java 1.21.1, Fabric, Cobblemon 1.7.3 |
| **Hosted in** | Singapore, about 29 ms ping from Ho Chi Minh City (measured 6 November 2026) |
| **Language** | Vietnamese, with an English option in the launcher and the in-game menu |
| **Join with** | CocoLauncher for Windows, macOS, Android and iPhone (Android and iPhone builds are experimental) |
| **Cost** | Free to download and join. Ranks and the Premium Battle Pass are optional |
| **Event times** | Vietnam time (UTC+7) |
| **Discord** | [discord.gg/hyspace](https://discord.gg/hyspace) (Discord server name: Hyper Space) |
| **Players** | 110 players online at 20:28 Vietnam time on Saturday, 7 November 2026 ([mcsrvstat.us](https://mcsrvstat.us/java/coco.ultramc.co)); about 1,860 members on the Hyper Space Discord (11 November 2026) |
| **Other names** | Coco's Hyper Space, Coco Cobbleverse (used in a few videos and older Facebook posts) |

## What you can do on the server

Most new players start by catching Pokémon, then move on to battles and guilds.

<ul class="coco-cards">
<li><div class="coco-card"><span class="coco-ico coco-ico--red"><svg aria-hidden="true"><use href="#ci-swords"/></svg></span><div><h3 class="no_anchor"><a href="/en/features/#ranked-battles">Ranked battles</a></h3><p>4v4 Doubles with Elo and 6v6 Singles, with automatic matchmaking.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--green"><svg aria-hidden="true"><use href="#ci-castle"/></svg></span><div><h3 class="no_anchor"><a href="/en/features/#battle-tower">Battle Tower</a></h3><p>555 floors, with a boss floor every 5 floors.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--blue"><svg aria-hidden="true"><use href="#ci-groups"/></svg></span><div><h3 class="no_anchor"><a href="/en/features/#guilds">Guilds</a></h3><p>Guild Wars on weekdays, a daily Guild Boss, guild gifts and a private land lock for each member.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--item"><img src="/assets/images/items/chia-khoa-raid.webp" width="32" height="32" alt="Raid Key" loading="lazy"></span><div><h3 class="no_anchor"><a href="/en/features/#world-raids">World Raids</a></h3><p>A shared boss for the whole server at 9:00 and 19:00 every day.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--item"><img src="/assets/images/items/bua-huyen-thoai.webp" width="32" height="32" alt="Legendary Charm" loading="lazy"></span><div><h3 class="no_anchor"><a href="/en/features/#legendary-and-shiny">Accumulating Legendary chance</a></h3><p>The longer the server goes without a Legendary, the higher the chance, shown on the HUD. Legendary Golden Hours run on Saturday and Sunday, 20:00-22:00 Vietnam time.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--item"><img src="/assets/images/items/tinh-the-shiny.webp" width="32" height="32" alt="Shiny Crystal" loading="lazy"></span><div><h3 class="no_anchor"><a href="/en/features/#legendary-and-shiny">Shiny</a></h3><p>Shiny Fusion, Pokémon Eggs, Raids, the Daily Shop and the Battle Pass.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--orange"><svg aria-hidden="true"><use href="#ci-calendar-month"/></svg></span><div><h3 class="no_anchor"><a href="/en/features/#daily-play">Daily play</a></h3><p>Battle Pass, jobs, expeditions, the Daily Shop and fishing with 100 species.</p></div></div></li>
</ul>

Details on the [Features](/en/features/) page.

## In-game screens

<div class="coco-gallery">
<figure class="coco-gallery__wide"><a href="/assets/images/game/menu-coco-cobblemon-944.webp"><img src="/assets/images/game/menu-coco-cobblemon-944.webp" srcset="/assets/images/game/menu-coco-cobblemon-640.webp 640w, /assets/images/game/menu-coco-cobblemon-944.webp 944w" sizes="(min-width: 50rem) 800px, 100vw" width="944" height="436" loading="lazy" decoding="async" alt="Coco Cobblemon main menu in game, in Vietnamese: tiles for Daily Shop, Expeditions, Fishing, Guilds, Leaderboards, Titles, Fusion, Costumes and the GTS market"></a><figcaption>Main menu (Vietnamese): each tile opens a feature, such as the Daily Shop, Expeditions, Fishing, Guilds, Shiny Fusion and the GTS market.</figcaption></figure>
<figure><a href="/assets/images/game/cau-ca-coco-cobblemon-1290.webp"><img src="/assets/images/game/cau-ca-coco-cobblemon-1290.webp" srcset="/assets/images/game/cau-ca-coco-cobblemon-800.webp 800w, /assets/images/game/cau-ca-coco-cobblemon-1290.webp 1290w" sizes="(min-width: 50rem) 400px, (min-width: 31.25rem) 50vw, 100vw" width="1290" height="725" loading="lazy" decoding="async" alt="Fishing screen in the Coco Cobblemon menu: sell fish, fish storage, fish book, rod crafting and the 19:00-22:00 golden hour"></a><figcaption>Fishing: sell fish, fish storage, the collection book, rod crafting and the 19:00-22:00 golden hour.</figcaption></figure>
<figure><a href="/assets/images/game/huong-dan-trong-game-coco-cobblemon-1366.webp"><img src="/assets/images/game/huong-dan-trong-game-coco-cobblemon-1366.webp" srcset="/assets/images/game/huong-dan-trong-game-coco-cobblemon-800.webp 800w, /assets/images/game/huong-dan-trong-game-coco-cobblemon-1366.webp 1366w" sizes="(min-width: 50rem) 400px, (min-width: 31.25rem) 50vw, 100vw" width="1366" height="768" loading="lazy" decoding="async" alt="In-game guide in the Coco Cobblemon menu, by topic: getting started, currencies, Pokémon items, Shiny, Legendary and Raids, daily activities"></a><figcaption>The in-game guide, by topic: getting started, currencies, Pokémon items, Shiny, Legendary and Raids.</figcaption></figure>
</div>

*In-game menu screens from 28 and 30 October 2026, shown in Vietnamese (switch with `/ngonngu en`). The numbers in the top bar are the balance of the account used for the capture.*

## Which devices work

| Device | Supported |
|---|---|
| Windows 10, 11 | Yes |
| macOS (Apple silicon, Intel) | Yes |
| Android | Experimental build that runs Java Edition, 6 GB of RAM or more. See [Play Cobblemon on Android](/en/cobblemon-android/) |
| Linux | No launcher build yet |
| iPhone, iPad | Experimental build, see [CocoLauncher iOS](https://coconubs.github.io/CocoLauncher-iOS/) (guide in Vietnamese) |
| Minecraft Bedrock, Pocket Edition | No, Cobblemon is a Java Edition mod. See [Cobblemon on Bedrock](/en/cobblemon-bedrock/) |

## Can I join from outside Vietnam?

Yes. Anyone can download CocoLauncher and join. Most players and most of the chat are Vietnamese, and the menus can be switched to English with `/ngonngu en` or the VI/EN flag in the menu.

## More pages

- [Cobblemon server in Vietnam: ping, schedule, how to choose](/en/vietnam-cobblemon-server/)
- [CocoLauncher download](/en/cocolauncher/)
- [How to join](/en/how-to-join/)
- [Features](/en/features/)
- [Play Cobblemon on Android and iPhone](/en/cobblemon-android/)
- [Cobblemon on iPhone and iPad (iOS)](/en/cobblemon-ios/)
- [Cobblemon on Bedrock and Pocket Edition](/en/cobblemon-bedrock/)
- [Cobblemon controls: default keybinds](/en/cobblemon-controls/)
- [Cobblemon commands: /pokespawn, /pokegive, /pokeheal](/en/cobblemon-commands/)
- [Cobblemon crafting recipes: Poké Ball, PC, Healing Machine](/en/cobblemon-recipes/)
- [How to catch Pokémon in Cobblemon: catch rate, balls, Legendaries](/en/cobblemon-catching/)
- [How to evolve Pokémon in Cobblemon: stones, trading, Link Cable, Eevee](/en/cobblemon-evolution/)
- [How to Mega Evolve in Cobblemon: Mega Bracelet, Mega Stones, Rayquaza](/en/cobblemon-mega/)
- [How to ride Pokémon in Cobblemon: which Pokémon are rideable](/en/cobblemon-riding/)
- [How Pokémon learn moves in Cobblemon: Switch Move, TMs](/en/cobblemon-moves/)
- [Cobblemon fossils: where to find them and how to revive fossil Pokémon](/en/cobblemon-fossils/)
- [What is Cobblemon, and how many Pokémon it has](/en/what-is-cobblemon/)
- [Which launcher for Cobblemon](/en/cobblemon-launcher/)
- [Troubleshooting](/en/troubleshooting/)
- [FAQ](/en/faq/)
{: .coco-links }

*Updated: 11 November 2026.*
