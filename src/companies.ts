export interface JobData {
  title: string;
  url: string;
}

export interface CompanyData {
  /** Short identifier; also the key prefix of the company's timeline items. */
  slug: string;
  name: string;
  logoUrl: string;
  /** Background of the company's logo slide and job slides. */
  bgColor: string;
  /** Image film, relative to public/. */
  filmFile: string;
  filmDurationInSeconds: number;
  /** Job ads shown after the film. Empty list means the company only gets slide + film. */
  jobs: JobData[];
}

export const endress: CompanyData = {
  slug: "endress",
  name: "Endress+Hauser",
  logoUrl: "https://www.endress.com/images/logo/EH_Logo-d9672165.svg",
  // White: the logo is dark, and the job slides have always been white.
  bgColor: "#FFFFFF",
  filmFile: "eh.mp4",
  filmDurationInSeconds: 21.5,
  jobs: [
    {
      url: "https://careers.endress.com/Germany/job/Freiburg-Senior-Software-Architect%2C-IIoT-Platform-(Netilion)-mfd-79110/1431922033/",
      title: "Senior Software Architect, IIoT Platform (Netilion) (m/f/d)"
    },
    {
      url: "https://careers.endress.com/Switzerland/job/Reinach-Solution-Development-Engineerin-80-100-(wmd)-4153/1442268833/",
      title: "Solution Development Engineer*in 80-100 % (w/m/d)"
    },
    {
      url: "https://careers.endress.com/Switzerland/job/Reinach-Data-Engineerin-(mwd)-4153/1446122233/",
      title: "Data Engineer*in (m/w/d)"
    },
    {
      url: "https://careers.endress.com/Switzerland/job/Reinach-Principal-Expert-Embedded-Software-(wmd)-4153/1280881301/",
      title: "Principal Expert Embedded Software (w/m/d)"
    }
  ]
};

export const pax: CompanyData = {
  slug: "pax",
  name: "Pax",
  // Only available as green wordmark + white dot, i.e. built for a dark background.
  logoUrl: "https://www.pax.ch/pax-logo-hell.svg",
  // Brand purple sampled from pax.mp4, so the slide cuts into the film seamlessly.
  bgColor: "#360073",
  filmFile: "pax.mp4",
  filmDurationInSeconds: 30,
  jobs: [
    {
      url: "https://ohws.prospective.ch/public/v1/jobs/a367a6e4-25bd-4fe3-b6bd-55ca6bbc950d",
      title: "Werkstudent IT, Informationssicherheit & Third-Party Risk Management (w/m/d)"
    }
  ]
};

// Order of this list is the order of the rendered program.
export const companies: CompanyData[] = [endress, pax];
