---
title: Học chiêu Cobblemon
seo_title: "Cách học chiêu cho Pokémon trong Cobblemon: lên cấp, Đổi Đòn, TM"
description: "Cách học chiêu cho Pokémon trong Cobblemon 1.7.3: chiêu học khi lên cấp, đổi chiêu bằng Đổi Đòn trong Tóm Tắt, chiêu tiến hoá, TM trên server Coco Cobblemon."
nav_order: 8.95
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cách học chiêu cho Pokémon trong Cobblemon",
    "description": "Cách học chiêu cho Pokémon trong Cobblemon 1.7.3: chiêu học khi lên cấp, đổi chiêu bằng Đổi Đòn trong Tóm Tắt, chiêu tiến hoá, TM trên server Coco Cobblemon.",
    "inLanguage": "vi",
    "url": "https://coconubs.github.io/hoc-chieu-cobblemon/",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Bấm M để mở Tóm Tắt và chọn Pokémon."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Mở tab Các Đòn."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Chọn chiêu muốn thay rồi bấm Đổi Đòn."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Chọn chiêu mới trong danh sách. Muốn bỏ hẳn một chiêu thì dùng Quên chiêu thức."
      }
    ]
  }
last_modified_at: 2026-11-11T05:44:07+07:00
---

# Cách học chiêu cho Pokémon trong Cobblemon

Trong Cobblemon 1.7.3, Pokémon tự học chiêu mới khi lên cấp nếu còn chỗ (tối đa 4 chiêu). Đã đủ 4 chiêu thì mở **Tóm Tắt** (phím M), vào tab **Các Đòn**, chọn chiêu muốn thay và bấm **Đổi Đòn**: danh sách có mọi chiêu loài đó học được khi lên cấp tới cấp hiện tại, chiêu học lúc tiến hoá và các chiêu đã để dành. Cobblemon gốc không có TM; trên server Coco Cobblemon có TM nhờ mod TMCraft.
{: .fs-5 .fw-300 }

## Học chiêu khi lên cấp

Mỗi loài có danh sách chiêu theo cấp. Khi Pokémon lên tới cấp học một chiêu:

- Còn ít hơn 4 chiêu: chiêu mới tự vào ô trống, game báo "**(tên Pokémon) đã học được (tên chiêu).**"
- Đã đủ 4 chiêu: chiêu mới không tự thay chiêu cũ. Chiêu đó vẫn chọn được bất cứ lúc nào bằng **Đổi Đòn**.

Đọc từ lớp `Pokemon` trong file `Cobblemon-fabric-1.7.3+1.21.1.jar` (hàm cộng kinh nghiệm chỉ thêm chiêu khi bộ chiêu còn chỗ), ngày 11/11/2026.

## Các bước đổi chiêu

1. Bấm **M** để mở Tóm Tắt và chọn Pokémon.
2. Mở tab **Các Đòn**.
3. Chọn chiêu muốn thay rồi bấm **Đổi Đòn**.
4. Chọn chiêu mới trong danh sách. Muốn bỏ hẳn một chiêu thì dùng **Quên chiêu thức**.

Danh sách Đổi Đòn gồm 3 nhóm (hàm `getAllAccessibleMoves` của Cobblemon 1.7.3):

| Nhóm | Gồm những chiêu nào |
|---|---|
| Chiêu theo cấp | Mọi chiêu loài đó học khi lên cấp, từ cấp 1 tới cấp hiện tại |
| Chiêu tiến hoá | Chiêu học ngay lúc tiến hoá, ví dụ Eevee thành Sylveon học được Fairy Wind và Disarming Voice |
| Chiêu để dành | Chiêu từng học bằng cách khác (ví dụ TM) lúc bộ chiêu đã đủ 4 |

Vì vậy trong Cobblemon không cần đi tìm người nhắc chiêu (Move Reminder) để lấy lại chiêu theo cấp đã bỏ qua.

## TM trong Cobblemon

**Cobblemon 1.7.3 gốc không có TM:** file mod không có vật phẩm TM nào. Muốn dùng TM thì server phải cài thêm mod.

**Server Coco Cobblemon dùng mod TMCraft:**

- Mua TM ở **Shop Tokens** (Menu > Shop > Shop Tokens); giá 40-400 Tokens theo Hướng dẫn trong game ngày 08/11/2026.
- Rê chuột lên TM để xem từng Pokémon trong đội: **ABLE** (học được), **UNABLE** (không học được), **LEARNED** (đã biết chiêu này).
- Cách dùng: thả Pokémon ra, cầm TM trên tay và bấm chuột phải vào Pokémon của bạn. Mỗi TM dùng 1 lần.
- Pokémon còn chỗ thì chiêu vào bộ chiêu ngay; đã đủ 4 chiêu thì chiêu vào nhóm để dành, đổi vào bằng **Đổi Đòn**.
- TMCraft còn có vật phẩm dạy chiêu trứng (Egg Move) và chiêu Tutor (Tutor Move).

## Hỏi nhanh

### Cách học chiêu cho Pokémon trong Cobblemon?

Pokémon tự học chiêu khi lên cấp nếu còn chỗ. Đủ 4 chiêu thì bấm M, vào tab Các Đòn, chọn chiêu muốn thay, bấm Đổi Đòn rồi chọn chiêu mới.

### Pokémon đủ 4 chiêu thì học chiêu mới thế nào?

Chiêu mới theo cấp không tự thay chiêu cũ, nhưng luôn có trong danh sách Đổi Đòn ở Tóm Tắt (phím M), tab Các Đòn.

### Cobblemon có TM không?

Cobblemon 1.7.3 gốc thì không. Trên Coco Cobblemon có TM của mod TMCraft, mua ở Shop Tokens; cầm TM bấm chuột phải vào Pokémon để dạy.

### Có cần Move Reminder để nhớ lại chiêu không?

Không. Đổi Đòn trong Tóm Tắt cho chọn lại mọi chiêu loài đó học khi lên cấp tới cấp hiện tại.

**Xem thêm:** [Cách tiến hoá Pokémon](/tien-hoa-cobblemon/) · [Cách bắt Pokémon](/cach-bat-pokemon-cobblemon/) · [Các phím chơi Cobblemon](/phim-tat-cobblemon/) · [Tiền tệ, Shop và Chợ GTS](/tinh-nang/kinh-te/) · [Hướng dẫn người mới](/huong-dan-nguoi-moi/)

*Đọc từ file `Cobblemon-fabric-1.7.3+1.21.1.jar` và mod TMCraft 1.4.18 ngày 11/11/2026; phần Coco Cobblemon theo Hướng dẫn trong game ngày 08/11/2026.*

*Cập nhật: 11/11/2026.*
