---
title: Troubleshooting
seo_title: "CocoLauncher troubleshooting: exit code 1, SmartScreen, macOS, Android"
description: "Fix common CocoLauncher (Coco Launcher) problems: game exits with code 1 right after Play, SmartScreen warning, macOS cannot verify the developer, Android black screen or crashes."
parent: English
nav_order: 6
permalink: /en/troubleshooting/
alt: /cocolauncher/sua-loi/
last_modified_at: 2026-11-06T11:30:01+07:00
---

# CocoLauncher troubleshooting

Known problems and fixes by operating system. If yours is not here, ask on [Discord](https://discord.gg/hyspace) with a screenshot.

## Windows

| Problem | Fix |
|---|---|
| SmartScreen blocks the installer | Install from the [Microsoft Store](https://apps.microsoft.com/detail/9NPG31VS7T2H?cid=docs-en), or compare the SHA-256 hash before running the .exe |
| The launcher says the game exited with code 1 right after Play | The game stopped before loading mods. The case seen so far was a full disk: free up space and try again. Details are in `instance/logs/launcher-game-output.log` in the game folder |
| Slow game or crashes | Adjust RAM in the launcher's quick settings and close other apps |
| A mod breaks after copying files by hand | Remove that mod from the SideMods folder and press Play. The launcher re-checks the modpack on every launch |
| Version mismatch or missing mods when joining | Reopen CocoLauncher and press Play so it downloads the update. Do not join with another launcher |

## macOS

| Problem | Fix |
|---|---|
| macOS cannot verify the developer | macOS 15 and later: System Settings > Privacy & Security, press Open Anyway. macOS 14 and earlier: Control-click the app, choose Open |
| The app "is damaged" | Download the file again from the [download page](/en/cocolauncher/) and compare the SHA-256 hash. If it still fails, ask on Discord; do not disable macOS security checks |
| A new version is out but the launcher does not update | Expected on Mac: download the new .dmg and drag it over the old app, your game data stays |

## Android

| Problem | Fix |
|---|---|
| Emulator crashes | Use the emulator build (GiaLap.apk), not the phone build |
| Black screen or crash | In Settings, if the renderer is on Auto, try LTW or Zink |
| Hot phone, stutter | Lower the resolution to 50-70% |
| Crashes mid-game | Keep game memory at the recommended level, close other apps |
| The .apk download sits at 100% | Pull down the notification shade, Chrome is waiting for you to keep the file |

**See also:** [FAQ](/en/faq/) · [CocoLauncher download](/en/cocolauncher/) · [Play on Android and iPhone](/en/cobblemon-android/) · [How to join](/en/how-to-join/)

*Updated: 06/11/2026.*
