import React from "react";
import "./Card.css";


const Card = ({ video, onDelete, onEdit }) => {
  return (
    <div className="video-card">
      <div className="video-frame">
        <iframe
          width="300"
          height="200"
          src={video.videoUrl}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="video-details">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <div className="video-actions">
          <button onClick={() => onEdit(video)}>Editar</button>
          <button onClick={() => onDelete(video.id)}>Deletar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;