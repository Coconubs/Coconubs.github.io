---
title: Đất, nhà và dịch chuyển
seo_title: "Claim đất, đặt nhà, dịch chuyển: /claim, /sethome, /rtp | Coco Cobblemon"
description: "Giữ đất và nhà trên server Coco Cobblemon: /claim theo chunk, khoá đất riêng /dat khoa, đặt nhà /sethome, /home, /rtp, Waystone, nội thất, luật vùng ngoài ±30.000."
parent: Tính năng
nav_order: 12
permalink: /tinh-nang/dat-nha/
last_modified_at: 2026-11-12T10:00:00+07:00
---

# Đất, nhà và dịch chuyển

Muốn giữ nhà thì claim đất theo chunk, rồi đặt điểm nhà để lúc nào cũng dịch chuyển về được. Đất đã claim thì người ngoài không phá được.
{: .fs-5 .fw-300 }

## Claim đất

- Đất giữ theo **chunk**: mỗi ô 16×16 khối, tính từ đáy lên tới nóc thế giới. Bấm F3 + G để hiện đường kẻ chunk.
- Đứng trong chunk muốn giữ rồi gõ `/claim`. Bỏ claim thì gõ `/unclaim`.
- Mở bản đồ thế giới (Xaero) để xem đất đã claim. Chuột phải trên bản đồ để claim hoặc bỏ claim nhiều chunk một lúc.
- Mỗi người được tối đa 50 chunk (có Rank thì thêm). Chỉ claim được trong vòng 5 chunk quanh chỗ đang đứng, và chỉ ở Overworld.
- **Ra ngoài ±30.000 (theo X hoặc Z) là không claim được**, cũng không đặt được rương, shulker, balo, Pasture. Khu đó 2 tuần reset một lần. Muốn xây lâu dài thì chọn chỗ trong ±30.000.

## Xây chung và khoá đất riêng

- Cùng [Bang hội](/tinh-nang/bang-hoi/) thì xây được trong đất của nhau. Chủ bang chỉnh quyền trong Cài đặt Bang.
- **Khoá đất riêng:** vào Menu Bang hội, tab ĐẤT, hoặc gõ `/dat khoa`. Khoá rồi thì chỉ bạn và tối đa 30 người tin cậy dùng được đất. Thành viên bang khác, kể cả chủ bang, cũng bị chặn như người ngoài. Mở lại bằng `/dat mo`.
- Thêm hoặc bỏ người tin cậy: bấm trong tab ĐẤT, hoặc gõ `/dat chophep <tên>`, `/dat bo <tên>` (thêm được cả người ngoài bang). Người khác vẫn đi ngang qua và vẫn nhặt được đồ rơi trên đất.

## Nhà và dịch chuyển

| Lệnh | Việc |
|---|---|
| `/sethome`, `/sethome <tên>` | Đặt nhà ở chỗ đang đứng. Mặc định được 3 nhà |
| `/home`, `/home <tên>` | Về nhà |
| `/homes`, `/delhome <tên>` | Xem danh sách nhà, xoá nhà |
| `/spawn` | Về spawn |
| `/back` | Quay lại chỗ vừa dịch chuyển đi hoặc chỗ vừa chết |
| `/warps` | Các điểm dịch chuyển của server (hoặc Menu, Dịch chuyển) |
| `/tpa <tên>`, `/tpaccept` | Xin dịch chuyển tới chỗ bạn bè, người kia chấp nhận |
| `/rtp` | Tới một chỗ ngẫu nhiên cách 5.000-25.000 khối, không rơi xuống biển hay sông. 60 giây mới dùng lại được |

Waystone: chuột phải để kích hoạt, sau đó dịch chuyển qua lại giữa các Waystone đã mở. `/rtp` ra chỗ nào ưng thì `/sethome` luôn.

## Xây nhà và nội thất

- Trước khi xây: chọn chỗ trong ±30.000, `/claim` đất rồi `/sethome`.
- Gói mod có sẵn đồ nội thất: Handcrafted, Cozy Home, CobbleFurnies, Beautify, Comforts (bàn ghế, giường, đèn, kệ, đồ trang trí kiểu Pokémon).
- Xem công thức bằng REI: rê chuột lên vật phẩm, bấm R để xem cách làm, bấm U để xem nó dùng làm gì.
- Đặt Pasture trong nhà cho Pokémon đi lại và để [breeding](/tinh-nang/breeding/). Nhà nằm trong đất bang thì breed nhanh hơn theo cấp bang.
- Mạch redstone chạy liên tục khoảng 30 phút sẽ bị tự gỡ 1 khối, có cảnh báo trước.

## Hỏi nhanh

### Làm sao để không ai phá nhà?

`/claim` hết các chunk quanh nhà. Muốn chặn luôn cả người trong bang thì `/dat khoa`.

### Nên xây ở đâu?

Trong ±30.000 theo cả X và Z. Ra ngoài thì không claim được, và khu đó 2 tuần reset một lần.

**Xem thêm:** [Hướng dẫn người mới](/huong-dan-nguoi-moi/) · [Tiền tệ, Shop và Chợ GTS](/tinh-nang/kinh-te/) · [Hỏi đáp](/hoi-dap/)

*Nội dung lấy từ Hướng dẫn trong game ngày 07/11/2026. Con số có thể đổi theo cập nhật, Menu trong game luôn là bản đúng nhất.*
