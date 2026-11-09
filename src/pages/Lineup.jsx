import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Lineup() {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        axios.get("https://module-2-json-server-nv61.onrender.com/artists")
            .then((response) => {
                setArtists(response.data);
            })
            .catch((error) => {
                console.error("Error fetching artists:", error);
            });
    }, []);
  return (
    <div>
      <h1>Lineup</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
  <Link to={`/artists/${artist.id}`}>
    {artist.name}
  </Link>
</li>
        ))}
      </ul>
    </div>
  );
}

export default Lineup;