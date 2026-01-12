# Assets Directory

This directory contains the marketing website assets (logos, videos, images).

## Required Files

### Logo
- **Path**: `images/Raghunath Chava-LOGO.png`
- **Description**: Main Raghunath Chava logo for header and footer
- **Recommended Size**: 200x50px or similar aspect ratio
- **Format**: PNG with transparency

### Videos
- **Path**: `videos/Raghunath Chava-LOGO-VIDEO-FINAL.mp4`
- **Description**: Main marketing video for hero section
- **Format**: MP4 (H.264 codec recommended for web compatibility)
- **Fallback**: `videos/saraise-logo-loop.mp4` (optional)

## Adding Assets

1. Copy your logo file to: `assets/images/Raghunath Chava-LOGO.png`
2. Copy your video file(s) to: `assets/videos/Raghunath Chava-LOGO-VIDEO-FINAL.mp4`

The website will automatically:
- Display the logo in the header and footer
- Play the video in the hero section
- Fall back to text if assets are missing

## Notes

- Logo and video files are referenced in `index.html`
- CSS handles graceful fallback if files are missing
- Dark mode automatically adjusts colors based on system preferences

