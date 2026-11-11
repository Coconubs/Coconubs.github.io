---
title: Pokédex
seo_title: "Pokédex Cobblemon: tra Pokémon, Ability, item rơi, tính cách, khắc hệ"
description: "Pokédex của server Coco Cobblemon: tra 1.025 Pokémon, Ability, item, tính cách, bảng khắc hệ và item rơi. Dữ liệu lấy thẳng từ mod và datapack server đang chạy."
nav_order: 8.55
permalink: /pokedex/
alt: /en/pokedex/
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Pokédex Coco Cobblemon",
    "description": "Dữ liệu Pokémon trên server Coco Cobblemon: hệ, chỉ số gốc, Ability, tiến hoá, nơi xuất hiện, item rơi, cùng danh sách Ability, item, tính cách và bảng khắc hệ. Đọc từ Cobblemon 1.7.3, Mega Showdown 1.8.4, COBBLEVERSE và datapack của server.",
    "url": "https://coconubs.github.io/pokedex/",
    "inLanguage": "vi",
    "isAccessibleForFree": true,
    "dateModified": "2026-11-11",
    "keywords": ["Cobblemon", "Pokédex", "Pokémon", "Ability", "item rơi", "khắc hệ"],
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

Tra Pokémon, Ability, item, tính cách và khắc hệ đúng như trên server Coco Cobblemon. Bấm vào một dòng để xem chi tiết. Tab **Item rơi** tra được hai chiều: gõ tên Pokémon để xem nó rơi gì, gõ tên item để xem con nào rơi.
{: .fs-5 .fw-300 }

{% include pokedex_app.html lang="vi" %}

## Dữ liệu lấy từ đâu

Đọc thẳng từ file mod và datapack server đang chạy ngày 11/11/2026, không chép từ wiki. Cả 1.025 loài đều có trên server: Cobblemon gốc làm sẵn 851 loài, COBBLEVERSE và Mega Showdown mở thêm 174 loài.

Nguồn gồm:

- Cobblemon 1.7.3, Mega Showdown 1.8.4, ZA Mega 1.7.3 (Mega và các dạng mới);
- COBBLEVERSE DP v31 cùng các datapack riêng của Coco (đổi chiêu, sửa cưỡi, Mega thêm);
- bảng khắc hệ, tính cách và mô tả Ability lấy từ bộ máy trận đấu (Showdown) trên server.

Mấy điều riêng của Coco:

- **Item rơi:** server bỏ held item, vitamin, mochi, lông vũ, kẹo bạc hà, kẹo IV, nắp chai và đồ đổi Ability khỏi đồ rơi của Pokémon. Pokédex vẫn ghi các món này nhưng gạch đi. Tỉ lệ là con số ghi trong dữ liệu loài, mỗi lần hạ chỉ rơi một số món trong danh sách.
- **Huyền thoại** (77 loài) không ra theo bảng spawn thường. Server tự gieo tỉ lệ riêng, xem [Legendary](/tinh-nang/legendary/).
- **Thần thoại** (23 loài) không xuất hiện tự nhiên và bị khoá triệu hồi.
- Pokémon hoang dã trên Coco không ra Shiny tự nhiên. Shiny có cách riêng, xem [Shiny](/tinh-nang/shiny/).

Cách tiến hoá chi tiết hơn có ở [Tiến hoá](/tien-hoa-cobblemon/), Mega ở [Mega](/mega-cobblemon/).

Ảnh Pokémon: PokéAPI. Ảnh item: texture trong game (Minecraft, Cobblemon, Mega Showdown). Pokémon © Nintendo / Game Freak / The Pokémon Company.
{: .fs-2 }
