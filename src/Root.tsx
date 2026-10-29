import './tailwind.css';
import { Composition } from "remotion";
import {JobWall, jobWallDurationInFrames} from "./JobWall/JobWall";
import {Program, programDurationInFrames} from "./Program/Program";
import {sponsorVideosDurationInFrames, SponsorVideos} from "./SponsorVideos/SponsorVideos";

// All source clips are 25 fps, so rendering at 25 fps avoids the duplicate frames
// (judder) that a 30 fps timeline would produce.
const FPS = 25;

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Program"
        component={Program}
        durationInFrames={programDurationInFrames(FPS)}
        fps={FPS}
        width={1920}
        height={1080}
      />

      <Composition
        id="JobWall"
        component={JobWall}
        durationInFrames={jobWallDurationInFrames(FPS)}
        fps={FPS}
        width={1920}
        height={1080}
      />

      <Composition
        id="SponsorVideos"
        component={SponsorVideos}
        durationInFrames={sponsorVideosDurationInFrames(FPS)}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
