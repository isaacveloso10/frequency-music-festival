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
    </div>
  )
}

export default ArtistDetails