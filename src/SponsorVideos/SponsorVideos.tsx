import {AbsoluteFill, Sequence, staticFile, useVideoConfig} from "remotion";
import {companies} from "../companies";
import {FittedVideo} from "../components/FittedVideo";

export const sponsorVideosDurationInFrames = (fps: number): number =>
  companies.reduce((total, {filmDurationInSeconds}) => total + Math.round(filmDurationInSeconds * fps), 0);

/** The image films only, one after the other: no logo slides, no job ads. */
export const SponsorVideos = () => {
  const {fps} = useVideoConfig();
  const durations = companies.map(({filmDurationInSeconds}) => Math.round(filmDurationInSeconds * fps));

  return (
    <AbsoluteFill>
      {companies.map((company, index) => (
        <Sequence
          key={company.slug}
          from={durations.slice(0, index).reduce((total, duration) => total + duration, 0)}
          durationInFrames={durations[index]}
        >
          <FittedVideo src={staticFile(company.filmFile)} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
