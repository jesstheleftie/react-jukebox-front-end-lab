import { useState, useEffect } from "react";
import TrackList from "./TrackList";
import trackService from "../services/trackService";
import { useNavigate } from "react-router-dom";
import TrackForm from "./TrackForm";
import NowPlaying from "./NowPlaying";

const Home = () => {
  const navigate = useNavigate();

  const [trackList, setTrackList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [trackForm, setTrackForm] = useState();
  const [nowPlaying, setNowPlaying] = useState({});
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

  const handleRemoveTrack = async (trackId) => {
    try {
      const deletedTrack = await trackService.deleteTrack(trackId);

      if (deletedTrack.error) {
        throw new Error(deletedTrack.error);
      }
      setTrackList(trackList.filter((track) => track._id !== deletedTrack._id));

      setSelected(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNowPlaying = (obj) => {
    setNowPlaying(obj);
  };

  return (
    <>
      <button className="newTrackButton"
        onClick={() => {
          navigate("/add-track");
        }}
      >
        Add New Track
      </button>
      <TrackList
        trackList={trackList}
        selected={selected}
        updateSelected={updateSelected}
        handleRemoveTrack={handleRemoveTrack}
        handleNowPlaying={handleNowPlaying}
      />
      {nowPlaying.title ? <NowPlaying nowPlaying={nowPlaying} /> : ""}
    </>
  );
};

export default Home;
