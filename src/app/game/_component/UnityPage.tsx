"use client";

import { Unity } from "react-unity-webgl";

export default function UnityPage({ unityProvider }) {
  return (
    <Unity
      unityProvider={unityProvider}
      style={{
        width: "1152px",
        height: "648px",
        marginLeft: "384px",
        marginTop: "330px",
      }}
    />
  );
}
