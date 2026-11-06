---
title: CocoLauncher có an toàn không
seo_title: "CocoLauncher có an toàn không? Cách tự kiểm tra file tải"
description: "CocoLauncher (Coco Launcher) có an toàn không: tải ở đâu cho đúng, vì sao SmartScreen cảnh báo file .exe, cách đối chiếu mã SHA-256 trên Windows, macOS và Android."
parent: CocoLauncher
nav_order: 5
permalink: /cocolauncher/an-toan/
---

# CocoLauncher có an toàn không?

Không phần mềm nào được bảo đảm tuyệt đối, nên trang này chỉ cách bạn tự kiểm chứng thay vì hứa hẹn.

## Tải đúng nguồn

CocoLauncher chỉ phát hành ở hai nơi:

1. **Microsoft Store**, nhà phát hành Coconubs: [apps.microsoft.com/detail/9NPG31VS7T2H](https://apps.microsoft.com/detail/9NPG31VS7T2H?cid=docs). Bản Store đi qua bước kiểm tra của Microsoft trước khi phát hành. Đây là cách khuyên dùng trên Windows.
2. **GitHub Releases** của tài khoản Coconubs: [github.com/Coconubs/cocolauncher-pack/releases](https://github.com/Coconubs/cocolauncher-pack/releases). Các file .exe, .dmg, .apk đều nằm ở đây.

Bản đăng lại ở trang tải phần mềm khác, nhóm chat hay link rút gọn có thể đã bị sửa. Đừng dùng.

## Vì sao Windows cảnh báo file .exe

File `CocoLauncher-Setup.exe` chưa có chữ ký số, nên SmartScreen có thể hiện "Windows protected your PC". Cảnh báo này nói Windows chưa biết nhà phát hành, không có nghĩa file có mã độc. Bản Microsoft Store không gặp cảnh báo này.

## Đối chiếu mã SHA-256
{: #sha256 }

Mỗi file trên [GitHub Releases](https://github.com/Coconubs/cocolauncher-pack/releases/tag/launcher) có mã `sha256` hiện cạnh tên file. Tính mã của file bạn tải rồi so:

**Windows** (mở PowerShell tại thư mục tải):

```powershell
Get-FileHash CocoLauncher-Setup.exe
```

**macOS** (mở Terminal tại thư mục tải):

```bash
shasum -a 256 CocoLauncher-Mac-AppleSilicon.dmg
```

Hai mã phải trùng từng ký tự. Không khớp thì đừng mở file: tải lại từ link chính thức và báo trên [Discord](https://discord.gg/hyspace).

## Quét thêm

Có thể quét file bằng Microsoft Defender (chuột phải vào file, chọn quét) hoặc tải lên VirusTotal để xem kết quả của nhiều phần mềm diệt virus.

## Launcher lưu gì trên máy

Launcher lưu Minecraft, Java, gói mod và thiết lập của bạn trong thư mục game. Tên chơi và mức RAM lưu ở máy của bạn để lần sau không phải nhập lại.

*Cập nhật: 06/11/2026.*
