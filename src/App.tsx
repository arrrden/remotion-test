import React, { useState, useRef, useEffect, FunctionComponent } from "react";
import "./styles.css";
import VideoPreview from "./VideoPreview";
import { Internals } from "remotion";

const slides = [
  {
    imageUrl: "./images/silverado-back-left.jpg",
    caption: "What an amazing car!",
    transition: "transition_fade"
  },
  {
    imageUrl: "./images/silverado-back-right.jpg",
    caption: "Buy it now, the price is right",
    transition: "transition_fade"
  },
  {
    imageUrl: "./images/silverado-front.jpg",
    caption: "Looks good from the front",
    transition: "transition_fade"
  },
  {
    imageUrl: "./images/silverado-left.jpg",
    caption: "She's a beauty",
    transition: "transition_fade"
  }
];

export default function App() {
  const rootRef = useRef<FunctionComponent | null>(null);
  const Root = rootRef.current;
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    const Root = Internals.getRoot();
    rootRef.current = Root;
    setIsInitialized(true);
  }, []);
  return isInitialized ? (
    <Internals.RemotionRoot>
      <Root />
      <div className="App">
        <VideoPreview slides={slides} />
      </div>
    </Internals.RemotionRoot>
  ) : null;
}
