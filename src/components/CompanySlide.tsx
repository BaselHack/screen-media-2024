import {AbsoluteFill, Img} from "remotion";
import {CompanyData} from "../companies";

/** Seconds the company logo slide stays on screen. */
export const secondsPerCompanySlide = 4;

/** Separator announcing the next company: its logo on the company's background colour. */
export const CompanySlide: React.FC<{company: CompanyData}> = ({company}) => (
  <AbsoluteFill style={{backgroundColor: company.bgColor, justifyContent: "center", alignItems: "center"}}>
    <Img
      src={company.logoUrl}
      alt={`${company.name} logo`}
      style={{width: "35%", height: "auto", maxHeight: "35%", objectFit: "contain"}}
    />
  </AbsoluteFill>
);
