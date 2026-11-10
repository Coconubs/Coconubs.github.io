---
title: CocoLauncher download
seo_title: "CocoLauncher (Coco Launcher): download for Windows, macOS and Android"
description: "Download CocoLauncher (Coco Launcher), the launcher of the Coco Cobblemon server: Microsoft Store, Windows .exe, macOS Apple silicon and Intel, Android. Installs Java, Minecraft, Fabric and mods."
parent: English
nav_order: 1
permalink: /en/cocolauncher/
alt: /cocolauncher/
jsonld: |
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CocoLauncher",
    "alternateName": "Coco Launcher",
    "url": "https://coconubs.github.io/en/cocolauncher/",
    "description": "The launcher of the Coco Cobblemon server. It installs Java, Minecraft, Fabric and the server modpack so players can join with one button.",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Windows 10, Windows 11, macOS, Android, iOS",
    "inLanguage": ["vi", "en"],
    "installUrl": "https://apps.microsoft.com/detail/9NPG31VS7T2H",
    "downloadUrl": "https://github.com/Coconubs/cocolauncher-pack/releases",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Coconubs",
      "url": "https://github.com/Coconubs"
    },
    "sameAs": [
      "https://apps.microsoft.com/detail/9NPG31VS7T2H",
      "https://github.com/Coconubs/cocolauncher-pack"
    ]
  }
last_modified_at: 2026-11-11T02:29:42+07:00
---

# CocoLauncher (Coco Launcher)

CocoLauncher is the launcher of the Coco Cobblemon server. It installs Java, Minecraft, Fabric and the server modpack so you can join with one button. The publisher is Coconubs.
{: .fs-6 .fw-300 }

## Download

| Platform | Download |
|---|---|
| Windows 10, 11 (recommended) | [Microsoft Store](https://apps.microsoft.com/detail/9NPG31VS7T2H?cid=docs-en) |
| Windows installer | [CocoLauncher-Setup.exe](https://github.com/Coconubs/cocolauncher-pack/releases/download/launcher/CocoLauncher-Setup.exe) |
| macOS M1-M4 and newer (Apple silicon) | [CocoLauncher-Mac-AppleSilicon.dmg](https://github.com/Coconubs/cocolauncher-pack/releases/download/launcher/CocoLauncher-Mac-AppleSilicon.dmg) |
| macOS Intel | [CocoLauncher-Mac-Intel.dmg](https://github.com/Coconubs/cocolauncher-pack/releases/download/launcher/CocoLauncher-Mac-Intel.dmg) |
| Android (experimental, 6 GB of RAM or more) | [CocoLauncher-Android.apk](https://github.com/Coconubs/cocolauncher-pack/releases/download/android-app/CocoLauncher-Android.apk) |
| Android on a PC emulator (MuMu, LDPlayer) | [CocoLauncher-Android-GiaLap.apk](https://github.com/Coconubs/cocolauncher-pack/releases/download/android-app/CocoLauncher-Android-GiaLap.apk) |
| iPhone, iPad (experimental) | [CocoLauncher iOS page](https://coconubs.github.io/CocoLauncher-iOS/), see [iPhone and iPad](/en/cobblemon-android/#iphone-and-ipad) |
| Linux | Not available |

Only download from the Microsoft Store or [Coconubs GitHub Releases](https://github.com/Coconubs/cocolauncher-pack/releases). Copies on other sites may have been modified.

{: .en_note }
There is an unrelated Android home-screen app with a similar name, "Coco Launcher", on Google Play. It has nothing to do with Minecraft or Coco Cobblemon.

## What it does

- **One Play button:** downloads and checks Java, Minecraft 1.21.1, Fabric Loader, the modpack and the resource pack.
- **Mods follow the server:** the modpack is checked and updated every time you press Play.
- **Settings:** several player names, RAM, resolution and game folder.
- **Extras:** online player count, Vietnamese and English interface.

CocoLauncher only joins Coco Cobblemon. For single player or other servers, see [Which launcher for Cobblemon](/en/cobblemon-launcher/).

## Install

**Windows.** Install from the Microsoft Store, or run the .exe. The .exe is not code-signed, so SmartScreen may show "Windows protected your PC"; only choose More info and Run anyway if you downloaded it from the link above and the SHA-256 hash matches.

**macOS.** Open the .dmg and drag CocoLauncher to Applications. Check the Chip line in About This Mac to pick the right build. On macOS 15 and later, open the app once, choose Done, then go to System Settings > Privacy & Security and press Open Anyway. On macOS 14 and earlier, Control-click the app and choose Open. The Mac build does not update itself: download the new .dmg and drag it over the old app; your game data stays.

**Android.** See [Play Cobblemon on Android](/en/cobblemon-android/).

## Check the download

Every file on [GitHub Releases](https://github.com/Coconubs/cocolauncher-pack/releases/tag/launcher) shows a `sha256` hash. Compare it with your file:

```powershell
Get-FileHash CocoLauncher-Setup.exe
```

```bash
shasum -a 256 CocoLauncher-Mac-AppleSilicon.dmg
```

If the hashes do not match, do not open the file. Download it again from the official link and report it on [Discord](https://discord.gg/hyspace).

## System requirements

- Windows 10 or 11 (64-bit), or a Mac with Apple silicon or Intel.
- The launcher gives the game 2 to 4 GB of RAM by default, so 8 GB of RAM or more is recommended.

*Updated: 11 November 2026.*
