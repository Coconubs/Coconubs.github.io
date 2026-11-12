---
title: Lệnh Cobblemon
seo_title: "Lệnh Cobblemon: triệu hồi, cho Pokémon, hồi máu (/pokespawn, /pokegive)"
description: "Lệnh Cobblemon 1.7.3: /pokespawn triệu hồi Pokémon, /pokegive cho Pokémon, /pokeheal hồi máu, /pc mở PC. Cần quyền lệnh. Thêm shiny, level cho Pokémon."
nav_order: 8.6
alt: /en/cobblemon-commands/
last_modified_at: 2026-11-12T10:00:00+07:00
---

# Lệnh Cobblemon

Đa số lệnh Cobblemon cần quyền lệnh gian lận (cấp quyền 2, giống lệnh `/give` của Minecraft). Chơi một mình thì phải bật **Cho phép sử dụng lệnh**, còn trên server thì chủ server phải cấp quyền cho bạn. Hay dùng nhất là `/pokespawn` triệu hồi Pokémon, `/pokegive` cho Pokémon, `/pokeheal` hồi máu cả đội, `/pc` mở PC ở đâu cũng được. Ví dụ gọi Pikachu Shiny cấp 50: `/pokespawn pikachu shiny=yes level=50`.
{: .fs-5 .fw-300 }

## Lệnh hay dùng

| Lệnh | Tên khác | Dùng để | Quyền cần |
|---|---|---|---|
| `/pokespawn <Pokémon>` | `/spawnpokemon` | Gọi Pokémon hoang dã ra ngay chỗ bạn đứng | Cấp 2 |
| `/pokegive <Pokémon>` | `/givepokemon` | Cho bạn 1 Pokémon | Cấp 2 |
| `/pokeheal` | `/healpokemon` | Hồi máu cả đội | Cấp 2 |
| `/pc` | | Mở PC ở đâu cũng được | Cấp 2 |
| `/openstarterscreen <người chơi>` | | Mở màn chọn Pokémon khởi đầu cho người chưa chọn | Cấp 2 |
| `/spawnallpokemon`, `/giveallpokemon` | | Gọi ra hoặc cho mọi loài | Cấp 4 (toàn quyền) |

Tên lệnh và cấp quyền lấy từ file `Cobblemon-fabric-1.7.3+1.21.1.jar` (bảng quyền `CobblemonPermissions`), xem ngày 11/11/2026. Cấp 2 là mức "lệnh gian lận và khối lệnh" của Minecraft, cấp 4 là toàn quyền.

## Thêm thuộc tính cho Pokémon

Tên Pokémon viết tiếng Anh, chữ thường, viết liền (ví dụ `pikachu`, `charizard`, `mrmime`). Sau tên có thể thêm thuộc tính dạng `tên=giá trị`:

| Thuộc tính | Ví dụ | Nghĩa |
|---|---|---|
| `level` (hoặc `lvl`) | `level=50` | Cấp |
| `shiny` | `shiny=yes` | Bản Shiny |
| `nature` | `nature=adamant` | Nature |
| `ability` | `ability=intimidate` | Ability |
| `gender` | `gender=female` | Giới tính |
| `nickname` | `nickname=Pika` | Biệt danh |

Danh sách lấy từ lớp `PokemonProperties` trong cùng file. Ví dụ: `/pokegive charizard level=100 shiny=yes`.

## Bật lệnh khi chơi một mình

- **Thế giới mới:** lúc tạo thế giới, bật **Cho phép sử dụng lệnh** (Allow Commands).
- **Thế giới đã có:** bấm Esc, chọn **Mở cho mạng LAN**, bật **Cho phép gian lận** (Allow Cheats) rồi bấm bắt đầu. Quyền lệnh giữ tới khi bạn thoát thế giới.

Chưa có quyền mà gõ lệnh thì game báo **Lệnh không rõ hoặc chưa hoàn thành**.

## Trên Coco Cobblemon

Người chơi dùng lệnh riêng của server như `/menu`, `/sethome`, `/rtp`, `/claim`, `/gts`, `/nghenghiep`, `/xephang`, `/battletower`. Danh sách đủ ở [Hướng dẫn người mới](/huong-dan-nguoi-moi/). Các lệnh Cobblemon cần quyền ở bảng trên thì chỉ dùng được khi chủ server cấp.

## Hỏi nhanh

### Lệnh triệu hồi Pokémon là gì?

`/pokespawn <tên Pokémon>`, ví dụ `/pokespawn pikachu`. Thêm `shiny=yes` để ra Shiny, `level=50` để chọn cấp. Phải có quyền lệnh.

### Lệnh cho Pokémon là gì?

`/pokegive <tên Pokémon>`, ví dụ `/pokegive charizard level=50`. Cũng phải có quyền lệnh.

### Gõ lệnh báo "Lệnh không rõ" là sao?

Bạn chưa có quyền lệnh, các lệnh này cần cấp quyền 2. Chơi một mình thì bật Cho phép sử dụng lệnh, hoặc Mở cho mạng LAN rồi bật Cho phép gian lận. Trên server thì chỉ chủ server cấp được.

**Xem thêm:** [Công thức chế tạo Cobblemon](/cong-thuc-cobblemon/) · [Các phím chơi Cobblemon](/phim-tat-cobblemon/) · [Cobblemon là gì](/cobblemon-la-gi/) · [Cách tải Cobblemon](/cach-tai-cobblemon/) · [Hướng dẫn người mới](/huong-dan-nguoi-moi/)

*Cập nhật: 12/11/2026.*
