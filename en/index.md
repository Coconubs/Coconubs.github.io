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
last_modified_at: 2026-11-11T10:30:00+07:00
---

{% include coco_icons.html %}
<div class="coco-hero">
<div class="coco-hero__text">
<h1 id="coco-cobblemon-a-cobblemon-server-in-vietnam">Coco Cobblemon: a Cobblemon server in Vietnam</h1>
<p class="coco-hero__lead">A Vietnamese Pokémon Minecraft server. Java 1.21.1, Cobblemon 1.7.3, free to join with CocoLauncher.</p>
<div class="coco-ip"><span class="coco-ip__label">Server address</span> <code class="coco-ip__addr">coco.ultramc.co</code> <button type="button" class="coco-copy" data-copy="coco.ultramc.co" data-done="Copied"><svg aria-hidden="true"><use href="#ci-content-copy"/></svg><span aria-live="polite">Copy</span></button></div>
<div class="coco-cta">
<a class="coco-btn coco-btn--green" href="/en/cocolauncher/"><svg aria-hidden="true"><use href="#ci-download"/></svg>Download CocoLauncher</a>
<a class="coco-btn coco-btn--purple" href="https://discord.gg/hyspace"><svg aria-hidden="true"><use href="#ci-forum"/></svg>Join Discord</a>
<a class="coco-btn coco-btn--ghost" href="/en/how-to-join/"><svg aria-hidden="true"><use href="#ci-login"/></svg>How to join</a>
<a class="coco-btn coco-btn--ghost" href="/en/pokedex/">Pokédex</a>
</div>
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

## What you can do on Coco

<ul class="coco-cards">
<li><div class="coco-card"><span class="coco-ico coco-ico--item"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" width="40" height="40" alt="Pikachu" loading="lazy" style="image-rendering:pixelated;margin:-4px"></span><div><h3 class="no_anchor"><a href="/en/pokedex/">Pokédex</a></h3><p>Look up Pokémon, abilities, items, natures, type matchups and drops, as they are on the server.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--red"><svg aria-hidden="true"><use href="#ci-swords"/></svg></span><div><h3 class="no_anchor"><a href="/en/features/#ranked-battles">Ranked battles</a></h3><p>4v4 Doubles with Elo and 6v6 Singles, with automatic matchmaking.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--item"><img src="/assets/images/items/chia-khoa-raid.webp" width="32" height="32" alt="Raid Key" loading="lazy"></span><div><h3 class="no_anchor"><a href="/en/features/#world-raids">World Raids</a></h3><p>A shared boss for the whole server at 9:00 and 19:00 every day.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--item"><img src="/assets/images/items/bua-huyen-thoai.webp" width="32" height="32" alt="Legendary Charm" loading="lazy"></span><div><h3 class="no_anchor"><a href="/en/features/#legendary-and-shiny">Accumulating Legendary chance</a></h3><p>The longer the server goes without a Legendary, the higher the chance.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--item"><img src="/assets/images/items/tinh-the-shiny.webp" width="32" height="32" alt="Shiny Crystal" loading="lazy"></span><div><h3 class="no_anchor"><a href="/en/features/#legendary-and-shiny">Shiny</a></h3><p>Get Shiny Pokémon from Fusion, Eggs, Raids and the Battle Pass.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--blue"><svg aria-hidden="true"><use href="#ci-groups"/></svg></span><div><h3 class="no_anchor"><a href="/en/features/#guilds">Guilds</a></h3><p>Guild Wars, a daily Guild Boss and private land locks.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--orange"><svg aria-hidden="true"><use href="#ci-calendar-month"/></svg></span><div><h3 class="no_anchor"><a href="/en/features/#daily-play">Daily play</a></h3><p>Battle Pass, jobs, expeditions, fishing and daily rewards.</p></div></div></li>
</ul>

<p class="coco-more"><a href="/en/features/">See all features →</a></p>
