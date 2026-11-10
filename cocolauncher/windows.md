---
title: Cài trên Windows
seo_title: "Cài CocoLauncher trên Windows 10, 11: Microsoft Store hoặc file .exe"
description: "Cách cài CocoLauncher (Coco Launcher) trên Windows: cài từ Microsoft Store hoặc file CocoLauncher-Setup.exe, xử lý SmartScreen, cập nhật và gỡ cài đặt."
parent: CocoLauncher
nav_order: 1
permalink: /cocolauncher/windows/
last_modified_at: 2026-11-11T03:48:07+07:00
---

# Cài CocoLauncher trên Windows

Có hai cách cài CocoLauncher trên Windows 10 hoặc 11 bản 64-bit. Cả hai đều là cùng một launcher của server Coco Cobblemon.

## Cách 1: Microsoft Store (khuyên dùng)

1. Mở trang [CocoLauncher trên Microsoft Store](https://apps.microsoft.com/detail/9NPG31VS7T2H?cid=docs). Nhà phát hành ghi **Coconubs**.
2. Bấm **Get** hoặc **Tải**, chờ Store cài xong.
3. Mở CocoLauncher từ menu Start.

Bản Store đi qua bước kiểm tra của Microsoft trước khi phát hành, nên không gặp cảnh báo SmartScreen như file .exe.

## Cách 2: file .exe

1. Tải [CocoLauncher-Setup.exe](https://github.com/Coconubs/cocolauncher-pack/releases/download/launcher/CocoLauncher-Setup.exe) từ GitHub Releases của Coconubs.
2. Nên [đối chiếu mã SHA-256](/cocolauncher/an-toan/#sha256) trước khi mở.
3. Mở file. File .exe chưa có chữ ký số nên SmartScreen có thể hiện "Windows protected your PC". Chỉ bấm **More info** rồi **Run anyway** khi bạn tải đúng từ link trên và mã SHA-256 khớp. Không chắc thì dùng bản Microsoft Store.

## Lần đầu mở launcher

1. Nhập tên trong game: 3 đến 16 ký tự, chữ không dấu, số hoặc dấu gạch dưới.
2. Bấm **Chơi**. Lần đầu launcher tải Java, Minecraft, Fabric và gói mod, nên dùng mạng ổn định. Những lần sau chỉ tải phần thay đổi.
3. Game mở và tự kết nối tới server `coco.ultramc.co`. Làm theo hướng dẫn đăng ký trên màn hình, rồi gõ `/menu`.

Các bước trong game ở trang [Cách vào server](/cach-vao-server/).

## Chỉnh RAM

Launcher mặc định cấp cho game 2 đến 4 GB RAM. Đổi mức RAM ở mục cài đặt của launcher. Máy 8 GB RAM nên để mức mặc định và tắt bớt ứng dụng khác khi chơi.

## Cập nhật

- **Gói mod:** tự cập nhật mỗi khi bấm Chơi.
- **Trong game báo có bản mới:** bấm **Cập nhật**, thoát game rồi mở lại CocoLauncher.

## Hỏi nhanh

### Cài CocoLauncher từ Microsoft Store hay file .exe?

Nên cài từ Microsoft Store: nhà phát hành ghi Coconubs, và bản Store đi qua bước kiểm tra của Microsoft nên không gặp cảnh báo SmartScreen như file .exe. File .exe là cùng một launcher, tải ở GitHub Releases của Coconubs.

### SmartScreen báo "Windows protected your PC" thì làm sao?

File .exe chưa có chữ ký số nên SmartScreen có thể cảnh báo. Chỉ bấm **More info** rồi **Run anyway** khi bạn tải đúng từ link trên và [mã SHA-256](/cocolauncher/an-toan/#sha256) khớp. Không chắc thì dùng bản Microsoft Store.

### CocoLauncher cấp bao nhiêu RAM cho game?

Mặc định 2 đến 4 GB, đổi ở mục cài đặt của launcher. Máy 8 GB RAM nên để mức mặc định và tắt bớt ứng dụng khác khi chơi.

## Gặp lỗi

Xem [Sửa lỗi CocoLauncher](/cocolauncher/sua-loi/#windows).

*Cập nhật: 11/11/2026.*
