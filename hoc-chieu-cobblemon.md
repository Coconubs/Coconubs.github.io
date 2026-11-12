---
title: Học chiêu Cobblemon
seo_title: "Cách học chiêu cho Pokémon trong Cobblemon: lên cấp, Đổi Đòn, TM"
description: "Cách học chiêu cho Pokémon trong Cobblemon 1.7.3: học chiêu khi lên cấp, đổi chiêu bằng Đổi Đòn trong Tóm Tắt, chiêu tiến hoá, TM trên server Coco Cobblemon."
nav_order: 8.95
alt: /en/cobblemon-moves/
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cách học chiêu cho Pokémon trong Cobblemon",
    "description": "Cách học chiêu cho Pokémon trong Cobblemon 1.7.3: học chiêu khi lên cấp, đổi chiêu bằng Đổi Đòn trong Tóm Tắt, chiêu tiến hoá, TM trên server Coco Cobblemon.",
    "inLanguage": "vi",
    "url": "https://coconubs.github.io/hoc-chieu-cobblemon/",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Bấm M mở Tóm Tắt, chọn Pokémon."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Vào tab Các Đòn."
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
last_modified_at: 2026-11-12T10:00:00+07:00
---

# Cách học chiêu cho Pokémon trong Cobblemon

Pokémon tự học chiêu mới khi lên cấp nếu còn chỗ (tối đa 4 chiêu). Đủ 4 rồi thì mở **Tóm Tắt** (phím M), vào tab **Các Đòn**, chọn chiêu muốn thay và bấm **Đổi Đòn**. Ở đó có mọi chiêu loài đó học theo cấp tới cấp hiện tại, chiêu học lúc tiến hoá và chiêu đã để dành. Cobblemon gốc không có TM, còn Coco Cobblemon có TM nhờ mod TMCraft.
{: .fs-5 .fw-300 }

## Học chiêu khi lên cấp

Mỗi loài có danh sách chiêu theo cấp. Khi Pokémon lên tới cấp học chiêu:

- Chưa đủ 4 chiêu: chiêu mới tự vào ô trống, game báo "**(tên Pokémon) đã học được (tên chiêu).**"
- Đủ 4 chiêu rồi: chiêu mới không tự đè chiêu cũ. Bạn lấy nó lúc nào cũng được bằng **Đổi Đòn**.

(Đọc từ lớp `Pokemon` trong file `Cobblemon-fabric-1.7.3+1.21.1.jar` ngày 11/11/2026: game chỉ thêm chiêu khi bộ chiêu còn chỗ.)

## Đổi chiêu

1. Bấm **M** mở Tóm Tắt, chọn Pokémon.
2. Vào tab **Các Đòn**.
3. Chọn chiêu muốn thay rồi bấm **Đổi Đòn**.
4. Chọn chiêu mới trong danh sách. Muốn bỏ hẳn một chiêu thì dùng **Quên chiêu thức**.

Danh sách Đổi Đòn có 3 nhóm (hàm `getAllAccessibleMoves` của Cobblemon 1.7.3):

| Nhóm | Gồm những chiêu nào |
|---|---|
| Chiêu theo cấp | Mọi chiêu loài đó học khi lên cấp, từ cấp 1 tới cấp hiện tại |
| Chiêu tiến hoá | Chiêu học ngay lúc tiến hoá, ví dụ Eevee thành Sylveon học được Fairy Wind và Disarming Voice |
| Chiêu để dành | Chiêu từng học bằng cách khác (ví dụ TM) lúc bộ chiêu đã đủ 4 |

Nhờ vậy bạn không cần đi tìm Move Reminder để lấy lại chiêu theo cấp đã lỡ bỏ.

## TM

**Cobblemon 1.7.3 gốc không có TM**, trong file mod không có vật phẩm TM nào. Muốn có TM thì server phải cài thêm mod.

**Coco Cobblemon dùng mod TMCraft:**

- Mua TM ở **Shop Tokens** (Menu > Shop > Shop Tokens), giá 40-400 Tokens (theo Hướng dẫn trong game ngày 08/11/2026).
- Rê chuột lên TM để xem từng con trong đội: **ABLE** (học được), **UNABLE** (không học được), **LEARNED** (đã biết rồi).
- Cách dùng: thả Pokémon ra, cầm TM rồi bấm chuột phải vào nó. Mỗi TM dùng được 1 lần.
- Còn chỗ thì chiêu vào bộ chiêu luôn. Đủ 4 rồi thì chiêu vào nhóm để dành, lấy ra bằng **Đổi Đòn**.
- TMCraft còn có vật phẩm dạy chiêu trứng (Egg Move) và chiêu Tutor (Tutor Move).

## Hỏi nhanh

### Đủ 4 chiêu rồi thì học chiêu mới kiểu gì?

Chiêu mới không tự đè chiêu cũ, nhưng luôn nằm sẵn trong Đổi Đòn: bấm M, tab Các Đòn, chọn chiêu muốn thay, bấm Đổi Đòn.

### Cobblemon có TM không?

Bản gốc thì không. Coco Cobblemon có TM của mod TMCraft, mua ở Shop Tokens. Cầm TM bấm chuột phải vào Pokémon là dạy được.

### Có cần Move Reminder không?

Không. Đổi Đòn cho chọn lại mọi chiêu loài đó học theo cấp tới cấp hiện tại.

**Xem thêm:** [Cách tiến hoá Pokémon](/tien-hoa-cobblemon/) · [Cách bắt Pokémon](/cach-bat-pokemon-cobblemon/) · [Các phím chơi Cobblemon](/phim-tat-cobblemon/) · [Tiền tệ, Shop và Chợ GTS](/tinh-nang/kinh-te/) · [Hướng dẫn người mới](/huong-dan-nguoi-moi/)

*Đọc từ file `Cobblemon-fabric-1.7.3+1.21.1.jar` và mod TMCraft 1.4.18 ngày 11/11/2026. Phần Coco Cobblemon theo Hướng dẫn trong game ngày 08/11/2026.*

*Cập nhật: 12/11/2026.*
