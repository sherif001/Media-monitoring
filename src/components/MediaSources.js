// src/components/MediaSources.js
import React, { useEffect, useState } from 'react';
import './MediaSources.css'; // يمكنك إنشاء ملف CSS خاص بالمكون إذا رغبت

const MediaSources = () => {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    fetch('/mediasources.json')
      .then(response => response.json())
      .then(data => setSources(data))
      .catch(error => console.error('Error fetching media sources:', error));
  }, []);

  return (
    <div className="media-sources">
      <h2>مصادر الإعلام</h2>
      <ul>
        {sources.map(source => (
          <li key={source.id}>
            <strong>{source.name}</strong> - {source.source_type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaSources;
