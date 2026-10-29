import {AbsoluteFill, useVideoConfig} from "remotion";
import {endress} from "../companies";
import {companyTimelineItems} from "../components/companySection";
import {Timeline, timelineDurationInFrames} from "../components/Timeline";

const jobWallTimelineItems = (fps: number) => companyTimelineItems(endress, fps, {withSlide: false});

export const jobWallDurationInFrames = (fps: number): number => timelineDurationInFrames(jobWallTimelineItems(fps));

/** Endress only: image film then job ads, without the logo slide. */
export const JobWall: React.FC = () => {
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: "#000000"}}>
      <Timeline items={jobWallTimelineItems(fps)} />
    </AbsoluteFill>
  );
};
