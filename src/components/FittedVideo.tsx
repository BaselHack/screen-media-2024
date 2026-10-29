import {AbsoluteFill, OffthreadVideo} from "remotion";

/**
 * Fills a 16:9 frame with a clip of any aspect ratio without black bars: the clip
 * is shown full-height and a blurred, darkened copy of it fills the rest of the frame.
 *
 * Uses OffthreadVideo (ffmpeg frame extraction) instead of Video: the plain <video>
 * element renders black frames while it seeks, which shows up as flicker at the start
 * of every clip.
 */
export const FittedVideo: React.FC<{src: string}> = ({src}) => {
  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <OffthreadVideo
          src={src}
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(40px) brightness(0.4)",
            transform: "scale(1.1)"
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
        {/* both copies are muted: the clips we use carry no usable audio */}
        <OffthreadVideo src={src} muted style={{height: "100%", width: "auto"}} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
