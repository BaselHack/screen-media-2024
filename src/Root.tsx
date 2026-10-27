import './tailwind.css';
import { Composition } from "remotion";
import {JobWall} from "./JobWall/JobWall";
import {segDurationSecs, sponsorVideoData, SponsorVideos} from "./SponsorVideos/SponsorVideos";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="JobWall"
        component={JobWall}
        durationInFrames={30 * 60 * 2}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="SponsorVideos"
        component={SponsorVideos}
        durationInFrames={sponsorVideoData.length * 30 *segDurationSecs }
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
