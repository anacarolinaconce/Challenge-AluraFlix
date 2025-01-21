import React from "react";
import Card from "../Card/Card";
import './CategorySection.css';

const CategorySection = ({ title, videos, onDelete, onEdit }) => {
  return (
    <section className="category-section">
      <h2>{title}</h2>
      <div className="video-list">
        {videos.map((video) => (
          <Card key={video.id} video={video} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;