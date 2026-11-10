---
title: Cưỡi Pokémon Cobblemon
seo_title: "Cách cưỡi Pokémon trong Cobblemon: Pokémon nào cưỡi được, bay, bơi"
description: "Cách cưỡi Pokémon trong Cobblemon 1.7.3: thả ra, giữ Shift, chuột phải, chọn Lái. 84 loài cưỡi được: 74 trên cạn, 38 bay, 17 bơi. Cưỡi trên Coco Cobblemon."
nav_order: 8.9
last_modified_at: 2026-11-11T05:15:59+07:00
---

# Cách cưỡi Pokémon trong Cobblemon

Cưỡi Pokémon có từ Cobblemon 1.7. Cách cưỡi: thả Pokémon ra bằng phím R, đứng gần, giữ **Shift** và bấm **chuột phải** vào nó để mở vòng tương tác, rồi chọn **Lái** (bản tiếng Anh ghi Ride). Bấm R để xuống. Trong Cobblemon 1.7.3 có 84 loài cưỡi được: 74 loài đi trên cạn, 38 loài bay và 17 loài bơi; nhiều loài đi được hai, ba kiểu.
{: .fs-5 .fw-300 }

## Các bước cưỡi Pokémon

1. Có trong đội hình một Pokémon cưỡi được (danh sách ở dưới).
2. Chọn Pokémon đó bằng mũi tên lên, xuống rồi bấm **R** để thả ra.
3. Đứng gần, giữ **Shift** (phím Đi rón rén) và bấm **chuột phải** vào Pokémon. Vòng tương tác hiện ra.
4. Chọn **Lái**.
5. Đi bằng các phím di chuyển như bình thường. Giữ **Alt trái** để xoay nhìn xung quanh. Bấm **R** để xuống.

Không thấy nút **Lái** thì: loài đó không cưỡi được, Pokémon đang ở trong Pasture (Khối đồng cỏ), hoặc bạn đang trong trận đấu.

## Pokémon nào cưỡi được trong Cobblemon 1.7.3

Đếm ngày 11/11/2026 từ dữ liệu `riding` trong file `Cobblemon-fabric-1.7.3+1.21.1.jar`: loài cưỡi được là loài có kiểu cưỡi và có chỗ ngồi. Tổng 84 loài, 38 loài đi được từ 2 kiểu trở lên.

**Bay được (38 loài):** Aerodactyl, Altaria, Articuno, Blastoise, Braviary, Bronzong, Charizard, Claydol, Corviknight, Dragapult, Dragonite, Drifblim, Dusknoir, Flygon, Forretress, Garchomp, Golurk, Gyarados, Heracross, Ho-Oh, Honchkrow, Hydreigon, Kilowattrel, Klinklang, Latias, Latios, Lugia, Magnezone, Mantine, Metagross, Moltres, Noivern, Salamence, Staraptor, Togekiss, Tropius, Volcarona, Zapdos.

**Bơi được (17 loài):** Blastoise, Dewgong, Dhelmise, Dondozo, Dragapult, Dragonite, Garchomp, Gyarados, Lapras, Lugia, Mantine, Relicanth, Seaking, Sharpedo, Tauros, Wailmer, Wailord.

**Chỉ đi trên cạn (36 loài):** Arcanine, Ariados, Bastiodon, Bouffalant, Camerupt, Crustle, Cyclizar, Darmanitan, Dudunsparce, Espathra, Farigiraf, Gastrodon, Girafarig, Gogoat, Lickilicky, Mamoswine, Mr. Mime, Mudsdale, Orthworm, Parasect, Piloswine, Revavroom, Rhydon, Rhyhorn, Rhyperior, Scolipede, Serperior, Skiddo, Slaking, Sneasler, Tyrantrum, Ursaluna, Ursaring, Venusaur, Wyrdeer, Zebstrika.

Phần lớn loài bay và bơi cũng đi được trên cạn. Legendary cưỡi được trong bản gốc: Articuno, Zapdos, Moltres, Lugia, Ho-Oh, Latias, Latios. Một số loài như Rapidash, Snorlax có số liệu cưỡi trong file nhưng không có chỗ ngồi, nên chưa cưỡi được trong Cobblemon 1.7.3 gốc.

## Kiểu cưỡi và chỗ ngồi

Mỗi loài có kiểu cưỡi riêng, tên kiểu hiện bằng tiếng Anh trong game:

| Môi trường | Kiểu cưỡi (số loài) |
|---|---|
| Trên cạn | Standard (74) |
| Trên không | Bird (21), Hover (8), Jet (7), Rocket (2) |
| Dưới nước | Submarine (7), Dolphin (7), Boat (2) |

Đa số loài có 1 chỗ ngồi. Loài nhiều chỗ chở được thêm người: Wailord 19 chỗ, Dondozo 7, Camerupt 6, Metagross và Crustle 4, Mamoswine và Golurk 3. Trong Pokédex có mục **Ride Stats** (chỉ số cưỡi) và số chỗ ngồi (**Seats**).

## Chỉ số cưỡi và Aprijuice

Pokémon cưỡi được có 5 chỉ số cưỡi: **Speed** (tốc độ), **Accel.** (tăng tốc), **Skill** (độ lái), **Jump** (nhảy) và **Stamina** (thể lực). Cho Pokémon uống **Aprijuice** để tăng chỉ số cưỡi. Theo bảng `apricornStatEffects` trong file mod 1.7.3, màu của Aprijuice quyết định chỉ số tăng, giảm:

| Aprijuice | Tăng | Giảm |
|---|---|---|
| Đỏ (Red) | Accel. +2 | Stamina −1 |
| Xanh dương (Blue) | Skill +2 | Jump −1 |
| Xanh lá (Green) | Jump +2 | Speed −1 |
| Hồng (Pink) | Speed +2 | Accel. −1 |
| Vàng (Yellow) | Stamina +2 | Skill −1 |
| Trắng (White) | không | cả 5 chỉ số −2 |
| Đen (Black) | không | không |

## Cưỡi Pokémon trên server Coco Cobblemon

- **Không tốn thể lực:** server bật Infinite Ride Stamina, cưỡi bao lâu cũng được (cấu hình Cobblemon của server, kiểm ngày 10/11/2026).
- **Đang bay thì không xuống được:** server tắt In-Flight Dismounting, phải hạ xuống đất rồi mới bấm R để xuống.
- **Danh sách hơi khác bản gốc:** server có gói dữ liệu riêng thêm hoặc chỉnh khả năng cưỡi của một số loài, ví dụ Zacian, Zamazenta và Rayquaza cưỡi được trên Coco Cobblemon. Cách chắc nhất: thả Pokémon ra, giữ Shift và bấm chuột phải, có nút **Lái** là cưỡi được.
- **Pokémon quá to hoặc quá nhỏ:** server có mod đổi kích cỡ Pokémon; con có kích cỡ quá lớn hoặc quá nhỏ so với cỡ thường có thể không cưỡi được, game báo khi bạn thử.

## Cưỡi Pokémon trên điện thoại

Cobblemon là mod cho Minecraft Java, không có trên Minecraft PE hay Bedrock (gói "Cobblemon PE" là addon của người khác, xem [Cobblemon PE, Bedrock](/cobblemon-pe/)). Trên Android, chơi Coco Cobblemon bằng CocoLauncher Android thì cách cưỡi giống trên máy tính, thao tác bằng các nút điều khiển trên màn hình. Xem [Chơi Cobblemon trên điện thoại](/cobblemon-dien-thoai/).

## Hỏi nhanh

### Cách cưỡi Pokémon trong Cobblemon?

Thả Pokémon ra bằng phím R, giữ Shift và bấm chuột phải vào nó, chọn **Lái**. Bấm R để xuống. Cưỡi được từ Cobblemon 1.7.

### Pokémon nào cưỡi được trong Cobblemon?

Cobblemon 1.7.3 có 84 loài cưỡi được, ví dụ Charizard, Dragonite, Gyarados, Lapras, Wailord, Arcanine, Mudsdale, Garchomp, Salamence, Togekiss. Danh sách đủ ở trên. Server có gói dữ liệu riêng có thể thêm loài khác.

### Cách cưỡi Pokémon bay trong Cobblemon?

Pokémon bay như Charizard, Dragonite, Salamence, Corviknight cưỡi giống mọi loài: giữ Shift, bấm chuột phải, chọn **Lái**. Trên Coco Cobblemon, đang bay không xuống được, hãy hạ xuống đất trước.

### Vì sao không thấy nút Lái?

Loài đó không cưỡi được, Pokémon đang ở trong Pasture, hoặc bạn đang trong trận. Trên Coco Cobblemon, Pokémon có kích cỡ quá lớn hoặc quá nhỏ cũng có thể không cưỡi được.

### Cưỡi Pokémon trên điện thoại được không?

Được trên Android khi chơi Minecraft Java bằng CocoLauncher Android, cách cưỡi giống trên máy tính. Minecraft PE, Bedrock không có Cobblemon.

**Xem thêm:** [Các phím chơi Cobblemon](/phim-tat-cobblemon/) · [Cách tiến hoá Pokémon](/tien-hoa-cobblemon/) · [Cobblemon là gì](/cobblemon-la-gi/) · [Chơi Cobblemon trên điện thoại](/cobblemon-dien-thoai/) · [Hướng dẫn người mới](/huong-dan-nguoi-moi/)

*Số liệu đếm từ file `Cobblemon-fabric-1.7.3+1.21.1.jar` ngày 11/11/2026; phần Coco Cobblemon theo cấu hình server kiểm ngày 10/11/2026. Bản Cobblemon khác hoặc server có gói dữ liệu riêng có thể khác.*

*Cập nhật: 11/11/2026.*
