import {staticFile} from "remotion";
import {CompanyData} from "../companies";
import {CompanySlide, secondsPerCompanySlide} from "./CompanySlide";
import {FittedVideo} from "./FittedVideo";
import {JobSlide} from "./JobSlide";
import {TimelineItem} from "./Timeline";

/** Seconds each job ad stays on screen. */
export const secondsPerJob = 8;

export interface CompanySectionOptions {
  /** Put the company's logo slide in front of its film (the separator between companies). */
  withSlide: boolean;
}

/**
 * Timeline items of one company: [logo slide,] image film, then one slide per job ad.
 * Job slides come from the company's `jobs` list, so adding jobs there is all it takes.
 */
export const companyTimelineItems = (company: CompanyData, fps: number, {withSlide}: CompanySectionOptions): TimelineItem[] => {
  const items: TimelineItem[] = [];

  if (withSlide) {
    items.push({
      key: `${company.slug}-slide`,
      durationInFrames: Math.round(secondsPerCompanySlide * fps),
      transition: "fade",
      children: <CompanySlide company={company} />
    });
  }

  items.push({
    key: `${company.slug}-film`,
    durationInFrames: Math.round(company.filmDurationInSeconds * fps),
    transition: withSlide ? "fade" : undefined,
    children: <FittedVideo src={staticFile(company.filmFile)} />
  });

  company.jobs.forEach((job, index) => {
    items.push({
      key: `${company.slug}-job-${index}`,
      durationInFrames: Math.round(secondsPerJob * fps),
      transition: "flip",
      children: <JobSlide job={job} logoUrl={company.logoUrl} bgColor={company.bgColor} />
    });
  });

  return items;
};
