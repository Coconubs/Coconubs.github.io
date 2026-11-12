---
title: CocoLauncher có an toàn không
seo_title: "CocoLauncher có an toàn không? Cách tự kiểm tra file tải"
description: "CocoLauncher (Coco Launcher) có an toàn không: tải ở đâu cho đúng, vì sao SmartScreen cảnh báo file .exe, cách đối chiếu mã SHA-256 trên Windows và macOS."
parent: CocoLauncher
nav_order: 5
permalink: /cocolauncher/an-toan/
last_modified_at: 2026-11-12T10:00:00+07:00
---

# CocoLauncher có an toàn không?

Không phần mềm nào dám nói an toàn tuyệt đối, nên trang này chỉ bạn cách tự kiểm tra thay vì hứa suông.

## Tải đúng chỗ

CocoLauncher chỉ phát hành ở hai nơi:

1. **Microsoft Store**, nhà phát hành Coconubs: [apps.microsoft.com/detail/9NPG31VS7T2H](https://apps.microsoft.com/detail/9NPG31VS7T2H?cid=docs). Bản Store được Microsoft kiểm tra trước khi lên kệ. Trên Windows nên cài bản này.
2. **GitHub Releases** của Coconubs: [github.com/Coconubs/cocolauncher-pack/releases](https://github.com/Coconubs/cocolauncher-pack/releases). Các file .exe, .dmg, .apk đều ở đây.

File đăng lại ở trang tải phần mềm khác, trong nhóm chat hay qua link rút gọn có thể đã bị sửa. Đừng dùng.

## Vì sao Windows cảnh báo file .exe

File `CocoLauncher-Setup.exe` chưa có chữ ký số, nên SmartScreen có thể hiện "Windows protected your PC". Cảnh báo này chỉ có nghĩa Windows chưa biết nhà phát hành, không phải file có virus. Cài bản Microsoft Store thì không gặp cảnh báo này.

## Đối chiếu mã SHA-256
{: #sha256 }

Trên [GitHub Releases](https://github.com/Coconubs/cocolauncher-pack/releases/tag/launcher), cạnh mỗi file có mã `sha256`. Bạn tính mã của file mình đã tải rồi so với mã đó:

**Windows** (mở PowerShell ở thư mục chứa file):

```powershell
Get-FileHash CocoLauncher-Setup.exe
```

**macOS** (mở Terminal ở thư mục chứa file):

```bash
shasum -a 256 CocoLauncher-Mac-AppleSilicon.dmg
```

Hai mã phải giống nhau từng ký tự. Không khớp thì đừng mở file: tải lại từ link chính thức và báo trên [Discord](https://discord.gg/hyspace).

## Quét thêm

Bạn có thể quét file bằng Microsoft Defender (chuột phải vào file, chọn quét), hoặc tải lên VirusTotal để xem nhiều phần mềm diệt virus cùng kiểm.

## Launcher lưu gì trên máy

Launcher lưu game, gói mod và thiết lập của bạn trong thư mục game. Tên chơi và mức RAM cũng được lưu trên máy để lần sau không phải nhập lại.

**Xem thêm:** [Tải CocoLauncher](/cocolauncher/) · [Cài trên Windows](/cocolauncher/windows/) · [CocoLauncher cho macOS](/cocolauncher/macos/) · [Sửa lỗi CocoLauncher](/cocolauncher/sua-loi/) · [Hỏi đáp](/hoi-dap/)

*Cập nhật: 12/11/2026.*
