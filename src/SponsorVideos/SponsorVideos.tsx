import {AbsoluteFill, Sequence, staticFile, useVideoConfig} from "remotion";
import {FittedVideo} from "../components/FittedVideo";

export const sponsorVideoData = [
  {name: "eh", durationInSeconds: 21.5},
  {name: "pax", durationInSeconds: 30}
];

export const sponsorVideosDurationInFrames = (fps: number): number =>
  sponsorVideoData.reduce((total, {durationInSeconds}) => total + Math.round(durationInSeconds * fps), 0);

export const SponsorVideos = () => {
  const {fps} = useVideoConfig();
  const durations = sponsorVideoData.map(({durationInSeconds}) => Math.round(durationInSeconds * fps));

  return (
    <AbsoluteFill>
      {sponsorVideoData.map(({name}, index) => (
        <Sequence
          key={name}
          from={durations.slice(0, index).reduce((total, duration) => total + duration, 0)}
          durationInFrames={durations[index]}
        >
          <FittedVideo src={staticFile(`${name}.mp4`)} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
