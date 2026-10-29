import {AbsoluteFill, Img, staticFile, useVideoConfig} from "remotion";
import {jobs} from "./jobs";
import {QRCodeCanvas} from "qrcode.react";
import {flip} from "@remotion/transitions/flip";
import {linearTiming, TransitionSeries} from "@remotion/transitions";
import {FittedVideo} from "../components/FittedVideo";

const introVideoFile = "eh.mp4";
const introDurationInSeconds = 21.5;
const secondsPerJob = 8;
const transitionInFrames = 25;

export const jobWallDurationInFrames = (fps: number): number =>
  Math.round(introDurationInSeconds * fps) +
  jobs.length * secondsPerJob * fps -
  jobs.length * transitionInFrames;

export const JobWall: React.FC = () => {
  const {fps, width, height} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: "#000000"}}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={Math.round(introDurationInSeconds * fps)}>
          <FittedVideo src={staticFile(introVideoFile)} />
        </TransitionSeries.Sequence>
        {jobs.flatMap(({title, url, logoUrl, bgColor}) => [
          <TransitionSeries.Transition
            key={`${title}-transition`}
            presentation={flip()}
            timing={linearTiming({durationInFrames: transitionInFrames})}
          />,
          <TransitionSeries.Sequence key={title} durationInFrames={secondsPerJob * fps}>
            <AbsoluteFill style={{backgroundColor: bgColor, color: findFg(bgColor)}}>
              <Img
                style={{
                  position: "absolute",
                  width: "300px",
                  top: "25px",
                  right: "25px"
                }}
                src={logoUrl}
                alt="company logo"
              />
              <div style={{textAlign: "center"}}>
                <div style={{width: "100%"}}>
                  <QRCodeCanvas
                    style={{margin: "50px auto"}}
                    value={url}
                    size={Math.min(width, height) / 2}
                    fgColor={findFg(bgColor)}
                    bgColor={bgColor}
                  />
                </div>
                <h2
                  style={{
                    margin: "20px auto 0",
                    maxWidth: "90%",
                    fontSize: "5.5em",
                    lineHeight: 1.15
                  }}
                >
                  {title}
                </h2>
              </div>
            </AbsoluteFill>
          </TransitionSeries.Sequence>
        ])}
      </TransitionSeries>
    </AbsoluteFill>
  );
};

function findFg(bgColor: string): string {
  return parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2 ? '#000' : '#fff';
}
