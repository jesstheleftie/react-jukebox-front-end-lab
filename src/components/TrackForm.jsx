import { useEffect, useState } from "react";
import axios from "axios";
import TrackService from "../services/trackService";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const TrackForm = (props) => {
  let location = useLocation();

  const { trackId } = useParams();
  const navigate = useNavigate();
  // formData state to control the form
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
  });

  // handleChange function to update formData state
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let response = await TrackService.addTrack(formData);
      console.log("res", response);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleSubmitEdit = async (evt) => {
    evt.preventDefault();
    try {
      let response = await TrackService.editTrack(trackId, formData);
      console.log("res", response);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const getTrack = async () => {
    try {
      let response = await TrackService.getTrackById(trackId);
      console.log("rrres", response);
      setFormData({ title: response.title, artist: response.artist });
    } catch (err) {}
  };

  useEffect(() => {
    if (location.pathname.includes("edit")) {
      getTrack();
    }
  }, [location]);

  return (
    <div>
      <form>
        <label htmlFor="title"> Title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="artist"> Artist </label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        {location.pathname.includes("edit") ? (
          <button type="submit" onClick={handleSubmitEdit}>
            Edit Track
          </button>
        ) : (
          <button type="submit" onClick={handleSubmit}>
            Add New Track
          </button>
        )}
      </form>
    </div>
  );
};

export default TrackForm;
