import React from "react";
import useSWR, { mutate } from "swr";

import Controls from "../Controls/index";
import Map from "../Map/index";

// const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ISSTracker() {
  const { data, error, isValidating } = useSWR(
    "https://api.wheretheiss.at/v1/satellites/25544"
    // {
    //   refreshInterval: 5000,
    // }
  );

  const handleRefresh = () => {
    mutate("https://api.wheretheiss.at/v1/satellites/25544");
  };

  if (error) return <div>Failed to load</div>;
  if (!data || isValidating) return <div>Loading...</div>;

  const { longitude, latitude } = data;

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={handleRefresh}
      />
    </main>
  );
}
