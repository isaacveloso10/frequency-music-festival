import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Schedule() {
  const [artists, setArtists] = useState([]);
  const [selectedDay, setSelectedDay] = useState("Friday");
  
  useEffect(() => {
    axios
      .get("https://module-2-json-server-nv61.onrender.com/artists")
      .then((response) => {
        setArtists(response.data);
      })
      .catch((error) => {
        console.error("Error fetching artists:", error);
      });
  }, []);
  const fridayArtists = artists.filter((artist) => artist.day === "Friday");
  const saturdayArtists = artists.filter((artist) => artist.day === "Saturday");
  const sundayArtists = artists.filter((artist) => artist.day === "Sunday");

  const fridayMainStage = fridayArtists.filter(
    (artist) => artist.stageId === "1",
  );
  const fridayGardenStage = fridayArtists.filter(
    (artist) => artist.stageId === "2",
  );
  const saturdayMainStage = saturdayArtists.filter(
    (artist) => artist.stageId === "1",
  );
  const saturdayGardenStage = saturdayArtists.filter(
    (artist) => artist.stageId === "2",
  );
  const sundayMainStage = sundayArtists.filter(
    (artist) => artist.stageId === "1",
  );
  const sundayGardenStage = sundayArtists.filter(
    (artist) => artist.stageId === "2",
  );
  return (
    <div>
      <h1>Schedule</h1>
      <div>
  <button   className={selectedDay === "Friday" ? "active" : ""}
onClick={() => setSelectedDay("Friday")}>
    Friday
  </button>

  <button   className={selectedDay === "Saturday" ? "active" : ""}
onClick={() => setSelectedDay("Saturday")}>
    Saturday
  </button>

  <button   className={selectedDay === "Sunday" ? "active" : ""}
  onClick={() => setSelectedDay("Sunday")}>
    Sunday
  </button>
</div>
     {selectedDay === "Friday" && (
  <> <h2>Friday</h2>
      <h3>Main Stage</h3>
      <ul>
        {fridayMainStage.map((artist) => (
          <li key={artist.id}>
  <Link to={`/artists/${artist.id}`}>
    {artist.name}
  </Link>
  {" - "}{artist.time}
</li>
        ))}
      </ul>
      <h3>Garden Stage</h3>
      <ul>
        {fridayGardenStage.map((artist) => (
          <li key={artist.id}>
  <Link to={`/artists/${artist.id}`}>
    {artist.name}
  </Link>
  {" - "}{artist.time}
</li>
        ))}
      </ul>  </>
)}
    {selectedDay === "Saturday" && (
  <>  <h2>Saturday</h2>
      <h3>Main Stage</h3>
      <ul>
        {saturdayMainStage.map((artist) => (
          <li key={artist.id}>
  <Link to={`/artists/${artist.id}`}>
    {artist.name}
  </Link>
  {" - "}{artist.time}
</li>
        ))}
      </ul>
      <h3>Garden Stage</h3>
      <ul>
        {saturdayGardenStage.map((artist) => (
          <li key={artist.id}>
  <Link to={`/artists/${artist.id}`}>
    {artist.name}
  </Link>
  {" - "}{artist.time}
</li>
        ))}
      </ul>  </>
)}
   {selectedDay === "Sunday" && (
  <>  <h2>Sunday</h2>
      <h3>Main Stage</h3>
      <ul>
        {sundayMainStage.map((artist) => (
          <li key={artist.id}>
  <Link to={`/artists/${artist.id}`}>
    {artist.name}
  </Link>
  {" - "}{artist.time}
</li>
        ))}
      </ul>
      <h3>Garden Stage</h3>
      <ul>
        {sundayGardenStage.map((artist) => (
          <li key={artist.id}>
  <Link to={`/artists/${artist.id}`}>
    {artist.name}
  </Link>
  {" - "}{artist.time}
</li>
        ))}
      </ul> </>
)}
    </div>
  );
}

export default Schedule;
