---
title: Bắt Pokémon Cobblemon
seo_title: "Cách bắt Pokémon trong Cobblemon: tỉ lệ bắt, loại bóng, Legendary"
description: "Cách bắt Pokémon trong Cobblemon 1.7.3: đấu trước rồi ném bóng, hạ máu, gây Ngủ, chọn bóng tốt. Tỉ lệ bắt tính ra sao, bắt Legendary trên Coco Cobblemon thế nào."
nav_order: 8.75
alt: /en/cobblemon-catching/
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cách bắt Pokémon trong Cobblemon",
    "description": "Cách bắt Pokémon trong Cobblemon 1.7.3: đấu trước rồi ném bóng, hạ máu, gây Ngủ, chọn bóng tốt. Tỉ lệ bắt tính ra sao, bắt Legendary trên Coco Cobblemon thế nào.",
    "inLanguage": "vi",
    "url": "https://coconubs.github.io/cach-bat-pokemon-cobblemon/",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Bấm mũi tên lên, xuống để chọn con sẽ ra đấu."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Nhìn vào Pokémon hoang dã ở gần, bấm R để vào trận."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Đánh cho nó còn ít máu, nhưng đừng hạ gục. Có chiêu gây Ngủ hoặc Đóng băng thì dùng."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Bấm R để thu nhỏ màn trận, cầm Poké Ball rồi bấm chuột phải để ném. Bóng lắc rồi đóng lại là bắt được, Pokémon thoát ra thì ném tiếp."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "text": "Con vừa bắt vào đội hình. Đội đủ 6 con thì nó vào PC."
      }
    ]
  }
last_modified_at: 2026-11-12T10:00:00+07:00
---

# Cách bắt Pokémon trong Cobblemon

Muốn bắt Pokémon thì đấu trước: nhìn vào con hoang dã, bấm **R** vào trận, đánh cho còn ít máu (gây Ngủ càng tốt), bấm R thu nhỏ màn trận rồi cầm Poké Ball bấm **chuột phải** để ném. Ném khi đang đấu dễ bắt gấp đôi so với ném vào con đang đi ngoài thế giới. Bóng xịn, máu thấp, loài có catch rate cao thì càng dễ.
{: .fs-5 .fw-300 }

## Các bước

1. Bấm mũi tên lên, xuống để chọn con sẽ ra đấu.
2. Nhìn vào Pokémon hoang dã ở gần, bấm **R** để vào trận.
3. Đánh cho nó còn ít máu, nhưng đừng hạ gục. Có chiêu gây Ngủ hoặc Đóng băng thì dùng.
4. Bấm **R** để thu nhỏ màn trận, cầm Poké Ball rồi bấm **chuột phải** để ném. Bóng lắc rồi đóng lại là bắt được, Pokémon thoát ra thì ném tiếp.
5. Con vừa bắt vào đội hình. Đội đủ 6 con thì nó vào PC.

Poké Ball làm từ Apricorn và phôi kim loại, xem [Công thức chế tạo Cobblemon](/cong-thuc-cobblemon/).

## Tỉ lệ bắt tính thế nào

Số dưới đây đọc từ cách tính mặc định của Cobblemon 1.7.3 (lớp `CobblemonCaptureCalculator`, cấu hình `captureCalculator: cobblemon`), ngày 11/11/2026:

| Yếu tố | Ảnh hưởng |
|---|---|
| Có đang đấu không | Ném vào con không ở trong trận: tỉ lệ x0,5 |
| Máu còn lại | Càng ít máu càng dễ bắt (tính theo 3 lần máu tối đa trừ 2 lần máu hiện tại) |
| Trạng thái | Ngủ hoặc Đóng băng x2,5; Tê liệt, Bỏng, Trúng độc x1,5 |
| Loại bóng | Poké Ball x1, Great Ball x1,5, Ultra Ball x2, Master Ball luôn bắt được |
| Pokémon cấp thấp | Dưới cấp 13 dễ bắt hơn: cấp 1-3 x3, cấp 4-8 x2 |
| Chênh cấp quá xa | Con hoang dã cao hơn con cấp cao nhất của bạn trong trận từ 50 cấp trở lên (khi cấp tối đa là 100): x0,1 |
| Catch rate của loài | Từ 3 tới 255: Caterpie, Magikarp 255; Pikachu 190; Bulbasaur, Eevee, Charizard, Dragonite 45; Mewtwo, Lugia, Rayquaza, Articuno 3 |

Cobblemon 1.7.3 có 48 loại bóng, trong đó 16 bóng cổ (Ancient, kiểu Hisui). Bóng đặc biệt như Net Ball, Dusk Ball, Quick Ball mạnh hơn khi đúng điều kiện của từng loại.

## Pokémon xuất hiện ở đâu, hiếm cỡ nào

Mỗi loài có biome, giờ và thời tiết xuất hiện riêng. Mỗi lần spawn, Cobblemon chọn nhóm độ hiếm trước. Cấu hình mặc định bản 1.7.3: **common** 94,3%, **uncommon** 5%, **rare** 0,5%, **ultra-rare** 0,2%. File mod có 2.852 mục spawn cho 824 loài: 1.657 mục common, 679 uncommon, 516 rare. Server có thể chỉnh các số này.

Trên Coco Cobblemon, mở `/menu` rồi chọn **POKÉDEX** ở thanh trên cùng để xem từng loài ra ở đâu, tiến hoá thế nào.

## Bắt Pokémon huyền thoại (Legendary)

Legendary rất khó bắt: 60 trong 71 loài Legendary có catch rate 3 (Caterpie là 255). Cứ đấu trước, hạ máu thật thấp, gây Ngủ, dùng Ultra Ball.

**Cobblemon 1.7.3 gốc không cho Legendary và Mythical tự xuất hiện.** File mod có 71 loài Legendary và 23 loài Mythical, nhưng không loài nào nằm trong thư mục spawn `spawn_pool_world`. Chơi một mình muốn có Legendary thì dùng lệnh `/pokespawn` (phải bật quyền lệnh, xem [Lệnh Cobblemon](/lenh-cobblemon/)) hoặc cài thêm mod.

**Trên Coco Cobblemon, Legendary có từ nhiều nguồn:**

- Tự xuất hiện theo tỉ lệ tích luỹ. Tỉ lệ x2 vào Giờ Vàng cuối tuần hoặc khi dùng Bùa Huyền Thoại.
- Triệu hồi bằng Altar, đền, Legendary Monuments (tốn CobbleDollars).
- Raid Thế Giới, Trứng Huyền Thoại, Boss Bang.

Tỉ lệ, giờ và phí cụ thể ở trang [Legendary trên Coco Cobblemon](/tinh-nang/legendary/). Mythical (Mew, Celebi, Arceus...) không tự xuất hiện trên server.

## Trên Coco Cobblemon

- Pokémon hoang dã không cầm vật phẩm (theo Hướng dẫn trong game ngày 08/11/2026). Held Item mua ở Shop Tokens (Menu > Shop > Shop Tokens), xem [Tiền tệ, Shop và Chợ GTS](/tinh-nang/kinh-te/).
- Shiny có qua Dung hợp Shiny, Trứng, Raid, Daily Shop và Battle Pass, xem [Cách có Pokémon Shiny](/tinh-nang/shiny/).

## Hỏi nhanh

### Ném bóng không cần đấu được không?

Được, nhưng tỉ lệ bắt chỉ còn một nửa (x0,5) so với ném lúc đang đấu.

### Bóng nào dễ bắt nhất?

Master Ball luôn bắt được. Còn lại thì Ultra Ball x2, Great Ball x1,5, Poké Ball x1. Quick Ball, Dusk Ball, Net Ball mạnh hơn khi đúng điều kiện.

### Bắt Legendary trong Cobblemon kiểu gì?

Bản gốc không có Legendary tự xuất hiện. Trên Coco Cobblemon thì có: gặp ngoài thế giới, triệu hồi bằng Altar, Raid, Trứng Huyền Thoại, Boss Bang. Gặp rồi thì hạ máu, gây Ngủ, ném Ultra Ball, vì đa số Legendary có catch rate 3.

**Xem thêm:** [Cách tiến hoá Pokémon](/tien-hoa-cobblemon/) · [Cách cưỡi Pokémon](/cuoi-pokemon-cobblemon/) · [Công thức chế tạo Cobblemon](/cong-thuc-cobblemon/) · [Các phím chơi Cobblemon](/phim-tat-cobblemon/) · [Legendary trên Coco Cobblemon](/tinh-nang/legendary/)

*Số liệu đọc từ file `Cobblemon-fabric-1.7.3+1.21.1.jar` ngày 11/11/2026. Server có thể chỉnh cấu hình hoặc cài thêm gói dữ liệu nên số trên server có thể khác.*

*Cập nhật: 12/11/2026.*
