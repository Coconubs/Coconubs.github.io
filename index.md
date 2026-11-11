---
title: Trang chủ
seo_title: "Coco Cobblemon: server Cobblemon Việt Nam, CocoLauncher và hướng dẫn"
description: "Coco Cobblemon là server Cobblemon Việt Nam trên Minecraft Java 1.21.1, IP coco.ultramc.co. Tải CocoLauncher (Coco Launcher), cách vào server, tính năng, hỏi đáp."
nav_order: 1
permalink: /
alt: /en/
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
      "name": "Địa chỉ server",
      "value": "coco.ultramc.co"
    },
    "url": "https://coconubs.github.io/",
    "description": "Server Minecraft Java chơi mod Cobblemon dành cho cộng đồng người Việt, vào game bằng launcher riêng CocoLauncher.",
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
<h1 id="coco-cobblemon">Coco Cobblemon</h1>
<p class="coco-hero__lead">Server Minecraft Java 1.21.1 chơi mod Cobblemon 1.7.3 cho cộng đồng người Việt, vào game miễn phí bằng CocoLauncher.</p>
<div class="coco-ip"><span class="coco-ip__label">Địa chỉ server</span> <code class="coco-ip__addr">coco.ultramc.co</code> <button type="button" class="coco-copy" data-copy="coco.ultramc.co" data-done="Đã chép"><svg aria-hidden="true"><use href="#ci-content-copy"/></svg><span aria-live="polite">Sao chép</span></button></div>
<div class="coco-cta">
<a class="coco-btn coco-btn--green" href="/cocolauncher/"><svg aria-hidden="true"><use href="#ci-download"/></svg>Tải CocoLauncher</a>
<a class="coco-btn coco-btn--purple" href="https://discord.gg/hyspace"><svg aria-hidden="true"><use href="#ci-forum"/></svg>Vào Discord</a>
<a class="coco-btn coco-btn--ghost" href="/cach-vao-server/"><svg aria-hidden="true"><use href="#ci-login"/></svg>Cách vào server</a>
</div>
</div>
<div class="coco-hero__art"><img src="/assets/images/coco-cobblemon-logo-256.webp" srcset="/assets/images/coco-cobblemon-logo-176.webp 176w, /assets/images/coco-cobblemon-logo-256.webp 256w" sizes="(min-width: 50rem) 176px, 64px" width="256" height="256" alt="Logo server Coco Cobblemon" fetchpriority="high"></div>
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

## Có gì ở Coco Cobblemon

<ul class="coco-cards">
<li><div class="coco-card"><span class="coco-ico coco-ico--red"><svg aria-hidden="true"><use href="#ci-swords"/></svg></span><div><h3 class="no_anchor"><a href="/tinh-nang/dau-xep-hang/">Đấu Xếp Hạng</a></h3><p>Đấu Đôi 4v4 tính Elo, Đấu Đơn 6v6, ghép trận tự động.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--item"><img src="/assets/images/items/chia-khoa-raid.webp" width="32" height="32" alt="Chìa Khoá Raid" loading="lazy"></span><div><h3 class="no_anchor"><a href="/tinh-nang/raid/">Raid Thế Giới</a></h3><p>Boss chung cả server lúc 9:00 và 19:00 mỗi ngày.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--item"><img src="/assets/images/items/bua-huyen-thoai.webp" width="32" height="32" alt="Bùa Huyền Thoại" loading="lazy"></span><div><h3 class="no_anchor"><a href="/tinh-nang/legendary/">Legendary tích luỹ</a></h3><p>Càng lâu server chưa có Legendary, tỉ lệ càng tăng.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--item"><img src="/assets/images/items/tinh-the-shiny.webp" width="32" height="32" alt="Tinh Thể Shiny" loading="lazy"></span><div><h3 class="no_anchor"><a href="/tinh-nang/shiny/">Shiny</a></h3><p>Có Shiny qua Dung hợp, Trứng, Raid và Battle Pass.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--blue"><svg aria-hidden="true"><use href="#ci-groups"/></svg></span><div><h3 class="no_anchor"><a href="/tinh-nang/bang-hoi/">Bang hội</a></h3><p>Bang Hội Chiến, Boss Bang mỗi ngày, khoá đất riêng.</p></div></div></li>
<li><div class="coco-card"><span class="coco-ico coco-ico--orange"><svg aria-hidden="true"><use href="#ci-calendar-month"/></svg></span><div><h3 class="no_anchor"><a href="/tinh-nang/hang-ngay/">Việc hằng ngày</a></h3><p>Battle Pass, Nghề nghiệp, Viễn Chinh, câu cá, điểm danh.</p></div></div></li>
</ul>

<p class="coco-more"><a href="/tinh-nang/">Xem tất cả tính năng →</a></p>
