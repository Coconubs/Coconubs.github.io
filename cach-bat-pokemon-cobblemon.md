---
title: Bắt Pokémon Cobblemon
seo_title: "Cách bắt Pokémon trong Cobblemon: tỉ lệ bắt, loại bóng, Legendary"
description: "Cách bắt Pokémon trong Cobblemon 1.7.3: đấu trước rồi ném bóng, giảm máu, gây Ngủ, chọn bóng. Cách tính tỉ lệ bắt, cách bắt Legendary trên Coco Cobblemon."
nav_order: 8.75
alt: /en/cobblemon-catching/
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cách bắt Pokémon trong Cobblemon",
    "description": "Cách bắt Pokémon trong Cobblemon 1.7.3: đấu trước rồi ném bóng, giảm máu, gây Ngủ, chọn bóng. Cách tính tỉ lệ bắt, cách bắt Legendary trên Coco Cobblemon.",
    "inLanguage": "vi",
    "url": "https://coconubs.github.io/cach-bat-pokemon-cobblemon/",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Chọn Pokémon ra đấu bằng mũi tên lên, xuống."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Nhìn vào Pokémon hoang dã ở gần và bấm R để bắt đầu trận."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Đánh cho Pokémon hoang dã còn ít máu, cẩn thận đừng hạ gục nó. Gây trạng thái Ngủ hoặc Đóng băng nếu có chiêu."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Bấm R để thu nhỏ màn trận, cầm Poké Ball trên tay và bấm chuột phải để ném vào Pokémon. Bóng lắc rồi đóng lại là bắt được; Pokémon thoát ra thì ném tiếp."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "text": "Pokémon bắt được vào đội hình, đội đủ 6 con thì vào PC."
      }
    ]
  }
last_modified_at: 2026-11-11T06:02:04+07:00
---

# Cách bắt Pokémon trong Cobblemon

Cách bắt Pokémon trong Cobblemon 1.7.3: nhìn vào Pokémon hoang dã ở gần và bấm **R** để vào trận, đánh cho Pokémon đó còn ít máu (gây Ngủ càng tốt), rồi bấm R để thu nhỏ màn trận, cầm Poké Ball và bấm **chuột phải** để ném. Ném bóng khi đang đấu được tỉ lệ gấp đôi so với ném vào Pokémon đang đi ngoài thế giới. Bóng càng tốt, máu càng thấp và loài có chỉ số catch rate càng cao thì càng dễ bắt.
{: .fs-5 .fw-300 }

## Các bước bắt Pokémon

1. Chọn Pokémon ra đấu bằng mũi tên lên, xuống.
2. Nhìn vào Pokémon hoang dã ở gần và bấm **R** để bắt đầu trận.
3. Đánh cho Pokémon hoang dã còn ít máu, cẩn thận đừng hạ gục nó. Gây trạng thái Ngủ hoặc Đóng băng nếu có chiêu.
4. Bấm **R** để thu nhỏ màn trận, cầm Poké Ball trên tay và bấm **chuột phải** để ném vào Pokémon. Bóng lắc rồi đóng lại là bắt được; Pokémon thoát ra thì ném tiếp.
5. Pokémon bắt được vào đội hình, đội đủ 6 con thì vào PC.

Poké Ball chế tạo từ Apricorn và phôi kim loại, xem [Công thức chế tạo Cobblemon](/cong-thuc-cobblemon/).

## Cobblemon tính tỉ lệ bắt thế nào

Đọc từ lớp `CobblemonCaptureCalculator` (cách tính mặc định, cấu hình `captureCalculator: cobblemon`) trong file `Cobblemon-fabric-1.7.3+1.21.1.jar`, ngày 11/11/2026:

| Yếu tố | Ảnh hưởng |
|---|---|
| Đang trong trận hay không | Ném vào Pokémon không ở trong trận: tỉ lệ x0,5 |
| Máu còn lại | Càng ít máu càng dễ bắt (công thức tính theo 3 lần máu tối đa trừ 2 lần máu hiện tại) |
| Trạng thái | Ngủ hoặc Đóng băng x2,5; Tê liệt, Bỏng, Trúng độc x1,5 |
| Loại bóng | Poké Ball x1, Great Ball x1,5, Ultra Ball x2, Master Ball luôn bắt được |
| Pokémon cấp thấp | Dưới cấp 13 dễ bắt hơn: cấp 1-3 x3, cấp 4-8 x2 |
| Chênh cấp rất lớn | Pokémon hoang dã cao hơn Pokémon cấp cao nhất của bạn trong trận từ 50 cấp trở lên (khi cấp tối đa là 100): x0,1 |
| Chỉ số catch rate của loài | Từ 3 tới 255: Caterpie, Magikarp 255; Pikachu 190; Bulbasaur, Eevee, Charizard, Dragonite 45; Mewtwo, Lugia, Rayquaza, Articuno 3 |

Cobblemon 1.7.3 có 48 loại bóng, gồm 16 bóng cổ (Ancient, kiểu Hisui). Các bóng đặc biệt như Net Ball, Dusk Ball, Quick Ball mạnh hơn trong điều kiện riêng của từng bóng.

## Pokémon xuất hiện ở đâu, hiếm thế nào

Pokémon hoang dã xuất hiện theo biome, giờ trong ngày và thời tiết của từng loài. Mỗi lượt xuất hiện, Cobblemon chọn một nhóm độ hiếm trước: trong cấu hình mặc định của bản 1.7.3, **common** 94,3%, **uncommon** 5%, **rare** 0,5%, **ultra-rare** 0,2%. File mod có 2.852 mục xuất hiện cho 824 loài: 1.657 mục common, 679 uncommon, 516 rare. Server có thể đổi các số này.

Trên server Coco Cobblemon, mở Menu (`/menu`) rồi chọn **POKÉDEX** ở thanh trên cùng để xem nơi xuất hiện và cách tiến hoá của từng loài.

## Cách bắt Pokémon huyền thoại (Legendary) trong Cobblemon

**Trong Cobblemon 1.7.3 gốc, Legendary và Mythical không xuất hiện tự nhiên:** file mod có 71 loài gắn nhãn Legendary và 23 loài Mythical, nhưng không loài nào có mục xuất hiện trong thư mục `spawn_pool_world`. Muốn có Legendary trong thế giới chơi một mình thì dùng lệnh `/pokespawn` (cần bật quyền lệnh, xem [Lệnh Cobblemon](/lenh-cobblemon/)) hoặc cài thêm mod.

**Trên server Coco Cobblemon, Legendary có nhiều nguồn:**

- Xuất hiện tự nhiên theo tỉ lệ tích luỹ; tỉ lệ x2 vào Giờ Vàng cuối tuần hoặc khi dùng Bùa Huyền Thoại.
- Triệu hồi bằng Altar, đền, Legendary Monuments (tốn CobbleDollars).
- Raid Thế Giới, Trứng Huyền Thoại, Boss Bang.

Chi tiết tỉ lệ, giờ và phí ở trang [Legendary trên Coco Cobblemon](/tinh-nang/legendary/). Mythical (Mew, Celebi, Arceus...) không xuất hiện tự nhiên trên server.

Legendary có chỉ số catch rate rất thấp (60 trong 71 loài Legendary là 3, Caterpie là 255), nên hãy đấu trước, hạ máu thật thấp, gây Ngủ và dùng Ultra Ball.

## Trên server Coco Cobblemon

- Pokémon hoang dã xuất hiện không cầm vật phẩm (theo Hướng dẫn trong game ngày 08/11/2026). Held Item mua ở Shop Tokens (Menu > Shop > Shop Tokens), xem [Tiền tệ, Shop và Chợ GTS](/tinh-nang/kinh-te/).
- Shiny trên Coco Cobblemon có qua Dung hợp Shiny, Trứng, Raid, Daily Shop và Battle Pass, xem [Cách có Pokémon Shiny](/tinh-nang/shiny/).

## Hỏi nhanh

### Cách bắt Pokémon trong Cobblemon?

Trong Cobblemon, bấm R khi nhìn vào Pokémon hoang dã để vào trận, đánh cho còn ít máu, bấm R để thu nhỏ màn trận, rồi cầm Poké Ball bấm chuột phải để ném.

### Ném bóng không cần đấu có được không?

Được, nhưng Cobblemon 1.7.3 nhân tỉ lệ bắt x0,5 khi Pokémon không ở trong trận, tức chỉ còn một nửa so với ném khi đang đấu.

### Bóng nào bắt dễ nhất?

Trong Cobblemon 1.7.3, Master Ball luôn bắt được. Trong các bóng thường: Ultra Ball x2, Great Ball x1,5, Poké Ball x1; các bóng đặc biệt như Quick Ball, Dusk Ball, Net Ball mạnh hơn trong điều kiện riêng.

### Cách bắt Pokémon huyền thoại trong Cobblemon?

Cobblemon 1.7.3 gốc không cho Legendary xuất hiện tự nhiên. Trên Coco Cobblemon, Legendary xuất hiện theo tỉ lệ tích luỹ, triệu hồi bằng Altar, có trong Raid, Trứng Huyền Thoại và Boss Bang; khi gặp thì hạ máu, gây Ngủ và dùng Ultra Ball vì đa số Legendary có catch rate 3.

**Xem thêm:** [Cách tiến hoá Pokémon](/tien-hoa-cobblemon/) · [Cách cưỡi Pokémon](/cuoi-pokemon-cobblemon/) · [Công thức chế tạo Cobblemon](/cong-thuc-cobblemon/) · [Các phím chơi Cobblemon](/phim-tat-cobblemon/) · [Legendary trên Coco Cobblemon](/tinh-nang/legendary/)

*Số liệu đọc từ file `Cobblemon-fabric-1.7.3+1.21.1.jar` ngày 11/11/2026 (lớp tính tỉ lệ bắt, bảng bóng, dữ liệu loài và xuất hiện). Server có thể đổi cấu hình, cài thêm gói dữ liệu, nên con số trên server có thể khác.*

*Cập nhật: 11/11/2026.*
