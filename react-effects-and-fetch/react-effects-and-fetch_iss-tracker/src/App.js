import { useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";
import { useEffect } from "react";
const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  // Define the function to fetch ISS coordinates
  const getISSCoords = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({
          longitude: data.longitude,
          latitude: data.latitude,
        });
      } else {
        throw new Error("Failed to fetch ISS coordinates");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // the useEffect hook to fetch ISS coordinates on component mount
  useEffect(() => {
    getISSCoords();
  }, []); // empty dependency array to run the effect only once on mount

  // refresh ISS coordinates every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      getISSCoords();
    }, 5000);

    // return a cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []); // empty dependency array to run the effect only once on mount

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
