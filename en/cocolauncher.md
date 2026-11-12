---
title: CocoLauncher download
seo_title: "CocoLauncher (Coco Launcher): Minecraft Cobblemon launcher for PC, Android, iPhone"
description: "Download CocoLauncher (Coco Launcher), the Minecraft launcher of the Coco Cobblemon server, for Windows, macOS, Android and iPhone (experimental). It sets up the game and mods for you."
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
    "description": "The Minecraft Java launcher of the Coco Cobblemon server (coco.ultramc.co). It installs Java, Minecraft 1.21.1, Fabric and the server modpack so players can join with one button. Not the Android home-screen app called Coco Launcher.",
    "applicationCategory": "GameApplication",
    "applicationSubCategory": "Minecraft Java launcher",
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
last_modified_at: 2026-11-12T10:00:00+07:00
---

# CocoLauncher (Coco Launcher)

CocoLauncher (or Coco Launcher) is the launcher for the Coco Cobblemon server (`coco.ultramc.co`), made by Coconubs. Enter a name, press **Play**, and you're in. It installs and updates everything, so you never have to deal with mods.
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

Only download it from the Microsoft Store or [Coconubs GitHub Releases](https://github.com/Coconubs/cocolauncher-pack/releases). Copies on other sites may have been tampered with.

{: .en_note }
There's an Android home-screen app called "Coco Launcher" on Google Play. It has nothing to do with Minecraft or Coco Cobblemon.

## What it does

- **One Play button:** sets up the game and mods the first time, then keeps them in sync with the server.
- **Several player names**, and you can see how many people are online.
- **Vietnamese and English.**

## Install

**Windows.** Install it from the Microsoft Store, or run the .exe. The .exe isn't signed, so SmartScreen may show "Windows protected your PC". If you got it from the link above, click More info, then Run anyway.

**macOS.** Pick the build that matches the Chip line in About This Mac. Open the .dmg and drag CocoLauncher into Applications. macOS blocks it the first time: on macOS 15 and later, open it once, choose Done, then press Open Anyway in System Settings > Privacy & Security. On macOS 14 and earlier, Control-click the app and choose Open. The Mac version doesn't update itself, so when there's a new one, download the .dmg and drag it over the old app. Your game data is kept.

**Android.** See [Play Cobblemon on Android](/en/cobblemon-android/).

## Check the download

Want to make sure the file is genuine? Every file on [GitHub Releases](https://github.com/Coconubs/cocolauncher-pack/releases/tag/launcher) shows a `sha256` hash. Compare it with yours:

```powershell
Get-FileHash CocoLauncher-Setup.exe
```

```bash
shasum -a 256 CocoLauncher-Mac-AppleSilicon.dmg
```

If they don't match, don't open the file. Download it again and let us know on [Discord](https://discord.gg/hyspace).

## System requirements

- Computer: Windows 10 or 11 (64-bit) or a Mac, ideally with 8 GB of RAM or more.
- Android: 6 GB of RAM or more (8 GB recommended).
- iPhone, iPad: iOS 14 or later, at least 8 GB of RAM, and a computer once for setup; see [iPhone and iPad](/en/cobblemon-android/#iphone-and-ipad).

## Quick answers

### What is CocoLauncher?

It's the launcher for the Coco Cobblemon server: enter a name, press **Play**, and it takes you to `coco.ultramc.co`. The Microsoft Store and GitHub versions are the same launcher.

### Is CocoLauncher free?

Yes. Ranks and the Premium Battle Pass in game are optional.

### Is CocoLauncher the "Coco Launcher" app on Google Play?

No, that's a different app. CocoLauncher Android is only available from [Coconubs GitHub Releases](https://github.com/Coconubs/cocolauncher-pack/releases).

### Can I use CocoLauncher for single player or other servers?

No, it only joins Coco Cobblemon. For single player, use the Modrinth App with the Cobblemon Official Modpack. See [Which launcher for Cobblemon](/en/cobblemon-launcher/).

**See also:** [Troubleshooting](/en/troubleshooting/) · [FAQ](/en/faq/) · [How to join](/en/how-to-join/)

*Updated: 12 November 2026.*
