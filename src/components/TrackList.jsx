import { useNavigate } from "react-router-dom";

const TrackList = (props) => {
  const navigate = useNavigate();
  const tracks = props.trackList.map((track) => (
    <a
      className="trackBox"
      key={track._id}
      onClick={() => props.updateSelected(track)}
    >
      <li>Title: {track.title}</li>
      <li>Artist: {track.artist}</li>
      <button
        className="button"
        onClick={() => {
          props.handleNowPlaying(track);
        }}
      >
        Play
      </button>
      <button
        className="button"
        onClick={() => {
          navigate(`/edit-track/${track._id}`);
        }}
      >
        Edit
      </button>
      <button
        className="button"
        onClick={() => {
          props.handleRemoveTrack(track._id);
        }}
      >
        Delete
      </button>
    </a>
  ));
  return (
    <div className="tracklistContainer">
      <h1 className="tracklist">Track List</h1>

      {!props.trackList.length ? (
        <h2>No Tracks Yet!</h2>
      ) : (
        <div className="track-grid">{tracks}</div>
      )}
    </div>
  );
};

export default TrackList;
