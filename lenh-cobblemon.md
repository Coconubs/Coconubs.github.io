---
title: Lệnh Cobblemon
seo_title: "Lệnh Cobblemon: triệu hồi, cho Pokémon, hồi máu (/pokespawn, /pokegive)"
description: "Lệnh của Cobblemon 1.7.3: /pokespawn triệu hồi Pokémon, /pokegive cho Pokémon, /pokeheal hồi máu, /pc mở PC. Cần quyền lệnh. Thuộc tính shiny, level."
nav_order: 8.6
last_modified_at: 2026-11-11T04:40:14+07:00
---

# Lệnh Cobblemon

Hầu hết lệnh của Cobblemon 1.7.3 cần quyền dùng lệnh gian lận (cấp quyền 2, như lệnh `/give` của Minecraft): trong thế giới chơi một mình phải bật **Cho phép sử dụng lệnh**, trên server thì chỉ dùng được khi chủ server cấp quyền. Lệnh hay dùng nhất: `/pokespawn` triệu hồi Pokémon, `/pokegive` cho Pokémon, `/pokeheal` hồi máu đội hình, `/pc` mở PC ở bất kỳ đâu. Ví dụ triệu hồi Pikachu Shiny cấp 50: `/pokespawn pikachu shiny=yes level=50`.
{: .fs-5 .fw-300 }

## Bảng lệnh hay dùng

| Lệnh | Tên khác | Dùng để | Quyền cần |
|---|---|---|---|
| `/pokespawn <Pokémon>` | `/spawnpokemon` | Triệu hồi Pokémon hoang dã ngay chỗ bạn đứng | Cấp 2 |
| `/pokegive <Pokémon>` | `/givepokemon` | Cho bạn 1 Pokémon | Cấp 2 |
| `/pokeheal` | `/healpokemon` | Hồi máu đội hình | Cấp 2 |
| `/pc` | | Mở PC ở bất kỳ đâu | Cấp 2 |
| `/openstarterscreen <người chơi>` | | Mở màn chọn Pokémon khởi đầu cho người chưa chọn | Cấp 2 |
| `/spawnallpokemon`, `/giveallpokemon` | | Triệu hồi hoặc cho mọi loài | Cấp 4 (toàn quyền) |

Tên lệnh và cấp quyền đọc từ file `Cobblemon-fabric-1.7.3+1.21.1.jar` (lớp lệnh và bảng quyền `CobblemonPermissions`), kiểm ngày 11/11/2026. Cấp 2 là mức "lệnh gian lận và khối lệnh" của Minecraft, cấp 4 là toàn quyền.

## Thêm thuộc tính cho Pokémon

Sau tên Pokémon (tên tiếng Anh viết liền, chữ thường, ví dụ `pikachu`, `charizard`, `mrmime`) có thể thêm thuộc tính dạng `tên=giá trị`:

| Thuộc tính | Ví dụ | Nghĩa |
|---|---|---|
| `level` (hoặc `lvl`) | `level=50` | Cấp |
| `shiny` | `shiny=yes` | Bản Shiny |
| `nature` | `nature=adamant` | Tính cách |
| `ability` | `ability=intimidate` | Đặc tính |
| `gender` | `gender=female` | Giới tính |
| `nickname` | `nickname=Pika` | Biệt danh |

Danh sách khoá thuộc tính đọc từ lớp `PokemonProperties` trong cùng file Cobblemon 1.7.3. Ví dụ: `/pokegive charizard level=100 shiny=yes`.

## Bật quyền dùng lệnh khi chơi một mình

- **Thế giới mới:** khi tạo thế giới, bật **Cho phép sử dụng lệnh** (Allow Commands).
- **Thế giới đã có:** bấm Esc, chọn **Mở cho mạng LAN**, bật **Cho phép gian lận** (Allow Cheats), rồi bắt đầu. Quyền lệnh có tác dụng tới khi thoát thế giới.

Chưa có quyền mà gõ lệnh thì game báo **Lệnh không rõ hoặc chưa hoàn thành**.

## Trên server Coco Cobblemon

Người chơi trên server Coco Cobblemon dùng các lệnh của server như `/menu`, `/sethome`, `/rtp`, `/claim`, `/gts`, `/nghenghiep`, `/xephang`, `/battletower`. Danh sách đủ ở [Hướng dẫn người mới](/huong-dan-nguoi-moi/). Các lệnh Cobblemon cần quyền ở bảng trên chỉ dùng được khi chủ server cấp quyền.

## Hỏi nhanh

### Lệnh triệu hồi Pokémon trong Cobblemon là gì?

`/pokespawn <tên Pokémon>`, ví dụ `/pokespawn pikachu`. Thêm `shiny=yes` để ra Shiny, `level=50` để chọn cấp. Cần quyền dùng lệnh (bật Cho phép sử dụng lệnh khi chơi một mình).

### Lệnh cho Pokémon trong Cobblemon là gì?

`/pokegive <tên Pokémon>`, ví dụ `/pokegive charizard level=50`. Lệnh này cũng cần quyền dùng lệnh.

### Vì sao gõ lệnh Cobblemon báo "Lệnh không rõ"?

Vì chưa có quyền dùng lệnh: các lệnh này cần cấp quyền 2. Chơi một mình thì bật Cho phép sử dụng lệnh, hoặc Mở cho mạng LAN và bật Cho phép gian lận. Trên server thì chỉ chủ server cấp được.

**Xem thêm:** [Các phím chơi Cobblemon](/phim-tat-cobblemon/) · [Cobblemon là gì](/cobblemon-la-gi/) · [Cách tải Cobblemon](/cach-tai-cobblemon/) · [Hướng dẫn người mới](/huong-dan-nguoi-moi/)

*Cập nhật: 11/11/2026.*
