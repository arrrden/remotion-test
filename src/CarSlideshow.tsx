import React, { FunctionComponent } from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Sequence } from "remotion";

const CarSlideshow: FunctionComponent = () => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();
  const left = interpolate(frame, [0, durationInFrames], [width, width * -1]);
  return (
    <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <Sequence from={0} durationInFrames={40}>
        <h1>"Hello"</h1>
      </Sequence>
      <Sequence from={40} durationInFrames={Infinity}>
      <h1>"World"</h1>
      </Sequence>
    </div>
  );
};

export default CarSlideshow;
