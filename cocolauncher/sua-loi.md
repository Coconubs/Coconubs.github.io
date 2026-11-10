---
title: Sửa lỗi CocoLauncher
seo_title: "Sửa lỗi CocoLauncher: game thoát mã 1, SmartScreen, macOS, Android"
description: "Cách sửa lỗi CocoLauncher (Coco Launcher) thường gặp: game thoát mã 1 ngay khi bấm Chơi, SmartScreen chặn, macOS báo không xác minh được, Android đen màn hình, văng game."
parent: CocoLauncher
nav_order: 4
permalink: /cocolauncher/sua-loi/
alt: /en/troubleshooting/
last_modified_at: 2026-11-06T11:30:01+07:00
---

# Sửa lỗi CocoLauncher

Các lỗi đã gặp và cách xử lý theo từng hệ điều hành. Chưa thấy lỗi của bạn ở đây thì hỏi trên [Discord](https://discord.gg/hyspace), kèm ảnh chụp lỗi.

## Windows
{: #windows }

| Lỗi | Cách xử lý |
|---|---|
| SmartScreen chặn file cài | Cài từ [Microsoft Store](https://apps.microsoft.com/detail/9NPG31VS7T2H?cid=docs), hoặc [đối chiếu mã SHA-256](/cocolauncher/an-toan/#sha256) trước khi chạy file .exe |
| Launcher báo game thoát mã 1 ngay sau khi bấm Chơi | Game dừng trước khi nạp mod. Ca đã gặp là ổ đĩa hết dung lượng: dọn ổ rồi thử lại. Chi tiết lỗi nằm ở file `instance/logs/launcher-game-output.log` trong thư mục game |
| Game chậm hoặc văng | Chỉnh RAM ở mục Cấu hình nhanh trong launcher, tắt bớt ứng dụng khác |
| Mod lỗi sau khi tự chép file | Bỏ mod đó khỏi thư mục SideMods rồi bấm Chơi. Launcher kiểm tra lại gói mod mỗi lần chạy |
| Vào server báo sai phiên bản hoặc thiếu mod | Mở lại CocoLauncher và bấm Chơi để launcher tải bản mới. Đừng vào bằng launcher khác |

## macOS
{: #macos }

| Lỗi | Cách xử lý |
|---|---|
| Máy báo không xác minh được nhà phát triển | macOS 15 trở lên: System Settings > Privacy & Security, bấm **Open Anyway**. macOS 14 trở xuống: Control + click vào app, chọn **Open** |
| Máy báo app "is damaged" | Tải lại file từ [trang tải](/cocolauncher/macos/), đối chiếu mã SHA-256. Vẫn lỗi thì hỏi trên Discord, đừng tự gỡ cơ chế kiểm tra bảo mật của macOS |
| Có bản mới nhưng launcher không tự cập nhật | Bình thường với bản Mac: tải lại .dmg và kéo đè vào Applications, dữ liệu game giữ nguyên |

## Android
{: #android }

| Lỗi | Cách xử lý |
|---|---|
| Giả lập bị văng | Dùng file dành cho giả lập (GiaLap.apk), không dùng file điện thoại |
| Đen màn hình hoặc văng | Trong Cài đặt, mục **Bộ dựng hình** đang Tự động thì thử **LTW** hoặc **Zink** |
| Máy nóng, giật | Giảm độ phân giải xuống 50 đến 70% |
| Văng giữa chừng | Để Bộ nhớ cho game ở mức khuyên dùng, tắt bớt ứng dụng khác |
| Tải .apk đứng ở 100% | Kéo thanh thông báo xuống, Chrome đang chờ xác nhận giữ file |

## Vẫn lỗi?

Gửi ảnh lỗi trên [Discord](https://discord.gg/hyspace). Trên Android dùng nút **Gửi log lỗi cho admin** trong Cài đặt.

*Cập nhật: 06/11/2026.*
