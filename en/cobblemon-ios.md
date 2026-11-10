---
title: Cobblemon on iPhone
seo_title: "Cobblemon on iOS: can you play Cobblemon on iPhone and iPad?"
description: "Is there a Cobblemon iOS app? Cobblemon is a Minecraft Java mod and does not run in Minecraft PE. On iPhone and iPad it runs through a Java launcher such as CocoLauncher iOS (experimental). Requirements and steps."
parent: English
nav_order: 4.5
permalink: /en/cobblemon-ios/
alt: /cobblemon-ios/
last_modified_at: 2026-11-11T02:48:44+07:00
---

# Cobblemon on iPhone and iPad (iOS)

There is no official Cobblemon app on the App Store, and Cobblemon does not run in Minecraft PE (Bedrock) on iPhone, because Cobblemon is a mod for Minecraft Java Edition. To play real Cobblemon on an iPhone or iPad you need a launcher that runs Minecraft Java Edition, installed from outside the App Store. The Coco Cobblemon server has **CocoLauncher iOS**, an experimental build for joining the server from iPhone and iPad.
{: .fs-5 .fw-300 }

## Your options

| Option | What it is | Real Cobblemon? |
|---|---|---|
| Apps named "Cobblemon" on the App Store | Minecraft PE add-ons or other third-party apps, not the Cobblemon mod | No |
| CocoLauncher iOS | Runs Minecraft Java Edition and downloads the game and the Coco Cobblemon mod pack. Experimental, only for joining Coco Cobblemon | Yes |
| Other Java launchers for iOS, such as Amethyst (based on PojavLauncher) | Run Minecraft Java Edition; you install Fabric and Cobblemon yourself | Yes, with your own mod setup |

CocoLauncher iOS is a modified version of Angel Aura Amethyst, open source under GPLv3 ([github.com/Coconubs/CocoLauncher-iOS](https://github.com/Coconubs/CocoLauncher-iOS)).

## What you need for CocoLauncher iOS

| Need | Details |
|---|---|
| Device | iPhone or iPad on iOS 14 or later. 8 GB of RAM recommended (iPhone 15 Pro, 16, 17); 6 GB devices run on the Low preset |
| Game memory | The memory unlock is required. 8 GB devices need at least 3.5 GB (3.8-4 GB runs smoothly), 6 GB devices 2.5 GB |
| Computer | A Windows PC or Mac with a cable, once, for about 30 minutes (unless you already have your own IPA signing certificate) |
| Account | An Apple ID; a secondary one is recommended. A free Apple ID can sideload 3 apps: SideStore, CocoLauncher and StikDebug |
| Network | The first start downloads about 1.5 GB, so use Wi-Fi |

## Main steps

The detailed steps differ between iOS 26 and earlier and iOS 27, and can change with app updates. Follow the [CocoLauncher iOS page](https://coconubs.github.io/CocoLauncher-iOS/) (in Vietnamese); this is a summary so you know what to expect.

1. **On the computer (once):** install iTunes from apple.com and iloader, connect the iPhone, use iloader to install SideStore, then import the CocoLauncher IPA. Installing through iloader gives the app the increased memory permission.
2. **On the iPhone:** trust your Apple ID in Settings, turn on Developer Mode, install LocalDevVPN (free on the App Store) and StikDebug. StikDebug enables JIT; without JIT, Minecraft Java cannot run on iPhone.
3. **Open CocoLauncher:** if it asks to unlock memory, sign in with the same Apple ID you used for SideStore. Enter a player name (3-16 characters: letters without accents, digits, underscore) and press **CHƠI** (Play).
4. **Join:** open Multiplayer, pick the Coco server and type `/register` (first time) or `/login`.

## Every session and every 7 days

- **Every session:** turn on Wi-Fi, connect LocalDevVPN, open CocoLauncher and press Play. The app turns on JIT through StikDebug and comes back. Once JIT is on, you can switch to mobile data.
- **Every 7 days:** open SideStore, My Apps, Refresh All (Wi-Fi and LocalDevVPN needed). If it expires, the app will not open until you refresh.
- When the server's mod pack changes, the app downloads only the changes.

{: .warning }
Do not install with shared or enterprise certificates or SideInstaller: they get revoked often, and the app cannot enable JIT, so it will not run. KSign and ESign only work with your own Development certificate.

## Quick answers

**Is Cobblemon on the App Store?**
There is no official version. The Cobblemon team only makes a mod for Minecraft Java Edition. Apps named "Cobblemon" on the App Store are Minecraft PE add-ons or other third-party apps.

**Can Minecraft PE on iPhone run Cobblemon?**
No. Minecraft PE is the Bedrock edition, and Cobblemon only runs on Java Edition.

**Do I need a computer to play Cobblemon on iPhone?**
Once, for about 30 minutes, to install SideStore and CocoLauncher (unless you have your own IPA signing certificate). After that you play on the iPhone and refresh the app in SideStore every 7 days.

**Which iPhones work?**
iOS 14 or later. 8 GB of RAM is recommended, such as iPhone 15 Pro, 16 or 17; 6 GB devices run on the Low preset.

**See also:** [Play Cobblemon on Android and iPhone](/en/cobblemon-android/) · [Cobblemon server in Vietnam](/en/vietnam-cobblemon-server/) · [How to join](/en/how-to-join/) · [FAQ](/en/faq/)

*Updated: 11 November 2026, from the CocoLauncher iOS page of the same day.*
