---
title: Bang hội
seo_title: "Bang Hội Chiến, Boss Bang, Quà Bang: luật bang hội | Coco Cobblemon"
description: "Bang hội trên server Coco Cobblemon: tạo bang, Bang Hội Chiến mỗi ngày từ 9h tới 22h cướp Cờ Chiến, Boss Bang mỗi ngày, Quà Bang, Hào quang Bang, khoá đất riêng."
parent: Tính năng
nav_order: 3
permalink: /tinh-nang/bang-hoi/
last_modified_at: 2026-11-14T19:30:00+07:00
---

# Bang hội

Bang hội trên server chính là Party của Open Parties and Claims. Tạo bang bằng `/oparties create`, mời người bằng `/oparties member invite <tên>`. Các lệnh của bang: `/banghoi` (info, gop, nangcap, top), `/bangchien`, `/bossbang`.
{: .fs-5 .fw-300 }

- **Nâng cấp bang:** có 5 cấp, nâng bằng GP, tiền và Quỹ Tokens. Cấp càng cao càng mở thêm công thức chế tạo và quyền lợi.
- **Hào quang Bang:** bang có từ 3 người online thì ai đang online cũng được +10% EXP trận đấu và +10% tỉ lệ bắt.
- **Chat bang:** `/banghoi chat` để bật hoặc tắt chat bang.
- **Quản lý bang bằng lệnh** (từ 07/11/2026): `/banghoi leave` rời bang, `disband` giải tán, `transfer <tên>` chuyển chủ bang, `promote`/`demote` phong hoặc bỏ phó bang, `join` vào bang. Gõ tiếng Việt cũng được: `roi`, `giaitan`, `chuyenchu`, `phongpho`, `bopho`, `vao`. Quên thì gõ `/banghoi help`.
- **Phòng voice Discord:** khi bang có người online, bot tự mở một phòng voice riêng cho bang.

## Bang Hội Chiến
{: #bang-hoi-chien }

Mỗi bang treo **Cờ Chiến** rồi khiêu chiến bang khác để cướp cờ. Đến 22h, bang nào giữ nhiều cờ nhất là **Bá chủ** của ngày hôm đó.

| Mục | Luật |
|---|---|
| Thời gian | Mỗi ngày, cả Thứ 7 và Chủ Nhật, 9h-22h (giờ Việt Nam), tổng kết lúc 22h, cờ reset mỗi ngày |
| Bang | Từ 1 thành viên trở lên (tính cả Bang chủ) là treo cờ được |
| Người ra trận | Đang online, vào bang đủ 24 giờ, có từ 4 Pokémon trong party |
| Thể thức | Hai bên xem 6 Pokémon của nhau, có 5 phút để chọn 4, đánh Đấu Đôi 4v4, mọi con về Lv 50 (bản sao) |

**Cách chơi**

1. Mở `/bangchien`, kích hoạt Cờ Chiến.
2. Chọn một bang đang treo cờ, chọn người ra trận rồi gửi lời khiêu chiến.
3. Bang bị khiêu chiến có 5 phút để đồng ý và cử người. Từ chối hoặc để hết giờ là thua.

**Thắng, thua**

- Thắng thì cướp hết cờ của bên kia và có khiên miễn nhiễm 5 phút.
- Thua thì mất hết cờ nhưng không bị loại, 1 giờ sau được treo cờ lại.
- Trận hỏng vì lỗi máy chủ (kick, timeout, tắt server) bị huỷ, không bên nào mất cờ.
- Lập bang phụ rồi cố tình thua để nuôi cờ sẽ bị loại.

**Thưởng mỗi giờ tròn (10h tới 22h):** bang nào đang treo cờ thì mỗi thành viên online nhận 1.000$ và 10 Tokens, 6 Pokémon trong party được +200 EXP. Cứ mỗi cờ cướp được, thưởng tăng thêm 50%.

**Tổng kết 22h:** nếu nhiều bang bằng cờ nhau thì đấu loại trực tiếp cho tới khi còn 1 bang. Thành viên bang Bá chủ (vào bang đủ 24 giờ) nhận chìa khoá Crate Shiny, chìa khoá Crate Tỷ Phú, 1.000 Tokens và 5 Trứng. Bot báo kết quả lên Discord.

**Bị cấm trong trận:** Shedinja; các chiêu Fissure, Guillotine, Horn Drill, Sheer Cold, Destiny Bond; các ability Wonder Guard, Battle Armor, Battle Bond; Dynamax và Z-Move (Mega vẫn dùng được).

## Boss Bang
{: #boss-bang }

- 0:00 mỗi ngày có 1 boss mới, bang nào cũng đánh được và mỗi bang có thanh máu riêng. Mở bằng `/bossbang`.
- Thứ 2 tới Thứ 6 là Pseudo, Paradox, Ultra Beast. Thứ 7 và Chủ Nhật là Legendary. Boss Lv 100, có khiên và buff giống Raid Thế Giới.
- Máu boss tăng theo số thành viên của bang: mỗi thành viên thêm 250 (Pseudo), 300 (Paradox), 500 (Ultra Beast) hoặc 750 (Huyền Thoại).
- Mỗi người có 3 lượt một ngày, đánh bằng đội đang mang. Phải vào bang đủ 24 giờ mới được đánh.
- Thưởng theo top sát thương trong bang. Top 1 được 100 Tokens, 25.000$, 1 Tinh Thể Shiny, 1 Trứng Quý và có cơ hội nhận Mảnh loài boss. Bang hạ được boss thì cả bang có thêm quà.
- **Kho Mảnh:** gom đủ 3 (Pseudo), 5 (Paradox, UB) hoặc 10 (Huyền Thoại) mảnh cùng loài thì Bang chủ đổi được 1 con Lv 50.

## Quà Bang
{: #qua-bang }

Khi một người trong bang làm được việc lớn, những người còn lại nhận 1 hộp quà:

| Việc | Quà cho các thành viên khác |
|---|---|
| Bắt, nở hoặc dung hợp ra Shiny | 5.000$ + 25 Tokens |
| Bắt Legendary, Mythical, UB, Paradox | 5.000$ + 50 Tokens |
| Lần đầu vượt mỗi mốc 50 tầng BattleTower | 1.000$ |
| Bang lên cấp | 10.000$ + 50 Tokens + Chìa Raid + Chìa Tỷ Phú + Trứng Quý |
| Hạ Boss Bang | 2.500$ + 50 Tokens |

Phải vào bang đủ 24 giờ mới nhận, tối đa 15 hộp một ngày. Đang offline thì quà được giữ 72 giờ.

## Hỏi nhanh

### Tạo bang hội thế nào?

Gõ `/oparties create`, rồi mời bạn bè bằng `/oparties member invite <tên>`.

### Bang Hội Chiến diễn ra lúc nào?

Mỗi ngày, cả Thứ 7 và Chủ Nhật, từ 9h đến 22h giờ Việt Nam. Bang chỉ có 1 người cũng treo cờ được.

### Thua Bang Hội Chiến có bị loại không?

Không, chỉ mất cờ. Chờ 1 giờ là treo cờ lại được.

### Mỗi ngày đánh Boss Bang được mấy lần?

3 lượt mỗi người, boss đổi lúc 0:00. Người mới vào bang phải chờ đủ 24 giờ.

**Xem thêm:** [Claim đất và khoá đất riêng](/tinh-nang/dat-nha/) · [Breeding nhanh hơn trong đất bang](/tinh-nang/breeding/) · [Legendary tích luỹ](/tinh-nang/legendary/) · [Raid Thế Giới](/tinh-nang/raid/)

*Nội dung lấy từ Hướng dẫn trong game ngày 06/11/2026.*
