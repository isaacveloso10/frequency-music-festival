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
    <div className="artists-page">
      <h1 className="artists-title">ARTISTS.</h1>
      
      <ul className="artists-grid">
        {artists.map((artist) => (
          <li className="artist-card" key={artist.id}>
  <Link to={`/artists/${artist.id}`}>
<img src={artist.image} alt={artist.name} />
  <h2>{artist.name}</h2>
  <p>{artist.genre}</p>
</Link>
</li>

        ))}
      </ul>
    </div>
  );
}

export default Lineup;

