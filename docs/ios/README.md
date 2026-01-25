---
title: Mobile App Documentation
description: iOS and Android mobile application documentation
author: Documentation Architect
date: 2026-01-25
---

# Mobile App Documentation

Documentation for the Meeple/Rulebook iOS and Android mobile applications.

## Contents

| Document | Description |
|----------|-------------|
| [Product Spec](product-spec.md) | Mobile app product specification |
| [Android Migration PRD](android-migration-prd.md) | Android platform requirements |
| [Product Overview](android-migration-product-overview.md) | Comprehensive app overview |
| [Components](android-migration-components.md) | UI component specifications |
| [Screens](android-migration-screens.md) | Screen-by-screen documentation |
| [Navigation](android-migration-navigation.md) | Navigation patterns and flows |

## Product Overview

**App Name:** Meeple (formerly Rulebook)

**Purpose:** AI-powered board game rules explanation - learn any board game in 60 seconds by scanning the game box.

## Core Features

1. **Photo Capture** - Scan game boxes
2. **AI Rules Generation** - Get instant rules explanations
3. **Game Library** - Save and manage scanned games
4. **Credit System** - In-app purchase for scans
5. **Settings** - User preferences
6. **Onboarding** - First-time user flow

## Platforms

| Platform | Status | Technology |
|----------|--------|------------|
| iOS | Implemented | Swift + SwiftUI |
| Android | In Development | Kotlin + Jetpack Compose |

## Design System

The mobile app uses a **Brutalist** design system with:
- Bold colors
- Hard shadows
- Heavy typography
- High contrast

Design tokens are exported in:
- [design-system-android.json](design-system-android.json)

## Related Documentation

- [Landing Page Design](../design/README.md) - Web design system
- [Landing Page Product](../product/README.md) - Landing page requirements
