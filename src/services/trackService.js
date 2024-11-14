import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const index = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const addTrack = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/`, formData);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
const editTrack = async (_id, formData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${_id}`, formData);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

const getTrackById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

const deleteTrack = async (trackId) => {
  try {
    const deletedTrack = await axios.delete(`${BASE_URL}/${trackId}`);

    return deletedTrack.data;
  } catch (err) {
    console.log(err);
  }
};

export default { index, addTrack, editTrack, getTrackById, deleteTrack };
