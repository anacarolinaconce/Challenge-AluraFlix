import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddVideo.css"; 

const AddVideo = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Frontend");
  const [image, setImage] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && category && image && videoUrl && description) {
      const newVideo = {
        id: Date.now(),
        title,
        category,
        image,
        videoUrl,
        description,
      };

      onAdd(newVideo);
      navigate("/");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  const handleClear = () => {
    setTitle("");
    setCategory("Frontend");
    setImage("");
    setVideoUrl("");
    setDescription("");
  };

  return (
    <div className="add-video-form">
      <h2>Adicionar Novo Vídeo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Categoria</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Inovação">Inovação</option>
            <option value="Gestão">Gestão</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="image">Imagem (URL)</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="videoUrl">URL do Vídeo (YouTube)</label>
          <input
            type="url"
            id="videoUrl"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleClear}>
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVideo;