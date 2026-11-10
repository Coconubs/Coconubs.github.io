---
title: Bang hội
seo_title: "Bang Hội Chiến, Boss Bang, Quà Bang: luật bang hội | Coco Cobblemon"
description: "Bang hội trên server Coco Cobblemon: tạo bang, Bang Hội Chiến Thứ 2-6 từ 9h tới 22h cướp Cờ Chiến, Boss Bang mỗi ngày, Quà Bang, Hào quang Bang, khoá đất riêng."
parent: Tính năng
nav_order: 3
permalink: /tinh-nang/bang-hoi/
last_modified_at: 2026-11-07T20:48:46+07:00
---

# Bang hội

Bang hội dùng Party của Open Parties and Claims. Tạo bang: `/oparties create`. Mời: `/oparties member invite <tên>`. Lệnh bang: `/banghoi` (info, gop, nangcap, top), `/bangchien`, `/bossbang`.
{: .fs-5 .fw-300 }

- **Nâng cấp bang** (5 cấp) bằng GP, tiền và Quỹ Tokens. Cấp càng cao mở thêm công thức chế tạo và quyền lợi.
- **Hào quang Bang:** bang có từ 3 thành viên online thì mọi thành viên online được +10% EXP trận đấu và +10% tỉ lệ bắt.
- **Chat bang:** `/banghoi chat` bật, tắt chế độ chat bang.
- **Quản lý bang bằng lệnh** (từ 07/11/2026): `/banghoi leave` rời bang, `disband` giải tán, `transfer <tên>` chuyển chủ bang, `promote`, `demote` phong, bỏ phó bang, `join` vào bang. Tên tiếng Việt: `roi`, `giaitan`, `chuyenchu`, `phongpho`, `bopho`, `vao`. Gõ `/banghoi help` để xem cách dùng.
- **Phòng voice Discord:** khi có thành viên online, bot tự tạo phòng voice riêng cho bang.

## Bang Hội Chiến
{: #bang-hoi-chien }

Các bang treo **Cờ Chiến** rồi khiêu chiến nhau để cướp cờ. Tới 22h, bang giữ nhiều cờ nhất là **Bá chủ** hôm nay.

| | |
|---|---|
| Thời gian | Thứ 2 tới Thứ 6, 9h-22h (giờ Việt Nam), tổng kết lúc 22h, cờ reset mỗi ngày |
| Bang | Ít nhất 2 thành viên, tính cả Bang chủ |
| Người ra trận | Đang online, vào bang từ 24 giờ, có từ 4 Pokémon trong party |
| Thể thức | Hai bên xem 6 Pokémon của nhau, chọn 4 trong 5 phút, Đấu Đôi 4v4, mọi con về Lv 50 (bản sao) |

**Cách chơi**

1. Mở `/bangchien`, kích hoạt Cờ Chiến.
2. Chọn một bang đang treo cờ, chọn người ra trận, gửi khiêu chiến.
3. Bên bị khiêu chiến có 5 phút để đồng ý và cử người. Từ chối hoặc hết giờ tính là thua.

**Thắng, thua**

- Thắng: cướp toàn bộ cờ của đối thủ và có khiên miễn nhiễm 5 phút.
- Thua: mất hết cờ, nhưng không bị loại, được treo cờ lại sau 1 giờ.
- Trận lỗi do máy chủ (kick, timeout, tắt server) bị huỷ, không ai mất cờ.
- Bang phụ cố tình thua để nuôi cờ sẽ bị loại.

**Thưởng mỗi giờ tròn (10h tới 22h):** mỗi thành viên online của bang đang treo cờ nhận 1.000$ và 10 Tokens, 6 Pokémon trong party +200 EXP. Mỗi cờ cướp được +50% thưởng.

**Tổng kết 22h:** nhiều bang bằng cờ nhau thì đấu loại trực tiếp tới khi còn 1. Thành viên bang Bá chủ (vào bang từ 24 giờ) nhận Key Crate Shiny, Key Crate Tỷ Phú, 1.000 Tokens và 5 Trứng. Kết quả được bot báo lên Discord.

**Luật cấm trong trận:** Shedinja; chiêu Fissure, Guillotine, Horn Drill, Sheer Cold, Destiny Bond; đặc tính Wonder Guard, Battle Armor, Battle Bond; không Dynamax và Z-Move (Mega vẫn được).

## Boss Bang
{: #boss-bang }

- Mỗi ngày 0:00 có 1 boss mới cho mọi bang, mỗi bang có thanh máu riêng. Mở bằng `/bossbang`.
- Thứ 2 tới Thứ 6: Pseudo, Paradox, Ultra Beast. Thứ 7, Chủ Nhật: Legendary. Boss Lv 100, có khiên và buff như Raid Thế Giới.
- Máu boss tính theo số thành viên bang: Pseudo 250, Paradox 300, Ultra Beast 500, Huyền Thoại 750 mỗi thành viên.
- Mỗi người 3 lượt mỗi ngày, đánh bằng đội hiện tại, vào bang từ 24 giờ mới được đánh.
- Thưởng theo top sát thương trong bang: Top 1 được 100 Tokens, 25.000$, 1 Tinh Thể Shiny, 1 Trứng Quý và có tỉ lệ nhận Mảnh loài boss. Bang hạ được boss thì cả bang nhận thêm quà.
- **Kho Mảnh:** đủ 3 (Pseudo), 5 (Paradox, UB) hoặc 10 (Huyền Thoại) mảnh cùng loài thì Bang chủ đổi được 1 con Lv 50.

## Quà Bang
{: #qua-bang }

Khi 1 thành viên làm được việc lớn, các thành viên còn lại nhận 1 hộp quà:

| Việc | Quà cho các thành viên khác |
|---|---|
| Bắt, nở hoặc dung hợp Shiny | 20.000$ + 50 Tokens |
| Bắt Legendary, Mythical, UB, Paradox | 10.000$ + 75 Tokens |
| Lần đầu vượt mỗi mốc 50 tầng BattleTower | 5.000$ |
| Bang lên cấp | 25.000$ + 50 Tokens + Chìa Raid + Chìa Tỷ Phú + Trứng Quý |
| Hạ Boss Bang | 25.000$ + 100 Tokens |

Điều kiện: vào bang từ 24 giờ, tối đa 15 hộp mỗi ngày. Offline thì quà giữ 72 giờ.

*Nội dung lấy từ Hướng dẫn trong game ngày 06/11/2026.*
