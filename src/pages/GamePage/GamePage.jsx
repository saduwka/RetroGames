import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameDetails } from "../../services/gamesServices";
import styles from "./GamePage.module.css";

function GamePage() {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      const data = await getGameDetails(id);
      setGameDetails(data);
    };

    fetchGameDetails();
  }, [id]);

  if (!gameDetails) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.gamePageContainer}>
      <h1 className={styles.gamePageHeader}>{gameDetails.name}</h1>
      <div className={styles.gamePageImageContainer}>
        <img
          className={styles.gamePageImage}
          src={gameDetails.background_image || gameDetails.image_background}
          alt={gameDetails.name}
        />
      </div>
      <div className={styles.gamePageDetails}>
        <p>
          <strong>Release Date:</strong> {gameDetails.released}
        </p>
        <p>
          <strong>Rating:</strong> {gameDetails.rating}
        </p>
        <p>
          <strong>Metacritic:</strong> {gameDetails.metacritic || "N/A"}
        </p>
        <p>
          <strong>Description:</strong> {gameDetails.description_raw}
        </p>
        <p>
          <strong>Platforms:</strong>
          {gameDetails.platforms
            ? gameDetails.platforms
                .map((platform) => platform.platform.name)
                .join(", ")
            : "N/A"}
        </p>
        {gameDetails.website && (
          <p>
            <strong>Website:</strong>
            <a
              href={gameDetails.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default GamePage;
