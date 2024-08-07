import React, { useEffect } from "react";
import Modules from "./modules";
import Module from "./module";

const ts = require("./ts.json");

export const App = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [voice, setVoice] = React.useState(voices[2]);
  const [repeat, setRepeat] = React.useState(2);
  const [module, setModule] = React.useState(null);

  useEffect(() => {
    setTimeout(() => setIsReady(true), 2100);
  }, []);

  const say = (text) => ts[text] || text;

  const p = {
    say,
    voices,
    voice,
    setVoice,
    repeat,
    setRepeat,
    module,
    setModule
  };

  return (
    <>
      {!isReady && <BrandedOverlay />}

      {!module && <Modules {...p} />}
      {module && <Module {...p} />}
    </>
  );
};

const BrandedOverlay = () => {
  return (
    <div className="branded-overlay">
      <img
        src="/logo.png"
        width={80}
        height={80}
        alt="EnglishFlow.AI - Engleza ușor și rapid"
      />
    </div>
  );
};

const voices = [
  "American (Male)",
  "American (Female)",
  "British (Male)",
  "British (Female)",
];
