import {AbsoluteFill, Img, useVideoConfig} from "remotion";
import {CompanyData} from "../companies";

/** Seconds the company logo slide stays on screen. */
export const secondsPerCompanySlide = 4;

const defaultLogoWidthPercent = 35;

/** Frame thickness as a fraction of the frame width, matching the border in adobe.mp4. */
const frameWidthRatio = 0.012;

/** Separator announcing the next company: its logo on the company's background colour. */
export const CompanySlide: React.FC<{company: CompanyData}> = ({company}) => {
  const {width} = useVideoConfig();
  const {frameColor, logoWidthPercent = defaultLogoWidthPercent} = company.slide ?? {};

  return (
    <AbsoluteFill
      style={{
        backgroundColor: company.bgColor,
        justifyContent: "center",
        alignItems: "center",
        // Border-box so the frame is drawn inside the frame, not around it.
        boxSizing: "border-box",
        border: frameColor ? `${Math.round(width * frameWidthRatio)}px solid ${frameColor}` : undefined
      }}
    >
      <Img
        src={company.logoUrl}
        alt={`${company.name} logo`}
        style={{width: `${logoWidthPercent}%`, height: "auto", maxHeight: "35%", objectFit: "contain"}}
      />
    </AbsoluteFill>
  );
};
