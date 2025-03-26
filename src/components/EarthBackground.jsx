import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";

const EarthBackground = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    const globe = Globe()(globeRef.current)
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png");

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 1;
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <div ref={globeRef} className="w-full h-full" />
    </div>
  );
};

export default EarthBackground;
