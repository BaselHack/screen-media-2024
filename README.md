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

With [mise](https://mise.jdx.dev) (`mise.toml` pins Node and wraps the npm scripts):

```console
mise run                  # render both videos into out/ (default task)
mise run render           # same as above
mise run render:jobwall   # out/jobwall.mp4 only
mise run render:sponsor   # out/sponsorvideos.mp4 only
mise run studio           # Remotion preview
mise run check            # eslint + tsc
mise run clean            # delete out/
```

`render` checks that `public/eh.mp4` and `public/pax.mp4` exist and skips the render
when nothing under `src/`, `public/` or the Remotion config changed.

Or directly with npm:

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
npm run build   # both videos; npm run build:jobwall / build:sponsor for one
```

**Upgrade Remotion**

```console
npm run upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).
