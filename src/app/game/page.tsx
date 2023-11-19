"use client";

import { useRef } from "react";
import Detail from "@/components/Detail";
import Pointer from "./_component/Pointer";
import UnityPage from "./_component/UnityPage";
import GameLoading from "./_component/GameLoading";

import { useUnityContext } from "react-unity-webgl";

export default function Home() {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: "build/test.loader.js",
    dataUrl: "build/test.data",
    frameworkUrl: "build/test.framework.js",
    codeUrl: "build/test.wasm",
  });

  const contentRef = useRef<HTMLDivElement>(null);

  const onContentClick = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Pointer e={onContentClick} />
      {isLoaded === false && <GameLoading />}
      <UnityPage unityProvider={unityProvider} />
      <Detail e={contentRef} />
    </div>
  );
}
