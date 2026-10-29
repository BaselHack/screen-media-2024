import {AbsoluteFill, useVideoConfig} from "remotion";
import {companies} from "../companies";
import {companyTimelineItems} from "../components/companySection";
import {Timeline, timelineDurationInFrames} from "../components/Timeline";

const programTimelineItems = (fps: number) =>
  companies.flatMap((company) => companyTimelineItems(company, fps, {withSlide: true}));

export const programDurationInFrames = (fps: number): number => timelineDurationInFrames(programTimelineItems(fps));

/** Whole screening: for every company its logo slide, image film and job ads, in order. */
export const Program: React.FC = () => {
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: "#000000"}}>
      <Timeline items={programTimelineItems(fps)} />
    </AbsoluteFill>
  );
};
