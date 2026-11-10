import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function ArtistDetails() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [stage, setStage] = useState(null);

  useEffect(() => {
    axios.get(`https://module-2-json-server-nv61.onrender.com/artists/${id}`)
      .then((response) => {
        setArtist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching artist:", error);
      });
  }, [id]);

  useEffect(() => {
    if (!artist) return;

    axios
      .get(`https://module-2-json-server-nv61.onrender.com/stages/${artist.stageId}`)
      .then((response) => {
        setStage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stage:", error);
      });
  }, [artist]);

   const handleDelete = () => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this artist?"
  );

  if (!confirmed) {
    return;
  }

  axios
    .delete(`https://module-2-json-server-nv61.onrender.com/artists/${id}`)
    .then(() => {
      navigate("/lineup");
    })
    .catch((error) => {
      console.error("Error deleting artist:", error);
    });
};

  if (!artist) {
      return <p>Loading artist...</p>;

  }

  return (
    <div>
      <h1>{artist.name}</h1>
      <h2>{artist.genre}</h2>
      <p>{artist.bio}</p>

      <p>{artist.day}</p>
      <p>{artist.time}</p>
      <p>{stage?.name || "Loading stage..."}</p>
      <button onClick={handleDelete}>Delete Artist</button>
    </div>
  )
}

export default ArtistDetails