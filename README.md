# BaselHack 2024 Screen Media

Contains a remotion project with compositions:
* JobWall
* SponsorVideos

These are intended to be rendered in a video file each.

Raw assets (under public/) are not committed to git, for filesize reasons. We have them in our google drive.
These are the files referenced with the staticFile() function:

| file in public/ | original file |
| --- | --- |
| `eh.mp4` | `260903_eh_evp_kurzclip_friendliness_s03_1x1.mp4` |
| `pax.mp4` | `RZ_PAX_650_Basel Hack_Spot_02_HIGH.mp4` |

## Commands

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm start
```

**Render video**

```console
npx remotion render
```

**Upgrade Remotion**

```console
npm run upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).
