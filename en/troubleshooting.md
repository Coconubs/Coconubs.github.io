---
title: Troubleshooting
seo_title: "CocoLauncher troubleshooting: exit code 1, SmartScreen, macOS, Android"
description: "Fix common CocoLauncher (Coco Launcher) problems: game exits with code 1 right after Play, SmartScreen warning, macOS cannot verify the developer, Android black screen or crashes."
parent: English
nav_order: 6
permalink: /en/troubleshooting/
alt: /cocolauncher/sua-loi/
last_modified_at: 2026-11-11T10:30:00+07:00
---

# CocoLauncher troubleshooting

Common problems and how to fix them. Not listed? Post a screenshot on [Discord](https://discord.gg/hyspace).

## Windows

| Problem | Fix |
|---|---|
| SmartScreen blocks the installer | Install from the [Microsoft Store](https://apps.microsoft.com/detail/9NPG31VS7T2H?cid=docs-en), or compare the SHA-256 hash before running the .exe |
| The launcher says the game exited with code 1 right after Play | The case we have seen was a full disk. Free up space and press Play again |
| Slow game or crashes | Close other apps while playing |
| Version mismatch or missing mods when joining | Reopen CocoLauncher and press Play to get the update. Do not join with another launcher |

## macOS

| Problem | Fix |
|---|---|
| macOS cannot verify the developer | macOS 15 and later: System Settings > Privacy & Security, press Open Anyway. macOS 14 and earlier: Control-click the app, choose Open |
| The app "is damaged" | Download the file again from the [download page](/en/cocolauncher/). Still broken? Ask on Discord; do not turn off macOS security |
| A new version is out but the launcher does not update | Normal on Mac: download the new .dmg and drag it over the old app. Your game data stays |

## Android

| Problem | Fix |
|---|---|
| Emulator crashes | Use the emulator build (GiaLap.apk), not the phone build |
| Black screen or crash | In Settings, if the renderer is on Auto, try LTW or Zink |
| Hot phone, stutter | Lower the resolution to 50-70% |
| Crashes mid-game | Keep game memory at the recommended level, close other apps |
| The .apk download sits at 100% | Pull down the notification shade, Chrome is waiting for you to keep the file |

**See also:** [FAQ](/en/faq/) · [CocoLauncher download](/en/cocolauncher/) · [Play on Android and iPhone](/en/cobblemon-android/) · [How to join](/en/how-to-join/)

*Updated: 11 November 2026.*
