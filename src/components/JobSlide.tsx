import {AbsoluteFill, Img, useVideoConfig} from "remotion";
import {QRCodeCanvas} from "qrcode.react";
import {JobData} from "../companies";

export const JobSlide: React.FC<{job: JobData; logoUrl: string; bgColor: string}> = ({job, logoUrl, bgColor}) => {
  const {width, height} = useVideoConfig();
  const fgColor = findFg(bgColor);

  return (
    <AbsoluteFill style={{backgroundColor: bgColor, color: fgColor}}>
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
            value={job.url}
            size={Math.min(width, height) / 2}
            fgColor={fgColor}
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
          {job.title}
        </h2>
      </div>
    </AbsoluteFill>
  );
};

function findFg(bgColor: string): string {
  return parseInt(bgColor.replace("#", ""), 16) > 0xffffff / 2 ? "#000" : "#fff";
}
