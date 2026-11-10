---
title: Cách tải Cobblemon
seo_title: "Cách tải và cài Cobblemon cho Minecraft Java: Modrinth App, Fabric"
description: "Cách tải và cài Cobblemon cho Minecraft Java 1.21.1: bằng Modrinth App, cài file mod với Fabric, hoặc vào server người Việt bằng CocoLauncher. Cần gì, bản nào, lỗi hay gặp."
nav_order: 8
last_modified_at: 2026-11-11T02:40:00+07:00
---

# Cách tải Cobblemon cho Minecraft Java

Cobblemon là mod Pokémon cho Minecraft **Java Edition**. Cách dễ nhất để tải Cobblemon là cài **Cobblemon Official Modpack** bằng Modrinth App: app tự tải đúng Minecraft, Fabric và mod. Muốn vào server người Việt Coco Cobblemon thì dùng CocoLauncher. Cobblemon không có bản cho Minecraft Bedrock hay PE.
{: .fs-5 .fw-300 }

## Chọn cách tải

| Cách | Hợp với | Vào được Coco Cobblemon? |
|---|---|---|
| [Modrinth App + Cobblemon Official Modpack](#cach-1) | Người mới chơi một mình, bản gốc | Không, khác phiên bản |
| [Tự cài file mod với Fabric](#cach-2) | Người muốn tự chọn mod | Không, thiếu bộ mod của server |
| [CocoLauncher](#cach-3) | Người muốn vào server người Việt | Có, launcher tự cài đúng bộ mod |

## Cần gì trước khi tải

| | |
|---|---|
| **Game** | Minecraft: Java Edition trên Windows, macOS hoặc Linux |
| **Phiên bản** | Cobblemon 1.7 và 1.8 chạy trên Minecraft 1.21.1. Bản cũ hơn có cho 1.20.1 và 1.19.2 |
| **Bộ nạp mod** | Fabric (Fabric Loader và Fabric API). Cobblemon cũng có bản NeoForge, nhưng bản Fabric và bản NeoForge không dùng lẫn được |
| **Java** | Minecraft 1.21.1 cần Java 21. Modrinth App, Minecraft Launcher và CocoLauncher tự kèm Java |
| **RAM** | Máy nên có từ 8 GB RAM. Cấp RAM cho game trong cài đặt launcher, không quá nửa RAM của máy |

Bản mới nhất ngày 11/11/2026 trên [trang Cobblemon ở Modrinth](https://modrinth.com/mod/cobblemon) là **1.8.4F** cho Fabric, ra ngày 27/10/2026, chạy trên Minecraft 1.21.1. Server Coco Cobblemon dùng **1.7.3**. Bản mới hơn có thể đã ra, hãy xem trang Modrinth trước khi tải.

## Cách 1: Modrinth App và Cobblemon Official Modpack
{: #cach-1 }

Modrinth App là launcher không mất phí, có bản Windows, macOS và Linux. Cobblemon Official Modpack là gói do chính nhóm Cobblemon làm, gồm Cobblemon và các mod cần thiết.

1. Tải và cài [Modrinth App](https://modrinth.com/app).
2. Mở app, đăng nhập tài khoản Microsoft có Minecraft: Java Edition (Modrinth App cần tài khoản này để chạy game).
3. Vào mục tìm nội dung, chọn loại **Modpacks**, gõ "Cobblemon".
4. Chọn **Cobblemon Official Modpack [Fabric]**, bấm **Install**. App tự tải Minecraft 1.21.1, Fabric, Java và mod.
5. Cài xong, bản cài hiện trong thư viện của app. Bấm **Play**.
6. Game chậm hoặc văng thì vào cài đặt của bản cài để tăng RAM.

Modpack chính thức hợp để chơi một mình hoặc vào server dùng đúng bản này. Nó không vào được Coco Cobblemon: lý do ở [Launcher nào để chơi Cobblemon](/launcher-cobblemon/).

## Cách 2: tự cài file mod với Fabric
{: #cach-2 }

Dành cho người muốn tự chọn mod hoặc dùng Minecraft Launcher chính thức.

1. Tải **Fabric Installer** ở trang [fabricmc.net](https://fabricmc.net/use/installer/), chọn Minecraft **1.21.1**, bấm Install. Minecraft Launcher sẽ có thêm bản cài tên `fabric-loader-1.21.1`.
2. Ở [Modrinth](https://modrinth.com/mod/cobblemon), tải file Cobblemon cho **Fabric 1.21.1** (tên file dạng `Cobblemon-fabric-...+1.21.1.jar`).
3. Tải [Fabric API](https://modrinth.com/mod/fabric-api) cho 1.21.1.
4. Chép cả 2 file .jar vào thư mục `mods`:
   - Windows: gõ `%appdata%\.minecraft` vào thanh địa chỉ của File Explorer, mở (hoặc tạo) thư mục `mods`.
   - macOS: `~/Library/Application Support/minecraft/mods`.
5. Mở Minecraft Launcher, chọn bản cài `fabric-loader-1.21.1`, bấm Play.

Không cần cài riêng Fabric Language Kotlin: file Cobblemon 1.7.3 cho Fabric đã kèm sẵn thư viện này, và trên Modrinth các bản 1.7 tới 1.8.4F chỉ ghi Fabric API là mod bắt buộc.

## Cách 3: vào server người Việt bằng CocoLauncher
{: #cach-3 }

Coco Cobblemon là server Cobblemon cho cộng đồng người Việt (Minecraft Java 1.21.1, Cobblemon 1.7.3, địa chỉ `coco.ultramc.co`). Server có bộ mod riêng: menu tiếng Việt, Đấu Xếp Hạng, bang hội và nhiều mod khác, nên không vào bằng Cách 1 hay Cách 2 được.

1. Tải [CocoLauncher](/cocolauncher/) cho Windows, macOS, Android hoặc iPhone (Android, iPhone là bản thử nghiệm).
2. Nhập tên trong game, bấm **Chơi**. Launcher tự cài Java, Minecraft, Fabric, Cobblemon 1.7.3 và đúng bộ mod của server, mod tự cập nhật theo server.
3. Vào game, gõ `/menu` để mở Hướng dẫn tiếng Việt.

Chi tiết từng bước ở [Cách vào server](/cach-vao-server/).

## Tải Cobblemon trên điện thoại

Cobblemon không cài được vào Minecraft PE hay Bedrock, kể cả trên điện thoại. Addon "Cobblemon PE" là sản phẩm khác, xem [Cobblemon PE, Bedrock](/cobblemon-pe/).

- **Android:** chạy Minecraft Java Edition bằng launcher như Fold Craft Launcher (FCL) hay PojavLauncher rồi tự cài Fabric và Cobblemon; hoặc dùng CocoLauncher Android để vào Coco Cobblemon.
- **iPhone, iPad:** CocoLauncher iOS là bản thử nghiệm để vào Coco Cobblemon, lần đầu cài cần máy tính.

Yêu cầu máy và cách cài ở trang [Chơi Cobblemon trên điện thoại](/cobblemon-dien-thoai/).

## Lỗi hay gặp khi cài Cobblemon

| Lỗi | Cách sửa |
|---|---|
| Game báo thiếu Fabric API | Tải Fabric API đúng bản 1.21.1, chép vào thư mục `mods` |
| Game văng ngay khi mở | Xem file có đúng bản Fabric không: file `Cobblemon-neoforge-...` không chạy với Fabric. Bỏ bớt mod khác để tìm mod gây lỗi |
| Không có bản cài Fabric trong Minecraft Launcher | Chạy lại Fabric Installer, chọn đúng Minecraft 1.21.1 |
| Vào server bị từ chối vì sai mod hoặc sai phiên bản | Bản Minecraft, Cobblemon và các mod có nội dung phải khớp server. Hỏi server họ dùng bản nào hoặc dùng launcher của server |
| Game giật, thiếu bộ nhớ | Tăng RAM trong cài đặt launcher, không quá nửa RAM của máy |
| Dùng Minecraft Bedrock, PE | Cobblemon chỉ có cho Java Edition |

Dùng CocoLauncher mà gặp lỗi thì xem [Sửa lỗi CocoLauncher](/cocolauncher/sua-loi/).

## Hỏi nhanh

**Cobblemon có mất phí không?**
Mod Cobblemon tải không mất phí trên Modrinth và CurseForge. Cần có Minecraft: Java Edition để chạy mod.

**Tải Cobblemon ở đâu cho an toàn?**
Ở trang Cobblemon trên [Modrinth](https://modrinth.com/mod/cobblemon) hoặc CurseForge. Trang đăng lại mod thường gắn quảng cáo hoặc file giả.

**Cobblemon có tiếng Việt không?**
Có một phần: Cobblemon 1.7.3 có sẵn ngôn ngữ Tiếng Việt cho khoảng 60% số dòng chữ. Cách bật và gói Việt hoá cộng đồng ở trang [Cobblemon Việt hoá](/cobblemon-viet-hoa/).

**Cài Cobblemon xong vào server nào cũng được không?**
Không. Mỗi server chạy một bản Minecraft, Cobblemon và bộ mod riêng, máy bạn phải khớp. Server người Việt Coco Cobblemon vào bằng [CocoLauncher](/cocolauncher/).

**Có cần tự cài Java không?**
Không, nếu dùng Modrinth App, Minecraft Launcher hoặc CocoLauncher. Chỉ khi tự chạy game bằng launcher khác mới cần chọn Java 21 bản 64-bit.

**Xem thêm:** [Launcher nào để chơi Cobblemon](/launcher-cobblemon/) · [Chơi Pokémon trong Minecraft: Cobblemon và Pixelmon](/pokemon-trong-minecraft/) · [Server Cobblemon Việt Nam](/server-cobblemon-viet-nam/) · [Hỏi đáp](/hoi-dap/)

*Cập nhật: 11/11/2026. Số phiên bản kiểm trên Modrinth ngày 11/11/2026.*
