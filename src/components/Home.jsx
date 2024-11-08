import { useState, useEffect } from "react";
import TrackList from "./TrackList";
import trackService from "../services/trackService";
const Home = () => {
  const [trackList, setTrackList] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const tracks = await trackService.index();
        if (tracks.error) {
          throw new Error(tracks.error);
        }
        setTrackList(tracks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTracks();
  }, []);

  const updateSelected = (track) => {
    setSelected(track);
  };

  return <TrackList trackList={trackList} updateSelected={updateSelected} />;
};

export default Home;
