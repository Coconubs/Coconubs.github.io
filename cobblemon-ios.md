---
title: Cobblemon trên iPhone (iOS)
seo_title: "Cobblemon iOS: chơi Cobblemon trên iPhone, iPad được không?"
description: "Cobblemon có bản iOS không? Cobblemon chỉ có cho Minecraft Java, không chạy trong Minecraft PE. Trên iPhone, iPad có thể chơi bằng launcher Java như CocoLauncher iOS (thử nghiệm)."
nav_order: 9.6
alt: /en/cobblemon-ios/
last_modified_at: 2026-11-12T10:00:00+07:00
---

# Cobblemon trên iPhone, iPad (iOS)

Cobblemon không có app trên App Store và không chạy trong Minecraft PE (Bedrock) của iPhone, vì đây là mod cho Minecraft Java Edition. Muốn chơi Cobblemon thật trên iPhone, iPad thì phải chạy Minecraft Java bằng một launcher cài ngoài App Store. Server Coco Cobblemon có **CocoLauncher iOS**, bản thử nghiệm để vào server từ iPhone, iPad.
{: .fs-5 .fw-300 }

## Có những cách nào

| Cách | Là gì | Chơi Cobblemon thật? |
|---|---|---|
| App tên "Cobblemon" trên App Store | Addon Minecraft PE hoặc app của bên khác, không phải mod Cobblemon | Không |
| CocoLauncher iOS | Chạy Minecraft Java, tự tải game và gói mod của server Coco Cobblemon. Bản thử nghiệm, chỉ để vào Coco Cobblemon | Có |
| Launcher Java khác cho iOS, ví dụ Amethyst (dựa trên PojavLauncher) | Chạy Minecraft Java, bạn tự cài Fabric và Cobblemon | Có, nhưng tự cài mod |

CocoLauncher iOS được sửa từ Angel Aura Amethyst, mã nguồn mở theo giấy phép GPLv3 ([github.com/Coconubs/CocoLauncher-iOS](https://github.com/Coconubs/CocoLauncher-iOS)).

## Cần gì để chơi bằng CocoLauncher iOS

| Cần | Chi tiết |
|---|---|
| Máy | iPhone, iPad chạy iOS 14 trở lên. Nên dùng máy 8 GB RAM (iPhone 15 Pro, 16, 17); máy 6 GB chơi được ở cấu hình Thấp |
| RAM cho game | Phải mở khoá RAM. Máy 8 GB cấp ít nhất 3,5 GB (mượt nhất 3,8-4 GB), máy 6 GB cấp 2,5 GB |
| Máy tính | Windows hoặc Mac, kèm dây cáp. Chỉ cần một lần, khoảng 30 phút (không cần nếu bạn đã có chứng chỉ ký IPA riêng) |
| Tài khoản | Một Apple ID, nên dùng Apple ID phụ. Apple ID miễn phí chỉ cài được 3 app tự ký: SideStore, CocoLauncher, StikDebug |
| Mạng | Lần đầu app tải khoảng 1,5 GB, nên dùng Wi-Fi |

## Các bước chính

Các bước cụ thể khác nhau giữa iOS 26 trở xuống và iOS 27, và có thể đổi theo bản app. Hãy làm theo trang [CocoLauncher iOS](https://coconubs.github.io/CocoLauncher-iOS/); phần dưới chỉ tóm tắt để bạn biết trước sẽ phải làm gì.

1. **Trên máy tính (một lần):** cài iTunes bản tải từ apple.com và iloader, cắm iPhone vào, dùng iloader cài SideStore rồi cài file CocoLauncher (IPA). Cài bằng iloader thì app có sẵn quyền dùng thêm RAM.
2. **Trên iPhone:** tin cậy Apple ID của bạn trong Cài đặt, bật Chế độ nhà phát triển, cài LocalDevVPN (miễn phí trên App Store) và StikDebug. StikDebug dùng để bật JIT; không có JIT thì Minecraft Java không chạy được trên iPhone.
3. **Mở CocoLauncher:** nếu app hỏi Mở khoá RAM thì đăng nhập đúng Apple ID đã dùng cho SideStore. Nhập tên nhân vật (3-16 ký tự: chữ không dấu, số, dấu _), bấm **CHƠI**.
4. **Vào server:** vào Multiplayer, chọn server Coco, rồi đăng ký (người mới) hoặc đăng nhập theo màn hình.

## Mỗi lần chơi và mỗi 7 ngày

- **Mỗi lần chơi:** bật Wi-Fi, mở LocalDevVPN bấm Connect, mở CocoLauncher bấm **CHƠI**. App tự bật JIT qua StikDebug rồi quay lại. Bật JIT xong thì chuyển sang 4G cũng được.
- **Cứ 7 ngày:** mở SideStore, vào My Apps, bấm Refresh All (cần Wi-Fi và LocalDevVPN). Quá hạn thì app không mở được cho tới khi Refresh.
- Khi gói mod của server có bản mới, app tự tải phần thay đổi.

{: .warning }
Đừng cài bằng "chứng chỉ chung", chứng chỉ doanh nghiệp hay SideInstaller: các cách này hay bị thu hồi, và app không bật được JIT nên không chạy. Cài bằng KSign, ESign chỉ chạy được nếu dùng chứng chỉ Development của riêng bạn.

## Hỏi nhanh

### Cobblemon có trên App Store không?

Không. Nhóm Cobblemon chỉ làm mod cho Minecraft Java Edition. App tên "Cobblemon" trên App Store là addon Minecraft PE hoặc app của bên khác.

### Minecraft PE trên iPhone cài Cobblemon được không?

Không. Minecraft PE là bản Bedrock, còn Cobblemon chỉ chạy trên Java Edition. Xem [Cobblemon PE, Bedrock](/cobblemon-pe/).

### Chơi Cobblemon trên iPhone có cần máy tính không?

Lần đầu thì cần, khoảng 30 phút, để cài SideStore và CocoLauncher (trừ khi bạn đã có chứng chỉ ký IPA riêng). Sau đó chỉ cần iPhone, 7 ngày vào SideStore Refresh một lần.

### iPhone nào chơi được?

Máy chạy iOS 14 trở lên. Nên dùng máy 8 GB RAM như iPhone 15 Pro, 16, 17; máy 6 GB chơi được ở cấu hình Thấp.

### Cài lỗi hoặc văng game thì hỏi ở đâu?

Hỏi trên [Discord](https://discord.gg/hyspace) của Coco, gửi kèm ảnh chụp và file `latestlog.txt` (trong app Tệp › CocoLauncher).

**Xem thêm:** [Chơi Cobblemon trên điện thoại Android, iPhone](/cobblemon-dien-thoai/) · [Cách tải Cobblemon](/cach-tai-cobblemon/) · [Server Cobblemon Việt Nam](/server-cobblemon-viet-nam/) · [Hỏi đáp](/hoi-dap/)

*Cập nhật: 12/11/2026, theo trang CocoLauncher iOS ngày 11/11/2026.*
