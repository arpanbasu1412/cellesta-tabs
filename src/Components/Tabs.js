import React, { useState } from 'react';
import './Tabs.css';

const tabData = {
  Patio: {
    title: "Patio (Ground Floor)",
    description: "Patio is designed for tranquility and leisure with natural landscapes, wellness areas, and various activity zones for all ages.",
    image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/one-mg1%20(1).webp",
    features: [
      { icon: "🏛️", label: "Mandir" },
      { icon: "🧒", label: "Kids' Play Area" },
      { icon: "🏃‍♂️", label: "Jogging Track" },
      { icon: "🧘‍♀️", label: "Yoga Deck" },
      { icon: "💧", label: "Natural Water Body" },
      { icon: "🚶‍♂️", label: "Elevated Walking Area" },
      { icon: "🧍", label: "Adda Zone" },
      { icon: "🎣", label: "Fishing Deck" }
    ]
  },
  Azura: {
    title: "Club Azura (3rd Floor)",
    description: "Club Azura offers a vibrant lifestyle with indoor and outdoor recreational facilities, fitness zones, and community spaces designed for relaxation and socializing.",
    image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/one-mg2%20(1).webp",
    features: [
      { icon: "🏊", label: "Swimming Pool & Kids Pool" },
      { icon: "🏛️", label: "AC Community Hall With Party Lawn" },
      { icon: "🎮", label: "Indoor Games Room" },
      { icon: "🏸", label: "Badminton Court" },
      { icon: "🎬", label: "Theatre Room" },
      { icon: "🌴", label: "Landscaped Deck Zone With Cabana" },
      { icon: "🧘", label: "Yoga & Zumba Room" },
      { icon: "📚", label: "Library & Cards Room" }
    ]
  },
  Panorama: {
    title: "Panorama (Roof Level)",
    description: "Panorama provides breathtaking views and a unique experience with elevated fitness areas, outdoor entertainment spaces, and serene relaxation zones.",
    image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/one-mg%20(1).webp",
    features: [
      { icon: "🏙️", label: "Skydeck - 320ft Above The Ground Level" },
      { icon: "🍖", label: "Barbeque Zone" },
      { icon: "🏋️‍♂️", label: "Outdoor Gym" },
      { icon: "🔭", label: "Telescope Deck" },
      { icon: "👴", label: "Elders' Adda Zone" },
      { icon: "🌌", label: "Star Gazing Area" },
      { icon: "🛋️", label: "Open Lounge" },
      { icon: "🦶", label: "Foot Reflexology Walk" }
    ]
  }
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Patio');

  const { image, title, description, features } = tabData[activeTab];

  return (
    <div className="tabs-wrapper">
      <div className="tabs-header">
        {Object.keys(tabData).map(tab => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <div className="image-section">
          <img src={image} alt={title} />
        </div>
        <div className="text-section">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-label">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
