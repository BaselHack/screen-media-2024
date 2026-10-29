import {linearTiming, TransitionPresentation, TransitionSeries} from "@remotion/transitions";
import {fade} from "@remotion/transitions/fade";
import {flip} from "@remotion/transitions/flip";
import React from "react";

/** Length of every transition (1 s at 25 fps), as used by the original job wall. */
export const transitionInFrames = 25;

export type TransitionKind = "fade" | "flip";

export interface TimelineItem {
  key: string;
  durationInFrames: number;
  /** Transition leading into this item. Ignored for the first item. */
  transition?: TransitionKind;
  children: React.ReactNode;
}

const timing = linearTiming({durationInFrames: transitionInFrames});
const presentations: Record<TransitionKind, TransitionPresentation<Record<string, unknown>>> = {
  fade: fade(),
  flip: flip()
};

/**
 * Total length of a timeline. TransitionSeries overlaps the two sequences a transition
 * joins, so each transition shortens the result by its own duration.
 */
export const timelineDurationInFrames = (items: TimelineItem[]): number =>
  items.reduce((total, {durationInFrames}) => total + durationInFrames, 0) -
  items.slice(1).filter(({transition}) => transition !== undefined).length * transitionInFrames;

export const Timeline: React.FC<{items: TimelineItem[]}> = ({items}) => (
  <TransitionSeries>
    {items.flatMap(({key, durationInFrames, transition, children}, index) => [
      ...(index > 0 && transition
        ? [
            <TransitionSeries.Transition
              key={`${key}-transition`}
              presentation={presentations[transition]}
              timing={timing}
            />
          ]
        : []),
      <TransitionSeries.Sequence key={key} durationInFrames={durationInFrames}>
        {children}
      </TransitionSeries.Sequence>
    ])}
  </TransitionSeries>
);
