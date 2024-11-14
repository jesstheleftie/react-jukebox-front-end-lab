const NowPlaying = (props) => {
  return (
    <>
      <div className="nowPlayingBox">
        <h2 className="nowPlayingTitle">Now Playing:</h2>
        <h3 className="title">
          Title: <span className="song">{props.nowPlaying.title}</span>
        </h3>

        <h3 className="title">
          Artist: <span className="song">{props.nowPlaying.artist}</span>
        </h3>
      </div>
    </>
  );
};

export default NowPlaying;
