import React, { useState } from "react";
import "./Modal.css"; 

const Modal = ({ video, onClose, onSave }) => {
  const [title, setTitle] = useState(video.title);
  const [category, setCategory] = useState(video.category);
  const [image, setImage] = useState(video.image);
  const [videoUrl, setVideoUrl] = useState(video.videoUrl);
  const [description, setDescription] = useState(video.description);

  const handleSave = () => {
    const updatedVideo = {
      ...video,
      title,
      category,
      image,
      videoUrl,
      description,
    };
    onSave(updatedVideo);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Vídeo</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="videoUrl">URL do Vídeo (YouTube)</label>
            <input
              type="url"
              id="videoUrl"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-buttons">
            <button type="button" onClick={handleSave}>
              Salvar
            </button>
            <button type="button" onClick={onClose}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;