import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./componentes/Card/Card";
import Modal from "./componentes/Modal/Modal";
import AddVideo from "./componentes/AddVideo/AddVideo";
import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Banner from "./componentes/Banner/Banner";
import CategorySection from "./componentes/CategorySection/CategorySection";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch("http://localhost:3000/videos");
      const data = await response.json();
      setVideos(data);
    };

    fetchVideos();
  }, []);

  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleSave = (updatedVideo) => {
    setVideos(videos.map((video) => (video.id === updatedVideo.id ? updatedVideo : video)));
    setIsModalOpen(false);
  };

  const handleAddVideo = (newVideo) => {
    setVideos([...videos, newVideo]);
  };

  const frontendVideos = videos.filter(video => video.category === 'Frontend');
  const backendVideos = videos.filter(video => video.category === 'Backend');
  const inovacaoVideos = videos.filter(video => video.category === 'Inovação');
  const gestaoVideos = videos.filter(video => video.category === 'Gestão');

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <Banner
                  image="https://digital.unesc.net/hubfs/internet-das-coisas-a-tecnologia-que-esta-cada-vez-mais-presente-em-tudo.png" 
                  title="Bem-vindo ao AluraFlix!"
                  description="Aqui você encontra vídeos incríveis sobre tecnologia e desenvolvimento."
                />
               
                <CategorySection id = "1" title="Frontend" videos={frontendVideos} onDelete={handleDelete} onEdit={handleEdit} />
                <CategorySection title="Backend" videos={backendVideos} onDelete={handleDelete} onEdit={handleEdit} />
                <CategorySection title="Inovação" videos={inovacaoVideos} onDelete={handleDelete} onEdit={handleEdit} />
                <CategorySection title="Gestão" videos={gestaoVideos} onDelete={handleDelete} onEdit={handleEdit} />
              </>
            }
          />

          <Route path="/add-video" element={<AddVideo onAdd={handleAddVideo} />} />
        </Routes>
        {isModalOpen && <Modal video={selectedVideo} onClose={() => setIsModalOpen(false)} onSave={handleSave} />}
        <Footer />
      </div>
    </Router>
  );
};

export default App;