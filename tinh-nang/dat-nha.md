---
title: Đất, nhà và dịch chuyển
seo_title: "Claim đất, đặt nhà, dịch chuyển: /claim, /sethome, /rtp | Coco Cobblemon"
description: "Giữ đất và nhà trên server Coco Cobblemon: /claim theo chunk, khoá đất riêng /dat khoa, đặt nhà /sethome, /home, /rtp, Waystone, nội thất, luật vùng ngoài ±30.000."
parent: Tính năng
nav_order: 12
permalink: /tinh-nang/dat-nha/
---

# Đất, nhà và dịch chuyển

Trên server Coco Cobblemon, bạn giữ nhà bằng cách claim đất theo chunk, rồi đặt điểm nhà để dịch chuyển về. Đất đã claim thì người ngoài không phá được.
{: .fs-5 .fw-300 }

## Claim đất

- Đất được giữ theo **chunk**: ô 16×16 khối, từ đáy tới nóc thế giới. Bấm F3 + G để hiện đường kẻ chunk.
- Đứng trong chunk muốn giữ rồi gõ `/claim`. Bỏ claim: `/unclaim`.
- Mở bản đồ thế giới (Xaero) để thấy đất đã claim; chuột phải trên bản đồ để claim hoặc bỏ claim nhiều chunk một lúc.
- Mỗi người tối đa 50 chunk (Rank được thêm). Chỉ claim được trong vòng 5 chunk quanh chỗ đứng và chỉ ở Overworld.
- **Ngoài ±30.000 (theo X hoặc Z) không claim được** và không đặt được rương, shulker, balo, Pasture; khu đó reset 2 tuần một lần. Muốn xây lâu dài thì chọn chỗ trong ±30.000.

## Xây chung và khoá đất riêng

- Vào cùng [Bang hội](/tinh-nang/bang-hoi/) là xây được trong đất của nhau; chủ bang chỉnh quyền ở Cài đặt Bang.
- **Khoá đất riêng:** Menu Bang hội, tab ĐẤT, hoặc gõ `/dat khoa`. Khi khoá, chỉ bạn và tối đa 30 người tin cậy dùng được đất của bạn; thành viên bang khác, kể cả chủ bang, bị chặn như người ngoài. Mở lại: `/dat mo`.
- Thêm, bỏ người tin cậy: bấm trong tab ĐẤT hoặc `/dat chophep <tên>`, `/dat bo <tên>` (người ngoài bang cũng được). Người khác vẫn đi ngang qua được, đồ rơi trên đất vẫn nhặt được.

## Nhà và dịch chuyển

| Lệnh | Việc |
|---|---|
| `/sethome`, `/sethome <tên>` | Đặt nhà ở chỗ đang đứng. Mặc định 3 nhà |
| `/home`, `/home <tên>` | Về nhà |
| `/homes`, `/delhome <tên>` | Xem danh sách, xoá nhà |
| `/spawn` | Về spawn |
| `/back` | Quay lại chỗ vừa dịch chuyển hoặc chỗ vừa chết |
| `/warps` | Các điểm dịch chuyển của server (hoặc Menu, Dịch chuyển) |
| `/tpa <tên>`, `/tpaccept` | Xin dịch chuyển tới bạn, người kia chấp nhận |
| `/rtp` | Tới chỗ ngẫu nhiên xa 5.000-25.000 khối, không rơi xuống biển, sông. Dùng lại sau 60 giây |

Waystone: chuột phải để kích hoạt, rồi dịch chuyển giữa các Waystone đã mở. Ưng chỗ nào sau `/rtp` thì `/sethome` ngay.

## Xây nhà và nội thất

- Trước khi xây: chọn chỗ trong ±30.000, `/claim` đất trước rồi `/sethome`.
- Nội thất có sẵn trong gói mod: Handcrafted, Cozy Home, CobbleFurnies, Beautify, Comforts (bàn ghế, giường, đèn, kệ, đồ trang trí kiểu Pokémon).
- Tra công thức bằng REI: rê chuột lên vật phẩm, bấm R để xem cách làm, U để xem dùng làm gì.
- Đặt Pasture trong nhà cho Pokémon đi lại và [breeding](/tinh-nang/breeding/). Nhà trong đất bang breed nhanh hơn theo cấp bang.
- Mạch redstone chạy liên tục khoảng 30 phút sẽ bị tự gỡ 1 khối, có cảnh báo trước.

## Hỏi nhanh

**Làm sao để không ai phá nhà?**
`/claim` các chunk quanh nhà. Muốn cả thành viên bang khác cũng không vào được thì dùng `/dat khoa`.

**Xây ở đâu cho an toàn?**
Trong ±30.000 theo X và Z. Ngoài vùng này không claim được, không đặt được rương, balo, Pasture, và reset 2 tuần một lần.

*Nội dung lấy từ Hướng dẫn trong game ngày 07/11/2026. Con số có thể đổi theo cập nhật, Menu trong game luôn là bản đúng nhất.*
